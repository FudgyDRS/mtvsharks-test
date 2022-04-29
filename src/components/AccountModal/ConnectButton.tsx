import { Button, Box, Text } from "@chakra-ui/react";
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";

import { useEthers, useEtherBalance } from "../../modules/usedapp2/hooks";

type Props = { handleOpenModal: any; };

export default function ConnectButton({ handleOpenModal }: Props) {
  const { activateBrowserWallet, account, chainId } = useEthers();
  const etherBalance = useEtherBalance(account);

  function handleConnectWallet() {
    activateBrowserWallet();
  }

  return account ? (
    <Box maxWidth={"320px"}>
    <Box display="flex" alignItems="center" background="gray.700" borderRadius="xl" py="0" mr="4">
      <Box className="ethBox">
        <Text color="white" className="ethText">
          {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)}
          {chainId === 62621
            ? " MTV"
            : chainId === 4002
            ? " tFTM"
            : chainId === 250
            ? " FTM"
            : chainId === 97
            ? " tBNB"
            : chainId === 56
            ? " BNB"
            : chainId === 2152
            ? " FRA"
            : chainId === 2153
            ? " tFRA"
            : " ETH"} 
        </Text>
      </Box>
      <Button
        className="accountButton"
        onClick={handleOpenModal}
        bg="gray.800"
        border="1px solid transparent"
        _hover={{ border: "1px", borderStyle: "solid", borderColor: "blue.400", backgroundColor: "gray.700" }}
        borderRadius="xl"
        m="1px"
        px={3}
      >
        <Text className="accountText" color="white" fontWeight="medium" mr="2">
          {account && `${account.slice(0, 6)}...${account.slice(account.length - 4, account.length)}`}
        </Text>
        <Identicon />
      </Button>
    </Box>
    </Box>
  ) : (
    <Button onClick={handleConnectWallet}>Connect to a wallet</Button>
  );
}
