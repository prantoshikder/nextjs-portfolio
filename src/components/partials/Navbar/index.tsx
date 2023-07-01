/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Container from "@/components/shared/Container";
import useMediaQuery from "@/components/shared/MediaQuery/useMediaQuery";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const mobileView = useMediaQuery("(max-width: 992px)");
  return (
    <div css={navbarStyles} className="header-menu">
      <Container>{mobileView ? <MobileMenu /> : <DesktopMenu />}</Container>
    </div>
  );
};

const navbarStyles = css`
  &.header-menu {
    color: #fff;
    padding: 15px 0;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 30px -10px rgba(2, 12, 27, 0.7);
  }
`;

export default Navbar;
