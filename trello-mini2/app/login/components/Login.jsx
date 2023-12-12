"use client";

import React, { useState } from "react";
import api from "../../../services/api";
import { useRouter } from "next/navigation";

const Login = ({ onApi }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const newApiKey = await api.getApiKey(email);
      console.log(newApiKey);

      localStorage.setItem("apiKey", newApiKey.data.apiKey);

      setLoading(false);
      setEmail("");
      onApi(newApiKey.data.apiKey);
    } catch (error) {
      console.error("Error fetching API key:", error);

      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Enter Your Email</h1>
        <form onSubmit={handleEmailSubmit}>
          <input
            type="text"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 mb-4 border rounded"
          />

          <button
            type="submit"
            className={`w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Submit"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
