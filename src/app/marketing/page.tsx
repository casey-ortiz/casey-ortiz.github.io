'use client'
import { useEffect } from "react"
import { InstagramEmbed, FacebookEmbed, YouTubeEmbed } from 'react-social-media-embed'
import Image from "next/image"
import newsletter from "../../../public/images/cmss_newsletter.png"

export default function Marketing() {
  
  // Fix for Instagram embeds https://github.com/justinmahar/react-social-media-embed/issues/41#issuecomment-1622120110
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//www.instagram.com/static/bundles/metro/EmbedSDK.js/d9addf525b6a.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return(
    <>
      <div 
        className="grid justify-center md:block md:justify-normal pt-10 pb-7"
        style={{width: "85vw", margin: "auto"}}
      >
        <h1 className="text-5xl lg:text-6xl" style={{color: "#FFFFFF"}}>Marketing + Events</h1>
      </div>
      <hr className="block m-auto" style={{width: "85vw"}}></hr>
      <div className="flex justify-center pt-5 pb-5">
        <YouTubeEmbed 
          url="https://www.youtube.com/embed/-pY7nByFAUE?si=2cyse7VaYB5dt86H" 
        />
      </div>
      <div className="flex flex-wrap justify-evenly items-center">
        <InstagramEmbed
          url="https://www.instagram.com/p/CuPvLGPL4Fr/"
          height={380}
        />
        <FacebookEmbed
          url="https://www.facebook.com/CMSSpringfield/posts/774148518044442"
          style={{backgroundColor: "white"}}
          height={290}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/COTBtusgX2g/"
          height={380}
        />
        <a target="_blank" href="https://myemail.constantcontact.com/Meet-our-2023-Summer-Interns--Jazz---Roots-Performances---More-.html?soid=1107842219990&aid=Z5352j8U0JM">
          <Image 
            className="pt-6 pb-10"
            src={newsletter}
            width={630}
            alt="CMSS Newsletter"
          />
        </a>
      </div>
    </>
  );
}