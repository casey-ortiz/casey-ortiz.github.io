import Link from "next/link";
import { RxDoubleArrowDown } from "react-icons/rx";

export default function Music() {
  return(    
    <>
      <div id="songs" className="h-screen">
        <div 
          className="grid justify-center md:block md:justify-normal pt-10 pb-7"
          style={{width: "85vw", margin: "auto"}}
        >
          <h1 className="text-5xl lg:text-6xl" style={{color: "#FFFFFF"}}>Original Songs</h1>
        </div>
        <hr className="block m-auto" style={{width: "85vw"}}></hr>
        <div className="flex justify-center pt-10">
          <iframe 
            width="75%" 
            height="350" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/lotus-flower-206577421&show_playcount=false"
          >
          </iframe>
        </div>
        <div className="flex justify-center items-center h-60">
          <Link href="#performances" className="flex flex-col items-center">
            <RxDoubleArrowDown size={28} className="mb-1"/>
            More below!
          </Link>
        </div>
      </div>
      <div id="performances" className="h-screen pt-5">
        <div 
          className="grid justify-center md:block md:justify-normal pt-10 pb-7"
          style={{width: "85vw", margin: "auto"}}
        >
          <h1 className="text-5xl lg:text-6xl" style={{color: "#FFFFFF"}}>Performances</h1>
        </div>
        <hr className="block m-auto" style={{width: "85vw"}}></hr>
        <div className="h-screen flex flex-wrap justify-evenly pt-10">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/i3WJ74lKTAY?si=p8v59vtMZ6L4zuU5" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/7mdX2T5yCOY?si=ogF_j8J5cVcjEHAo" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/OktMaFYhb-A?si=vJOe0aJx02nI-ZPA" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Dl8qY0txI5w?si=P18wzRTv_axY5P7z" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}