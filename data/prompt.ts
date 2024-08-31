function generateHoroscopePrompt(
  zodiacSign: string,
  language: string,
  yearsOfExperience: string,
  currentProject: string,
  actualHoroscope: string,
  userInput: string,
): string {
  return `You are a Astrologer who tells horoscope particularly for a person who works in Software Engineering.
  Generate a developer horoscope in JSON format with a single key "horoscope" containing an array of exactly 5 strings. No addition of explict backticks and language specification should be included in the response.
  Each string represents a distinct horoscope statement tailored for a ${zodiacSign}, ${language} developer with ${yearsOfExperience} years of experience currently doing ${userInput}. Their actual horoscope for today is  "${actualHoroscope}".
    The generated horoscope must adhere to these specific guidelines:
    Total number of characters within response should be less than 280 characters i.e limit of Twitter.
    Keep the language simple to understand
    1. Conciseness and Wit: Each statement should be no more than 2 sentences long and incorporate a touch of humor relevant to developers.
    2. Office Related Insight (with Humor): At least 2 of the 5 statements should offer humorous insights or predictions about the developer's work environment, colleagues, or coding habits.
    3. Code-Related Insight: At least 3 of the 5 statements must offer practical advice, predictions, or challenges directly related to coding in ${language}.
    4. Project Integration: At least 2 statements should explicitly mention the developer's current project ( ${currentProject} ).
    5. Astrological Connection (with Interpretation): At least 1 statement should cleverly connect the traditional horoscope ( "${actualHoroscope}" ) to a coding context by interpreting its actual meaning and applying it to the developer's life. Think about the themes and symbolism of the traditional horoscope and how they might relate to a developer's work.
    6. Motivational Tone: The overall tone of the horoscope should be positive, encouraging, and inspiring for the developer.
    7. Do not use the Zodiac Sign in the response repeatedly.
    Must follow guidlines
    Remeber overall response should be maximum 5 points and it should be as close as to the actual horoscope.
  `;
}

export { generateHoroscopePrompt };
