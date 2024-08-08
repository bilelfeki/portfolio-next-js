import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function  HomeDescription(){
    return (
        <div className="mt-[200px] ml-[150px]">
        <span className="text-2xl">Hi, I am </span>
        <div className="text-6xl">Bilel Feki</div>
        <div className="text-2xl text-gray-400">Full-stack developer</div>
        <div className="flex justify-start mt-[100px] ">
          <FontAwesomeIcon className="w-10 h-10 mr-5" icon={faLinkedin} />
          <FontAwesomeIcon className="w-10 h-10 mr-5" icon={faGithub} />
          <FontAwesomeIcon  className="w-10 h-10" icon={faEnvelope} />
        </div>
      </div>
    )
}