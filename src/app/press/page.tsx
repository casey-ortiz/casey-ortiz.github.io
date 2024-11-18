import Image, { StaticImageData } from "next/image";
import press1 from "../../../public/images/press/press1.jpeg"
import press2 from "../../../public/images/press/press2.jpeg"
import press3 from "../../../public/images/press/press3.jpg"
import press4 from "../../../public/images/press/press4.jpg"
import Link from "next/link";

export default function Press() {
  const mySlides: { img: StaticImageData, link: string, target: string, title: string, date: string, org: string, author: string, caption: string }[] = [
    { img: press1, link: "https://www.masslive.com/living/2014/12/mambo_on_main_street_celebrates_library_holidays.html", target: "_blank", title: "\"Mambo on Main Street\" celebrates library, holidays", date: "DEC 10, 2014", org: "Mass Live", author: "Cori Urban", caption: "\"Twelve-year-old singer Casey Ortiz will lend her voice to the occasion...\"" },
    { img: press2, link: "https://www.masslive.com/elpueblolatino/2014/12/concierto_festivo_de_mambo_on.html", target: "_blank", title: "Concierto Festivo de \"Mambo on Main Street: A Latin Big Band Holyday\" todo un exito", date: "DEC 16, 2014", org: "Mass Live", author: "Damaris Pérez-Pizarro", caption: "\"Otra cantante que también compartió tarima con la banda Creación Big Band fue la talentosísima jovencita Casey Ortiz, quien apenas con sus 12 años de edad tiene una poderosa voz que cautiva con su carismática personalidad y entusiasmo cantando en español los géneros de salsa y bolero. Ella interpreto varias canciones de cantantes como La Lupe, Cesar Portillo de la Luz, Rafael Cortijo y Rafael Hernández, entre otros.\"" },
    { img: press3, link: "https://issuu.com/elsollatino/docs/el_sol_latino_august_2014_10.9", target: "_blank", title: "28vo Festival de la Familia Hispana Holyoke", date: "AUG 2014", org: "El Sol Latino", author: "", caption: "" },
    { img: press4, link: "#", target: "",title: "Florence Summer Concert Series: Libro Azul", date: "AUG 3, 2014", org: "Florence Civic & Business Association", author: "", caption: ""},
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
      {mySlides.map((item, index) => (
        <>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 w-[70vw] py-10">
              <div className="grid-rows-2">
                <h3 className="text-lg">{item.date}</h3>
                <h3 className="text-lg">{item.org}</h3>
                { item.caption != "" ? 
                  <Image 
                    className="pt-10 pe-5"
                    src={item.img}
                    alt={item.title}
                    width={0}
                    height={0}
                  /> :
                  <></>
                }
              </div>
              <div className="col-span-2">
                <h2 className="pb-3 text-2xl">{item.title}</h2>
                { item.author != "" ? <h3 className="text-lg pb-5">By {item.author}</h3> : <></> }
                { item.caption != "" ? 
                  <p className="pb-5 text-base">{item.caption}</p> : 
                  <Link href={item.link} target={item.target}>
                    <Image 
                      src={item.img}
                      alt={item.title}
                      width={550}
                      height={0}
                    />
                  </Link>
                }
                { item.caption != "" ?
                  <Link href={item.link} target={item.target} className="text-[#71bae7] text-sm underline decoration-[#71bae7]">read more...</Link> :
                  <></>
                }
              </div>
            </div>
          </div>
          { index != 3 ?
            <hr className="block m-auto" style={{width: "70vw"}}></hr> : <></>
          }
        </>
      ))}
    </div>
  );
}