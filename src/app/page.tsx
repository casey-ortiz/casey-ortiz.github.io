import Image from "next/image"
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
      <hr className="hidden md:block" style={{width: "85vw", borderColor: "#71bae7", margin: "auto"}}></hr>
      <div className="pt-28 md:pt-5 grid justify-center align-middle">
        <h1
          className="text-6xl sm:text-7xl md:text-8xl"
          style={{color: "#71bae7"}}>
            CASEY ORTIZ
        </h1>
      </div>
    </div>
  );
}
