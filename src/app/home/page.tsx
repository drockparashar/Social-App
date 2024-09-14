"use client"
import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Use next/navigation in Next.js 13+

const Home = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      {session ? (
        <>
          <p>Wecome Back {
            session.user?.email
            }</p>
        <img src={session.user?.image as string} className=" rounded-full h-20 w-20"/>
        <button className=" w-40 h-20 bg-blue-600" onClick={()=>signOut()}>Sign Out</button>
        </>
      ) : null}
    </>
  );
};

export default Home;
