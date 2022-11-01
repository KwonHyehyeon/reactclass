import React from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Slider from "./components/section2/Slider";
import Image from "./components/section2/Image";
import ImageText from "./components/section2/ImageText";
import Card from "./components/section2/Card";
import Banner from "./components/section2/Banner";
import Text from "./components/section2/Text";

function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Main>
        <Slider fonts="nexon" />
        <Image attr={["section", "nexon", "container"]} />
        <ImageText attr={["nexon", "section", "gray", "container"]} />
        <Card attr={["section", "nexon", "gray", "container"]} />
        <Banner fonts="nexon" />
        <Text attr={["section", "nexon", "container"]} />
      </Main>
      <Footer attr={["nexon", "section", "gray", "container"]} />
    </>
  );
}

export default App;
