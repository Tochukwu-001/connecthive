import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { signIn } from "@/auth"; // Assuming signIn is a function to handle sign-in logic

  return (
    <main className="min-h-dvh flex items-center justify-center">
      <div className="space-y-10 max-md:p-3">
        <h1 className="text-4xl text-blue-600 font-bold max-md:text-center">
          Sign in to ConnectHive
        </h1>

        <div className=" flex flex-col gap-10">
            <form
                action={async () => {
                    "use server"
                    await signIn("google")
                }}
            >
            <button className="border w-full flex items-center justify-center gap-3 text-lg rounded-full py-3">
                <FcGoogle className="text-2xl" />
                Sign in with Google
            </button>
            </form>
            <form
                action={async () => {
                    "use server"
                    await signIn("github")
                }}
            >
            <button className="border w-full flex items-center justify-center gap-3 text-lg rounded-full py-3">
                <FaGithub className="text-2xl" />
                Sign in with Github
            </button>
            </form>
          <button className="border flex items-center justify-center gap-3 text-lg rounded-full py-3">
            <FaXTwitter className="text-2xl" />
            Sign in with Twitter
          </button>
        </div>
        <p className="text-sm text-gray-500 max-md:text-center">By signing in, you agree with our <span className="hover:text-blue-600 hover:underline">Terms of Use</span>, and <span className="hover:text-blue-600 hover:underline">Privacy Policy</span></p>
      </div>
    </main>
  );

export default page;