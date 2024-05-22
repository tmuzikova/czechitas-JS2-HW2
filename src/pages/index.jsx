import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Header } from "../header/Header";
import { Intro } from "../intro/Intro";
import { Pose } from "../pose/Pose";

const headerTitle = "Jogíni";
const intro = {
  heading: "Vítejte mezi jogíny",
  text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
         něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
         Postupně se seznámíte se základními principy jógy, jak přístupovat k
         sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
         svoje tělo, pocity a emoce.`,
};
const poseImgSrc = "./yoga-pose.jpg";

document.querySelector("#root").innerHTML = render(
  <div className="container">
    <Header title={headerTitle} />

    <div className="introWithImg">
      <Intro heading={intro.heading} text={intro.text} />

      <Pose src={poseImgSrc} />
    </div>
  </div>
);
