import React from "react";
import CardsSlide from "../../components/CardsSlide";
import MainShowBox from "./../../components/MainShowBox/index";

export default function HomePage(props) {
  return (
    <div className="mb-5">
      <MainShowBox />
      <CardsSlide id={"10"} name={"Comedy"} key={1} />
      <CardsSlide id={"200"} name={"Drama"} key={2} />
      <CardsSlide id={"30"} name={"Romance"} key={3} />
      <CardsSlide id={"40"} name={"Crime and Action"} key={4} />
      <CardsSlide id={"50"} name={"Family"} key={5} />
    </div>
  );
}
