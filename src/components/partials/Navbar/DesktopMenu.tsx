/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Button, Space, Typography } from "antd";
import Link from "next/link";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const DesktopMenu = () => {
  const { Title } = Typography;

  const menuList = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About Us",
      link: "/",
    },
    {
      id: 3,
      name: "Experience",
      link: "/",
    },
    {
      id: 4,
      name: "Project",
      link: "/",
    },
    {
      id: 5,
      name: "Blogs",
      link: "/",
    },
    {
      id: 6,
      name: "Contact",
      link: "/",
    },
  ];

  return (
    <div css={desktopMenuStyles} className="flex content-between items-center">
      <div className="logo">
        <Title className="name flex items-center">
          <MdArrowBackIos />
          Pranto
          <MdArrowForwardIos />
        </Title>
      </div>

      <Space size={20} className="menu-items">
        {menuList?.length > 0 &&
          menuList.map((item) => (
            <Link key={item?.id} href={item?.link} className="menu-item">
              {item?.name}
            </Link>
          ))}

        <Button
          className="resume-btn flex content-center items-center"
          type="primary"
        >
          Resume
        </Button>
      </Space>
    </div>
  );
};

const desktopMenuStyles = css`
  .logo {
    .name {
      color: #64ffda;
      font-size: 30px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  .menu-items {
    .menu-item {
      color: #8892b0;
      font-size: 15px;
      font-weight: 600;
      text-transform: capitalize;
      transition: all 0.3s linear;

      &:hover {
        color: #64ffda;
      }
    }

    .resume-btn {
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

export default DesktopMenu;
