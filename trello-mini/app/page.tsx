"use client";
import React, { useState, useEffect } from "react";
import Board from "@/components/Board";
import Header from "@/components/Header";
import ApiClient from "@/services/api";

export default function Home() {
  const apiClient = new ApiClient();

  const [apiKey, setApiKey] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkApiKey = async () => {
      try {
        const storedApiKey = localStorage.getItem("apiKey");
        if (storedApiKey) {
          setApiKey(storedApiKey);
          setError(null);
        }
      } catch (error) {
        console.error("Error checking API key:", error);
        setError("An error occurred while checking the API key.");
      } finally {
        setIsLoading(false);
      }
    };

    checkApiKey();
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const newApiKey = await apiClient.getApiKey(email);
      console.log(newApiKey);

      setApiKey(newApiKey);
      localStorage.setItem("apiKey", newApiKey);
      setIsLoading(false);
      setEmail("");
    } catch (error) {
      console.error("Error fetching API key:", error);
      setError("Email is incorrect");
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p>Loading...</p>
      </div>
    );
  }

  return apiKey ? (
    <main>
      <Header />
      <Board />
    </main>
  ) : (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">
          {error ? error : "Enter Your Email"}
        </h1>
        <form onSubmit={handleEmailSubmit}>
          <input
            type="text"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded"
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Submit"}
          </button>
        </form>
      </div>
    </main>
  );
}
