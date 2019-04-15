import * as React from "react";
import { Link } from "react-router-dom";
//@ts-ignore
import * as Img from "react-image";

// assets
const BackgroundImage = require("./assets/IMG_6711.jpg");

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <div id="Home">
      <Img src={[BackgroundImage]} alt="Test Image" />
      <Link to="/test">Test</Link> This is a test page
    </div>
  );
};

export default Home;
