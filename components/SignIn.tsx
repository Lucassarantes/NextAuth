"use client";
import { signIn, signOut, useSession } from "next-auth/react";
// import { getProviders, signIn } from "next-auth/react"
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const SignIn = () => {
  const { data: session } = useSession();
  return (
    <>
      {!session?.authenticated ? (
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      ): (
        <div>
            <p>Welcome, {session?.session.user.name}!</p>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </>
  )
}

export default SignIn;