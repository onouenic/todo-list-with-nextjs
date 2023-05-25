import NicHeader from "@/components/NicHeader"

import "tailwindcss/tailwind.css";

export default function RootLayout({
  children
} : {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="mx-auto my-0 flex flex-col items-center border shadow-md h-full w-[65%]">
        <NicHeader />
        {children}
      </body>
    </html>
  )
}