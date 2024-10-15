import SocialIcons from "../socials/social-icons";

export default function Contact() {
  return(
    <div className="flex flex-col items-center h-screen pt-5">
      <div 
          className="grid justify-center pt-5 pb-7 w-[85vw] md:block md:justify-normal"
        >
          <h1 className="text-5xl lg:text-6xl" style={{color: "#FFFFFF"}}>Contact</h1>
      </div>
      <hr className="block pb-5 w-[85vw]"></hr>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSfM48CNN4k5GfEyMmq3O18Lbry50OEKX6-ihT9S_yjefL_XTw/viewform?embedded=true"
        className="w-[70vw] lg:w-[60vw] xl:w-[50vw]"
        style={{ height: "60vh" }}
      >
        Loading…
      </iframe>
      <SocialIcons />
    </div>
  );
}
