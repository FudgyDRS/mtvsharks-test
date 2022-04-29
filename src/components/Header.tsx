import { useState } from "react";
import "../styles/header.scss";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { ChakraProvider, useDisclosure, Link, Image, theme } from "@chakra-ui/react";
import ConnectButton from "./AccountModal/ConnectButton";
import AccountModal from "./AccountModal/AccountModal";
import "@fontsource/inter";



const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  
  return (
    <div className="header-header">
      <div className="logo-nav">
        <div className="logo-container">
        <Link href={`/#`} onClick={closeMobileMenu}><Image src={require("../assets/images/logo.png").default} className="logo" alt="MTV Sharks" /></Link>
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
        <li className="option" onClick={closeMobileMenu}><a href="#/">Home</a></li>
        <li className="option" onClick={closeMobileMenu}><a href="https://twitter.com/MTVSharks">Twitter</a></li>
        <li className="option" onClick={closeMobileMenu}><a href="https://discord.gg/PZGupwBHFe">Discord</a></li>
        <li className="option" onClick={closeMobileMenu}><a href="#/faq">FAQ</a></li>
        <li className="option" onClick={closeMobileMenu}><a href="#/dao">DAO</a></li>
        <li className="option" onClick={closeMobileMenu}><a href="#/the-shark-club">The Shark Club</a></li>
        <li className="option" onClick={closeMobileMenu}><a href="#/marketplace">Marketplace</a></li>
        {/* <li className="option mobile-option" onClick={closeMobileMenu}><a href="#">Account</a></li> */}

            
          <li className="option mobile-option" onClick={closeMobileMenu}>
              <ChakraProvider theme={theme}>
                <ConnectButton handleOpenModal={onOpen} />
                <AccountModal isOpen={isOpen} onClose={onClose} />
              </ChakraProvider>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li onClick={closeMobileMenu}>
        <ChakraProvider theme={theme}>
          <ConnectButton handleOpenModal={onOpen} />
          <AccountModal isOpen={isOpen} onClose={onClose} />
        </ChakraProvider>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click 
            ? (<AiOutlineClose className="menu-icon" />) 
            : (<AiOutlineMenu className="menu-icon" />)
        }
      </div>
    </div>
  );
};

export default Header;

