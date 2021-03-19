import styled from "styled-components";
import {
  Text as ChakraText,
  TextProps,
  Container as ChakraContainer,
  ContainerProps,
} from "@chakra-ui/react";
import Image from "next/image";

import BackgroundImage from "../assets/images/background.jpg";

export const Container = styled(ChakraContainer)<ContainerProps>``;

export const Background = styled(Image).attrs({
  src: BackgroundImage,
  layout: "fill",
})`
  width: 100vw;
  height: 100vw;
  display: flex;
  flex: 1;
`;

export const DownArrow = styled.span`
  position: absolute;
  bottom: 0;
  left: 50%;
`;

export const Presentation = styled(ChakraContainer)<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: end;

  flex: 1;
  z-index: 999;
`;

export const Text = styled(ChakraText)<TextProps>`
  z-index: 999;
`;
