import Image from "next/image"
import logo from "../../public/logo.png"
export default function Home() {
  return (
    <div 
      className="grid grid-rows-10 h-full bg-contain bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/homepage.jpg')",
    }}>
      <div className="row-span-2 w-9/12 mx-auto my-0">
        <Image 
            src={logo}
            alt="Logo for Casey Ortiz"
        />
      </div>
      <div className="row-span-8 grid justify-center">
        <h1 
          className="sm:text-5xl md:text-6xl lg:text-7xl"
          style={{color: "#71bae7"}}>
            CASEY ORTIZ
        </h1>
      </div>
    </div>
  );
}
