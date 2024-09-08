export default function Home() {
  return (
    <div 
      className="grid grid-rows-10 h-screen bg-contain bg-center brightness-75 opacity-90 px-60 bg-no-repeat"
      style={{
        backgroundImage: "url('/homepage.jpg')",
    }}>
      <h1 
        className="row-span-1 text-6xl px-12"
        style={{color: "#71bae7"}}>
          Co
      </h1>
      <hr 
        className="row-span-1"
        style={{
          borderColor: "#71bae7",
          borderWidth: "1px",
        }}>  
      </hr>
      <div className="grid justify-center">
        <h1 
          className="row-span-8 text-7xl"
          style={{color: "#71bae7"}}>
            CASEY ORTIZ
        </h1>
      </div>
    </div>
  );
}
