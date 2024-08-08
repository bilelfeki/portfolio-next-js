import Image from "next/image";
import Navbar from "./navbar/navbar";

export default function Home() {
  return (
    <main className="flex justify-end ">
      <Image
        className={"w-300 h-150 mr-[30rem]"}
        src={"/bilel-without-background.png"}
        width="300"
        height="150"
        alt={"..."}
      ></Image>
    </main>
  );
}
