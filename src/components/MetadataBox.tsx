import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import { FC, useState, useEffect } from 'react';

import metadata from '../abi/parsedData.json';
import rates from '../abi/mtvsharksRates.json';

const MetadataBox: FC<{index: any}> = ({ index }) => {
    const findIndex = (data: any, index: any) => {
      const dataList: any = data.find((dataList: any) => dataList.index === index);
      return dataList && dataList.index;
    }
    const data = findIndex(metadata, index);

    
    

    return(<Grid templateColumns='repeat(2, 1fr)' gap={4}>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Background: </Text>
              <Text color={"white"} marginStart={"1em"}>{metadata[data]['Background']}</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Rate:</Text>
              <Text color={"white"} marginStart={"1em"}>{(rates['Background'][metadata[data]['Background'] as keyof typeof rates['Background']] * 100 / 3333).toFixed(2)}%</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Color: </Text>
              <Text color={"white"} marginStart={"1em"}>{metadata[data]['Color']}</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Rate:</Text>
              <Text color={"white"} marginStart={"1em"}>{(rates['Color'][metadata[data]['Color'] as keyof typeof rates['Color']] * 100 / 3333).toFixed(2)}%</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Spots: </Text>
              <Text color={"white"} marginStart={"1em"}>{metadata[data]['Spots']}</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Rate:</Text>
              <Text color={"white"} marginStart={"1em"}>{(rates['Spots'][metadata[data]['Spots'] as keyof typeof rates['Spots']] * 100 / 3333).toFixed(2)}%</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Base: </Text>
              <Text color={"white"} marginStart={"1em"}>{metadata[data]['Base']}</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Rate:</Text>
              <Text color={"white"} marginStart={"1em"}>{(rates['Base'][metadata[data]['Base'] as keyof typeof rates['Base']] * 100 / 3333).toFixed(2)}%</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Eyes: </Text>
              <Text color={"white"} marginStart={"1em"}>{metadata[data]['Eyes']}</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Rate:</Text>
              <Text color={"white"} marginStart={"1em"}>{(rates['Eyes'][metadata[data]['Eyes'] as keyof typeof rates['Eyes']] * 100 / 3333).toFixed(2)}%</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Eyebrow: </Text>
              <Text color={"white"} marginStart={"1em"}>{metadata[data]['Eyebrow']}</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Rate:</Text>
              <Text color={"white"} marginStart={"1em"}>{(rates['Eyebrow'][metadata[data]['Eyebrow'] as keyof typeof rates['Eyebrow']] * 100 / 3333).toFixed(2)}%</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Mouth: </Text>
              <Text color={"white"} marginStart={"1em"}>{metadata[data]['Mouth']}</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Rate:</Text>
              <Text color={"white"} marginStart={"1em"}>{(rates['Mouth'][metadata[data]['Mouth'] as keyof typeof rates['Mouth']] * 100 / 3333).toFixed(2)}%</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Nose Area: </Text>
              <Text color={"white"} marginStart={"1em"}>{metadata[data]['Nose Area']}</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Rate:</Text>
              <Text color={"white"} marginStart={"1em"}>{(rates['Nose Area'][metadata[data]['Nose Area'] as keyof typeof rates['Nose Area']] * 100 / 3333).toFixed(2)}%</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Head: </Text>
              <Text color={"white"} marginStart={"1em"}>{metadata[data]['Head']}</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Rate:</Text>
              <Text color={"white"} marginStart={"1em"}>{(rates['Head'][metadata[data]['Head'] as keyof typeof rates['Head']] * 100 / 3333).toFixed(2)}%</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Wrist: </Text>
              <Text color={"white"} marginStart={"1em"}>{metadata[data]['Wrist']}</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Rate:</Text>
              <Text color={"white"} marginStart={"1em"}>{(rates['Wrist'][metadata[data]['Wrist'] as keyof typeof rates['Wrist']] * 100 / 3333).toFixed(2)}%</Text>
            </GridItem>
          </Grid>);
}

export default MetadataBox;
