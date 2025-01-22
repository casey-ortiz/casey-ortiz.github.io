'use client'
import { useEffect } from "react"
import { InstagramEmbed, YouTubeEmbed } from 'react-social-media-embed'
import Image from "next/image"
import newsletter from "../../../public/images/cmss_newsletter.png"

const DEFAULT_EMBED_WIDTH = 380; // max pixel width for embeds

// TODO: replace InstagramEmbeds with vanilla iframes instead
// and remove the react-social-media-embed library...
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
        className="grid justify-center md:block md:justify-normal pt-10 pb-7 w-[85vw] m-auto"
      >
        <h1 className="text-5xl lg:text-6xl text-white">Marketing Portfolio</h1>
      </div>
      <hr className="block m-auto w-[85vw]"></hr>
      <div className="text-3xl flex justify-center pt-7">
        <h2>Social Media Campaigns</h2>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-7 pb-7 m-auto w-[1150px] xl:w-[1175] 2xl:w-[1150px]">
          <div className="flex flex-col items-end">
            <InstagramEmbed
              className="pb-1"
              url="https://www.instagram.com/p/CvPl0gHLfbB/"
              width={DEFAULT_EMBED_WIDTH}
            />
            <iframe src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCMSSpringfield%2Fposts%2F764689438990350&width=${DEFAULT_EMBED_WIDTH}&show_text=true&height=640&appId`} width={DEFAULT_EMBED_WIDTH} height="640" loading="lazy"></iframe>
            <InstagramEmbed
              url="https://www.instagram.com/p/Cu9kQl4PG-G/"
              width={DEFAULT_EMBED_WIDTH}
            />
          </div>
          <div className="flex flex-col items-center">
            <iframe className="mb-3" src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCMSSpringfield%2Fposts%2F777823614343599&width=${DEFAULT_EMBED_WIDTH}&show_text=true&height=828&appId`} width={DEFAULT_EMBED_WIDTH} height="828" loading="lazy"></iframe>
            <iframe src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCMSSpringfield%2Fposts%2F773547308104563%3Fref%3Dembed_post&width=${DEFAULT_EMBED_WIDTH}&show_text=true&height=527&appId`} width={DEFAULT_EMBED_WIDTH} height="550" loading="lazy"></iframe>
          </div>
          <div className="flex flex-col items-start">
            <InstagramEmbed
              url="https://www.instagram.com/p/CuPvLGPL4Fr/"
              width={DEFAULT_EMBED_WIDTH}
            />
            <InstagramEmbed
              className="pt-1 pb-1"
              url="https://www.instagram.com/p/CurzWZMLEsC/"
              width={DEFAULT_EMBED_WIDTH}
            />
            <iframe src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCMSSpringfield%2Fposts%2F772289288230365%3Fref%3Dembed_post&width=${DEFAULT_EMBED_WIDTH}&show_text=true&height=503&appId`} width={DEFAULT_EMBED_WIDTH} height="503" loading="lazy"></iframe>
          </div>
      </div>
      <div className="text-3xl flex justify-center pt-7 pb-5">
        <h2>Content Creation</h2>
      </div>
      <div className="flex flex-col items-center pt-5 pb-5">
        <YouTubeEmbed 
          url="https://www.youtube.com/embed/-pY7nByFAUE?si=2cyse7VaYB5dt86H" 
        />
        <div className="w-[36rem] text-center pt-7 pb-7">
          <p>Watch our inspiring SPS Alumni Video Project, showcasing the journeys and achievements of Springfield Public Schools graduates. Hear their stories of success and impact in the community!</p>
        </div>
      </div>
      <div className="flex flex-col items-center pt-5 pb-5">
        <a target="_blank" href="https://myemail.constantcontact.com/Meet-our-2023-Summer-Interns--Jazz---Roots-Performances---More-.html?soid=1107842219990&aid=Z5352j8U0JM">
          <Image
            src={newsletter}
            width={800}
            alt="CMSS Newsletter"
          />
        </a>
        <div className="w-[38rem] text-center pt-7 pb-7">
          <p>Click the banner to explore the latest CMSS newsletter I designed using Constant Contact—featuring updates, events, and community highlights!</p>
        </div>
      </div>
    </>
  );
}