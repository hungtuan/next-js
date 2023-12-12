// Home.jsx
"use client";
import Link from "next/link";
import Login from "@/app/login/components/Login";
import Board from "./board/components/Board";
import Loading from "@/helper/loading";

import { useEffect, useLayoutEffect, useState } from "react";

export default function Home() {
  const [authKey, setAuthKey] = useState();
  const [loading, setLoading] = useState(true);

  const handleApiKey = (apikey) => {
    setAuthKey(apikey);
  };

  useLayoutEffect(() => {
    getApiKey();
  }, []);

  const getApiKey = async () => {
    const res = localStorage.getItem("apiKey");

    if (res) {
      setAuthKey(res);
    }

    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : authKey ? (
        <Board />
      ) : (
        <Login onApi={handleApiKey} />
      )}
    </div>
  );
}
