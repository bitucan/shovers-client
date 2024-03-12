import bg from "../assets/titulo.png";
import videoBg from "../assets/video-bg.mp4";
import { Button } from "./atoms/button";
import { FORM_SHOVERS_ID } from "./consts";

const Hero = () => {
  const scrollToElement = () => {
    const elementoDestino = document.getElementById(FORM_SHOVERS_ID);
    elementoDestino?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="relative w-full h-screen">
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        />
      </div>

      <div className="w-full h-full absolute flex items-center justify-center top-0">
        <div className="max-w-[50%] h-full flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <img src={bg} alt="" className="w-full" />
            <div className="mt-8">
              <Button className="text-2xl w-56 h-12" onClick={scrollToElement}>
                inscríbite aquí
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
