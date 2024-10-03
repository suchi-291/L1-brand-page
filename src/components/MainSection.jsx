import "../App.css";
import { Button } from "./nav.jsx";
function Hero() {
  return (
    <div className="hero-wrapper">
      <HeroText />
      <HeroImage />
    </div>
  );
}

function HeroText() {
  return (
    <>
      <div className="hero-text">
        <h1>Your Feet Deserve the best</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="buttons">
          <Button text="Shop Now" />
          <ButtonSecondary text="Category" />
        </div>
      </div>
    </>
  );
}

function ButtonSecondary({ text }) {
  return (
    <>
      <button className="secondary">{text}</button>
    </>
  );
}

function HeroImage() {
  return (
    <>
      <div className="hero-image">
        <img src="/shoe_image.png" alt="Nike shoes image" />
      </div>
    </>
  );
}

export default Hero;
