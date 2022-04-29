import styled from "styled-components";
import { FC } from "react";
import "../styles/footer.scss";

const FooterDefault = styled.div`
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(15px);
  color: black;
  position: fixed;
  bottom: 0px;
`;

// add footer socials

const Footer: FC = () => {
  return (
    <>
      <div className="footer-footer">MTV Sharks</div>
    </>
  );
};

export default Footer;
