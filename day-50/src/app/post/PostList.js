"use client";

import useSWR from "swr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
// import { useEffect, useState } from "react";

export const postApi = "https://jsonplaceholder.typicode.com/posts";

const fetcher = (url) => fetch(url).then((response) => response.json());

function PostList() {
  useEffect(() => {
    window.addEventListener("online", () => {
      toast.success("Đã kết nối internet", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    });

    window.addEventListener("offline", () => {
      toast.error("Mất kết nối internet", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    });
  }, []);

  const {
    data: postLists,
    error,
    isLoading,
  } = useSWR(postApi, fetcher, {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  });

  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : postLists && postLists.length > 0 ? (
        postLists.map(({ id, title }) => <h3 key={id}>{title}</h3>)
      ) : (
        <li>No post available</li>
      )}
      <ToastContainer />
    </div>
  );
}

export default PostList;
