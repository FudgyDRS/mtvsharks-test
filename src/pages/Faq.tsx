import { FC } from "react";
import styled from "styled-components";

import BlockLaunchFaq from "../components/faq/BlockLaunchFaq";

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 30vh;
  margin-right: 30vh;
  @media (max-width: 1208px) {
    margin-left: 10vh;
    margin-right: 10vh;
  }
  @media (max-width: 708px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const Faq: FC = () => {
  
    return (
      <div className="background-faq">
      <Block>
        <BlockLaunchFaq/> 
      </Block>
      </div>
    );
  };
  
  export default Faq;
