"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Loader2, Telescope, Star, Hand } from "lucide-react";
import { Label } from "@/components/ui/label";
import { BsTwitterX } from "react-icons/bs";

export default function Home() {
  const [userData, setUserData] = useState({
    language: "",
    birthDate: "",
    favoriteFramework: "",
    yearsOfExperience: "",
    currentProject: "",
    userInput: "",
    userName: "",
  });
  const [horoscope, setHoroscope] = useState<string[]>([]);
  const [zodiacSign, setZodiacSign] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const generateHoroscope = async () => {
    if (!userData.birthDate) return;
    setIsLoading(true); // Set loading to true when starting
    try {
      const response = await fetch("/api/horoscope", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error("Failed to generate horoscope");
      const data = await response.json();
      setHoroscope(data.horoscope);
      setZodiacSign(data.zodiacSign);
    } catch (error) {
      console.error("Error:", error);
      setHoroscope([
        "Sorry, there was an error generating your horoscope. Please try again.",
      ]);
    } finally {
      setIsLoading(false); // Set loading to false when done
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 flex items-center">
        <Telescope className="mr-2 h-8 w-8 text-black-500" />
        DevStrologer
      </h1>{" "}
      <div className="w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="birthDate">Date of Birth</Label>
          <Input
            type="date"
            name="birthDate"
            id="birthDate"
            onChange={handleInputChange}
            placeholder="Date of Birth"
            disabled={isLoading}
          />
        </div>
        <Input
          name="userName"
          onChange={handleInputChange}
          placeholder="Your name"
          disabled={isLoading}
          className="mb-4"
        />
        <Input
          name="userInput"
          onChange={handleInputChange}
          placeholder="Anything you are working on.."
          disabled={isLoading}
          className="mb-4"
        />
        <Button
          onClick={generateHoroscope}
          className="w-full py-2 px-4 rounded"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            "Generate Horoscope"
          )}
        </Button>
      </div>
      {horoscope.length > 0 && (
        <Card className="mt-8 w-full max-w-2xl bg-white text-black p-6 rounded-lg shadow-lg border border-gray-300">
          <CardHeader>
            <CardTitle className="text-2xl  text-left mb-4">
              <div className="flex">
                <Hand className="mr-2 h-8 w-8" />
                Hey! {userData.userName} - {zodiacSign}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {horoscope.map((line, index) => (
              <p key={index} className="text-lg">
                <Star className="h-6 w-6 p-1 inline-block text-black-500" />
                {line}
              </p>
            ))}
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              onClick={() =>
                shareOnSocialMedia(userData.userName, zodiacSign, horoscope)
              }
              className="text-white font-bold py-2 px-4 rounded"
            >
              Share on <BsTwitterX className="mr-2 ml-1 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}
    </main>
  );
}

function shareOnSocialMedia(
  userName: string,
  zodiacSign: string,
  horoscope: string[],
) {
  const text = `${userName}'s DevHoroscope:\n\n${horoscope.join("\n\n")}`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}
