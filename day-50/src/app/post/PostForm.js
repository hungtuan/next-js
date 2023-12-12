"use client";
import React, { useState } from "react";
import { postApi } from "./PostList";
import { mutate } from "swr";

function PostForm() {
  // hook
  const [title, setTitle] = useState("");

  // handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(postApi, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    if (res.ok) {
      mutate(postApi);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tiêu đề..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Thêm</button>
      </form>
    </div>
  );
}

export default PostForm;
