/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="320px"
      height="253px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        width="320px"
        height="253px"
        overflow="hidden"
        position="absolute"
        left="0px"
        top="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.View[0]")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          left="20px"
          top="215px"
          padding="0px 0px 0px 0px"
          children={home?.price}
          {...getOverrideProps(overrides, "View.View[0].Text[0]")}
        ></Text>
        <Text
          fontFamily="Roboto"
          fontSize="18px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          left="20px"
          top="185px"
          padding="0px 0px 0px 0px"
          children={home?.address}
          {...getOverrideProps(overrides, "View.View[0].Text[1]")}
        ></Text>
      </View>
      <Image
        width="320px"
        height="173px"
        position="absolute"
        left="0px"
        top="0px"
        padding="0px 0px 0px 0px"
        src={home?.image_url}
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
    </View>
  );
}
