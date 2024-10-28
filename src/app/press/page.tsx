import { EmblaCarousel } from "./carousel";

export default function Press() {
  return(
    <div className="h-screen pt-5">
      <div 
          className="grid justify-center md:block md:justify-normal pt-10 pb-7"
          style={{width: "85vw", margin: "auto"}}
        >
          <h1 className="text-5xl lg:text-6xl" style={{color: "#FFFFFF"}}>Press</h1>
        </div>
      <hr className="block m-auto" style={{width: "85vw"}}></hr>
      <EmblaCarousel/>
    </div>
  );
}