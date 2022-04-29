import { FC, useEffect, useState } from "react";
import { Image, Text } from "@chakra-ui/react";
import { formatUnits } from "@ethersproject/units";

import { useEthers } from "../../modules/usedapp2/hooks";
import { BalanceOf} from '../../abi/mtvSharks';

const BlockBanner: FC = () => {
  const { account } = useEthers();
  const balance = BalanceOf(account);

  const [status, setStatus] = useState("hghg");

  function SetStatus() {
    const temp = balance && formatUnits(balance, 0);
    temp >= 9 ? setStatus("Congrats! You have over 3 sharks ♫ ~") : setStatus("Sorry, you don't have enough sharks to qualify.")
  }

  useEffect(() => { SetStatus(); }, [balance])
  return account ? (
    <>
      <div className="background-faq">
        <Text className="notice-text">Coming soon ! ! ! </Text>
        <Text className="notice-text">{status}</Text>
        <Image src={require("../../assets/images/dao-info.jpeg").default} alt="MTV Sharks Dao" />
      </div>
    </>
  ) : (<>
    <div className="background-faq">
      <Text className="notice-text">Coming soon ! ! ! </Text>
      <Text className="notice-text">Connect you wallet to check if you qualify...</Text>
      <Image src={require("../../assets/images/dao-info.jpeg").default} alt="MTV Sharks Dao" />
    </div>
  </>)
};

export default BlockBanner;
