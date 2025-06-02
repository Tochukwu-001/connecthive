
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { auth, signIn } from "@/auth"

const page = async () => {

  const session = await auth()
  console.log(session?.user?.name);
  
  return (
    <main className="min-h-dvh flex items-center justify-center">
      <div className="">
        <h1 className="md:text-4xl text-2xl max-md:text-center text-blue-600 font-bold">Sign In to ConnectHive</h1>

      <div className="flex flex-col gap-10 mt-6">
      
        <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button className="border w-full flex items-center justify-center gap-3 text-lg rounded-full py-3">
          <FcGoogle />
          Sign In with Google
        </button>
    </form>

        <button className="border  flex items-center justify-center gap-3 text-lg rounded-full py-3">
            <FaFacebookSquare className="text-blue-600" />
            Sign In with Facebook
        </button>

        <button className="border  flex items-center justify-center gap-3 text-lg rounded-full py-3">
           <FaXTwitter />
            Sign In with Twitter
        </button>
      </div>
      
       <p className="text-sm text-gray-500 mt-3 max-md:text center">By Signing in, you agree with our <span className="hover:text-blue-600 hover:underline"> Terms of Use</span> <span className="hover:text-blue-600 hover:underline"> Privacy Policy</span></p>
      </div>

     
    </main>
  );
};

export default page;
