// @ts-nocheck
import React from "react";
import { TextProps, Text } from "react-native";
import styled, { css } from "styled-components/native";

type Props = TextProps & {
  color?: string;
  fz?: number;
  fw?: number;
  a?: "center" | "flex-start" | "flex-end";
  ta?: "start" | "end" | "center";
};

export const TextBase = (props: Props) => {
  return <Container {...props}>{props.children}</Container>;
};

const Container = styled(Text)<Props>`
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: ${({ fz }) => (fz ? fz : 16)}px;
  font-weight: ${({ fw }) => (fw ? fw : 400)};

  ${(props) =>
    props.a &&
    css`
      align-self: ${props.a};
    `}
  ${(props) =>
    props.ta &&
    css`
      text-align: ${props.ta};
    `}
`;
