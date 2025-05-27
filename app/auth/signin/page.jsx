import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const page = () => {
  return (
    <main className="min-h-dvh flex items-center justify-center">
      <div className="space-y-10">
        <h1 className="text-4xl text-blue-600 font-bold ">
          Sign in to ConnectHive
        </h1>

        <div className=" flex flex-col gap-10">
          <button className="border flex items-center justify-center gap-3 text-lg rounded-full py-3">
            <FcGoogle className="text-2xl" />
            Sign in with Google
          </button>
          <button className="border flex items-center justify-center gap-3 text-lg rounded-full py-3">
            <FaGithub className="text-2xl" />
            Sign in with Github
          </button>
          <button className="border flex items-center justify-center gap-3 text-lg rounded-full py-3">
            <FaXTwitter className="text-2xl" />
            Sign in with Twitter
          </button>
        </div>
      </div>
    </main>
  );
};

export default page;
