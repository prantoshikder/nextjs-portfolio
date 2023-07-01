/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Button, Typography } from "antd";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {
  const { Title } = Typography;

  const [showMore, setShowMore] = useState(false);

  return (
    <div css={heroContentStyles} className="hero-content-wrapper">
      <Title level={4}>Hello!</Title>
      <Title level={2}>I&apos;m Pranto Shikder.</Title>
      <TypeAnimation
        sequence={[
          "I build things for the web.",
          1000,
          "We produce food for Hamsters",
          1000,
          "We produce food for Guinea Pigs",
          1000,
          "We produce food for Chinchillas",
          1000,
        ]}
        wrapper="span"
        speed={50}
        className="type-animation"
        repeat={Infinity}
      />

      <p className="text">
        I am a web developer with 4+ years of experience in React. I have a
        strong foundation in front-end & back-end development and am skilled in
        creating user-friendly and responsive web applications using React and
        its ecosystem.
        {showMore
          ? "user-friendly and responsive web applications using React and its ecosystem."
          : null}
        <span className="learn-more" onClick={() => setShowMore(!showMore)}>
          Learn more
        </span>
      </p>

      <Button
        className="readMore-btn flex content-center items-center"
        type="primary"
      >
        My Project
      </Button>
    </div>
  );
};

const heroContentStyles = css`
  &.hero-content-wrapper {
    padding: 100px 0;

    h4 {
      color: #64ffda;
      font-size: 30px;
      font-weight: 600;
    }

    h2 {
      color: #ccd6f6;
      font-size: 55px;
      font-weight: 700;
      margin-top: 20px;
    }

    .type-animation {
      color: #8892b0;
      font-size: 70px;
      font-weight: 700;
      margin-top: 5px;
    }

    .text {
      color: #ccd6ea;
      max-width: 650px;
      font-size: 16px;
      margin-top: 25px;
      margin-bottom: 40px;

      .learn-more {
        color: #64ffda;
        font-weight: 700;
        cursor: pointer;
        margin-left: 10px;
      }
    }

    .readMore-btn {
      border: 1px solid #64ffda;
      color: #64ffda;
      font-size: 15px;
      font-weight: 600;
      background-color: transparent;
      transition: all 0.3s linear;

      &: hover {
        background-color: #64ffda;
        color: #0a192f;
      }
    }
  }
`;

export default HeroContent;
