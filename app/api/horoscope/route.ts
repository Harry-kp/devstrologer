import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fetch from "node-fetch";
import { generateHoroscopePrompt } from "@/data/prompt";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

function getZodiacSign(birthDate: string): string {
  const date = new Date(birthDate);
  const day = date.getDate();
  const month = date.getMonth() + 1; // getMonth() returns 0-11

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
    return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
    return "Sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
    return "Capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
    return "Aquarius";
  return "Pisces";
}

async function getTraditionalHoroscope(birthDate: string) {
  const sign = getZodiacSign(birthDate);
  const url = `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign.toLowerCase()}&day=TODAY`;

  try {
    const response = await fetch(url, { method: "GET" });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = (await response.json()) as { data: { horoscope_data: string } };
    return `As a ${sign}, Your general horoscope for today is ${res.data.horoscope_data}.`;
  } catch (error) {
    console.error("Error fetching horoscope:", error);
    return `As a ${sign}, your natural ${sign} traits will influence your coding journey today. (Error fetching detailed horoscope)`;
  }
}

export async function POST(request: Request) {
  var { language, birthDate, userInput, yearsOfExperience, currentProject } =
    await request.json();
  userInput = userInput.trim(50);

  const traditionalHoroscope = await getTraditionalHoroscope(birthDate);
  const zodiacSign = getZodiacSign(birthDate);

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = generateHoroscopePrompt(
    zodiacSign,
    language,
    yearsOfExperience,
    currentProject,
    traditionalHoroscope,
    userInput,
  );
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    var horoscopeText = response.text();
    // Parse the JSON response
    const horoscopeData = JSON.parse(horoscopeText);

    return NextResponse.json({ ...horoscopeData, zodiacSign });
  } catch (error) {
    console.error("Error generating horoscope:", error);
    return NextResponse.json(
      { error: "Failed to generate horoscope" },
      { status: 500 },
    );
  }
}
