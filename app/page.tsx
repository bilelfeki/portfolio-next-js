import Image from "next/image";
import Navbar from "./navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import HomeDescription from "./HomeDescription";

export default function Home() {
  return (
    <main className="grid">
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-2">
        <HomeDescription></HomeDescription>
        <Image
          className={"w-300 h-150 "}
          src={"/bilel-without-background.png"}
          width="300"
          height="150"
          alt={"..."}
        ></Image>
      </div>
    </main>
  );
}
