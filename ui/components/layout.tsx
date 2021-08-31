import React from "react";
import Navbar from "./navbar";

//@ts-ignore
export default function Layout({ children }) {
    return (
      <>
        <Navbar />
        <main>{children}</main>
      </>
    )
  }