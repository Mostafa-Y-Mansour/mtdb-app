import React from "react";
import CardsSlide from "../../components/CardsSlide";
import MainShowBox from "./../../components/MainShowBox/index";

export default function HomePage(props) {
  return (
    <div>
      <MainShowBox />
      <CardsSlide id={"1"} name={"Comedy"} key={1} />
      <CardsSlide id={"2"} name={"Drama"} key={2} />
      <CardsSlide id={"3"} name={"Romance"} key={3} />
      <CardsSlide id={"4"} name={"Crime and Action"} key={4} />
      <CardsSlide id={"5"} name={"Family"} key={5} />
    </div>
  );
}
