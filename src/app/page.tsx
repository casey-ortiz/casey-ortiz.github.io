import Image from "next/image"
import logo from "../../public/images/logo.png"
export default function Home() {
  return (
    <div 
      className="grid grid-rows-10` h-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/homepage.jpg')",
    }}>
      <div 
        className="row-span-1 mx-auto my-0"
        style={{
          width: "75vw",
          height: "3vh",}}
      >
        <Image 
            src={logo}
            width={150}
            alt="Logo for Casey Ortiz"
        />
      </div>
      <hr style={{width: "75vw", borderColor: "#71bae7", margin: "auto"}}></hr>
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
