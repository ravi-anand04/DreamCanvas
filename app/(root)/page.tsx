import { SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <div>
      {/* <p>Home</p> */}
      <SignedOut>
        <UserButton />
      </SignedOut>
    </div>
  );
};

export default Home;
