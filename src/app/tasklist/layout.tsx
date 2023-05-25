'use client'

import NicHeader from "@/components/NicHeader";
import React, { useEffect } from "react";
import { createContext, useRef } from "react";

import "tailwindcss/tailwind.css";

export const BodyContext = createContext(React.createRef());

export default function TaskListLayout({ children }: { children: React.ReactNode}) {
  
  const bodyRef = useRef();

  return (
    <div className="mx-auto my-0 flex flex-col items-center border shadow-md h-full w-[65%] overflow-auto" ref={bodyRef}>
      <NicHeader />
      <BodyContext.Provider value={{ bodyRef }}>
        {children}
      </BodyContext.Provider>
    </div>
  )
}