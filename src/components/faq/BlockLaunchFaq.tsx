import { FC } from "react"
import { Box, Text, Image } from "@chakra-ui/react"

import "../../styles/faq.scss";

const BlockLaunchFaq: FC = () => {
  return (
    <Box width="100hw" height="80vh">
        <div className="title">Frequently Asked Questions (FAQs)</div>
        <Box>
            <div className="question">Q: How many MTV Sharks will be minted?</div>
            <div className="answer">3,333 unique Sharks will be minted.</div>
        </Box>
        <Box>
            <div className="question">Q: What is the price of the MTV Sharks on mint?<br/>A:</div>
            <div className="answer">
                1-150:     Given away as prizes
                <br/>151-1000:  333 MTV per Shark
                <br/>1001-1500: 444 MTV per Shark
                <br/>1501-2000: 666 MTV per Shark
                <br/>2001-3333: 999 MTV per Shark
            </div>
        </Box>
        <Box>
            <div className="question">Q: What time is the mint?<br/>A:</div>
            <div className="answer">
                New York    - 2/28: 8PM
                <br/>Los Angeles - 2/28: 5PM
                <br/>Amsterdam   - 3/1:  2AM
                <br/>Dubai       - 3/1:  5AM
                <br/>Taipei      - 3/1:  9AM
                <br/>Tokyo       - 3/1: 10AM
            </div>
        </Box>
        <Box>
            <div className="question">Q: What happens if something goes wrong during the mint? (Sometimes, shit happens)<br/>A:</div>
            <div className="answer">The mint will be rescheduled for exactly 24 hours later. (I don't want anyone missing sleep over launches like I did, lol)</div>
        </Box>
        <Box>
            <div className="question">Q: What are the advantages of holding a Shark NFT?<br/>A:</div>
            <div className="answer">There are several depending on how many you want to hold. If you hold at least 3 Sharks, you can participate in the DAO voting and activities. If you hold 9 or more Sharks, you can become a member of The Shark Club.</div>
        </Box>
        <Box>
            <div className="question">Q: Do the winners of the Design Your Own Shark Contest really get their Shark minted in the collection?<br/>A:</div>
            <div className="answer">Absolutely! These three 1:1 pieces will appear at the end of the mint, so if you're lucky enough to be minting until the end, you'll have a higher chance of scoring these legit gems!*/</div>
        </Box>
        <div className="contest-winners">
            <Box>
                <Image src={require("../../assets/images/MTV_shark_bitchattack - Musyk fabryk-p-800.png").default} boxSize="300px" />
                <Text className="name">MTV Shark Bitchattack<br/>By: Musyk Fabryk</Text>
            </Box>
            <Box>
                <Image src={require("../../assets/images/Spliffshark - Elias Campos-p-800.png").default} boxSize="300px" />
                <Text className="name">MTV Spliffshark<br/>By: Elias Campos</Text>
            </Box>
            <Box>
                <Image src={require("../../assets/images/ZombieShark01 - dannydonkey-p-800.jpeg").default} boxSize="300px" />
                <Text className="name">ZombieShark01<br/>By: dannydonkey</Text>
            </Box>
        </div>
    </Box>
  )
}

export default BlockLaunchFaq;
