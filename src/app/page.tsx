import Image from "next/image"
import SocialIcons from "./socials/social-icons";
import logo from "../../public/images/logo.png"

export default function Home() {
  return (
    <div
      className="h-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/homepage.jpg')",
    }}>
      <div 
        className="hidden md:block sm:py-5 mx-auto my-0"
        style={{
          width: "80vw"
        }}
      >
        <Image 
          src={logo}
          width={80}
          height={0}
          className="mt-10"
          style={{height: "auto"}}
          alt="Logo for Casey Ortiz"
        />
      </div>
      <hr className="hidden md:block md:m-auto" style={{width: "85vw", borderColor: "#71bae7"}}></hr>
      <div className="pt-28 md:pt-5 grid justify-center align-middle">
        <h1
          className="text-6xl sm:text-7xl md:text-8xl"
          style={{color: "#71bae7"}}>
            CASEY ORTIZ
        </h1>
      </div>
      <div className="flex justify-center items-center h-1/4 xl:h-1/4">
        <h1 className="text-md xl:text-xl 2xl:text-3xl">singer-songwriter | performer | recording & production | marketer</h1>
      </div>
      <div className="flex justify-center items-end h-1/3 2xl:h-1/2">
        <SocialIcons/>
      </div>
    </div>
  );
}
