import React from "react";
import ExpendingCard from "./page1";
import ProgressSteps from "./page2";
import SearchIcon from "./page3";
import Imageload from "./page4";
import ContentSlide from "./page5";
import SplitHover from "./page6";
import WaveLogin from "./page7";
import SoundBoard from "./page8";
import FaqCollapse from "./page9";
import HamburgerCollapse from "./page10";
import Clock from "./page11";
import KineticCss from "./page12";
import SkeletonLoader from "./page13";
import AutoText from "./page14";
import AnimatedCountdown from "./page15";
import TestiCard from "./page16";
import IncrementBox from "./page17";
import EnableButton from "./page18";
import RangeDown from "./page19";
import WaterContainer from "./page20";
import CodeConfirmation from "./page20";

const Home = () => {
  return (
    <div className="hero">
      <div className="title">
        <h1>Home</h1>
      </div>
      <div className="d1">
        <h1>1. EXPENDING CARDS</h1>
        <ExpendingCard />
      </div>
      <div className="d2">
        <h1>2. PROGRESS STEPS</h1>
        <ProgressSteps />
      </div>
      <div className="d3">
        <h1>3. Search Icon</h1>
        <SearchIcon />
      </div>
      <div className="d4">
        <h1>4. Image Loading</h1>
        <Imageload />
      </div>
      <div className="d5">
        <h1>5. Content Slide</h1>
        <ContentSlide />
      </div>
      <div className="d6">
        <h1>6. Split Hover</h1>
        <SplitHover />
      </div>
      <div className="d7">
        <h1>7. Wave Form</h1>
        <WaveLogin />
      </div>
      <div className="d8">
        <h1>8. Sound Effect</h1>
        <SoundBoard />
      </div>
      <div className="d9">
        <h1>9. Faq Collapse</h1>
        <FaqCollapse />
      </div>
      <div className="d10">
        <h1>10. Hamburger Collapse</h1>
        <HamburgerCollapse />
      </div>
      <div className="d11">
        <h1>11. Clock</h1>
        <Clock />
      </div>
      <div className="d12">
        <h1>12. Kinetic Loader</h1>
        <KineticCss />
      </div>
      <div className="d13">
        <h1>13. Skeleton Loader</h1>
        <SkeletonLoader />
      </div>
      <div className="d14">
        <h1>14. Toast Notification</h1>
        <AutoText />
      </div>
      <div className="d15">
        <h1>15. Animated Countdown</h1>
        <AnimatedCountdown />
      </div>
      <div className="d16">
        <h1>16. Testimonial Content</h1>
        <TestiCard />
      </div>
      <div className="d17">
        <h1>17. Increment Counter</h1>
        <IncrementBox />
      </div>
      <div className="d18">
        <h1>18. Enable Button</h1>
        <EnableButton />
      </div>
      <div className="d19">
        <h1>19. Range Slider</h1>
        <RangeDown />
      </div>
      <div className="d20">
        <h1>20. Code Confirmation</h1>
        <CodeConfirmation />
      </div>
    </div>
  );
};

export default Home;
