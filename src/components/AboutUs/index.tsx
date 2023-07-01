/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Col, Row } from "antd";
import Heading from "../shared/Heading";

const AboutUs = () => {
  return (
    <div css={aboutUsStyles} className="about-content-wrapper">
      <Heading title="About Us" level={2} />
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          Col
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
          Col
        </Col>
      </Row>
    </div>
  );
};

const aboutUsStyles = css`
  &.about-content-wrapper {
  }
`;

export default AboutUs;
