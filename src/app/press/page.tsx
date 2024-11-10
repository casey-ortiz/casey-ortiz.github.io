import { EmblaCarousel } from "../image-carousel/carousel";
import { StaticImageData } from "next/image";
import press1 from "../../../public/images/press/press1.jpeg"
import press2 from "../../../public/images/press/press2.jpg"
import press3 from "../../../public/images/press/press3.jpg"
import press4 from "../../../public/images/press/press4.jpeg"

export default function Press() {
  const mySlides: { img: StaticImageData, link: string, target: string }[] = [
    { img: press1, link: "https://www.masslive.com/elpueblolatino/2014/12/concierto_festivo_de_mambo_on.html", target: "_blank" },
    { img: press2, link: "#", target: "" },
    { img: press3, link: "#", target: "" },
    { img: press4, link: "https://www.masslive.com/living/2014/12/mambo_on_main_street_celebrates_library_holidays.html", target: "_blank" },
  ]
  return(
    <div className="h-screen pt-5">
      <div 
          className="grid justify-center md:block md:justify-normal pt-10 pb-7"
          style={{width: "85vw", margin: "auto"}}
        >
          <h1 className="text-5xl lg:text-6xl" style={{color: "#FFFFFF"}}>Press</h1>
        </div>
      <hr className="block m-auto" style={{width: "85vw"}}></hr>
      <EmblaCarousel slides={mySlides}/>
    </div>
  );
}