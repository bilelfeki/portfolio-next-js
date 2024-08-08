"use client";

import { useRouter } from "next/navigation";
import "./button.css";

export default function Button(prop: { name: string; link: string,className:string }) {
  const router = useRouter();

  return (
    <>
      <button className={`${prop.className} btn`} onClick={() => router.push(`/${prop.link}`)}>
        {prop.name}
      </button>
    </>
  );
}
