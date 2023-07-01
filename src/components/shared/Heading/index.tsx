/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "antd";

const Heading = ({ ...props }) => {
  const { title, level } = props;
  const { Title } = Typography;

  return (
    <div css={headingStyles} className="heading-content text-center">
      <Title className="title" level={level}>
        {title}
      </Title>
    </div>
  );
};

const headingStyles = css`
  &.heading-content {
    margin-bottom: 20px;

    .title {
      color: #64ffda;
      font-size: 30px;
      font-weight: 600;
      letter-spacing: 1px;
      padding-bottom: 45px;
      text-transform: uppercase;
      position: relative;

      &::before {
        position: absolute;
        top: 20px;
        display: block;
        width: 50px;
        height: 2px;
        content: "";
        background-color: #8892b0;
        left: 39%;
      }

      &::after {
        position: absolute;
        top: 20px;
        display: block;
        width: 50px;
        height: 2px;
        content: "";
        background-color: #8892b0;
        right: 39%;
      }
    }
  }
`;

export default Heading;
