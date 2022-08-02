// @ts-nocheck
import React from "react";
import { ViewProps, View } from "react-native";
import styled, { css } from "styled-components/native";

type Props = ViewProps & {
  /**
   * Background Color
   */
  bc?: string;
  flexBox?: boolean;
  paddingHorizontal?: number;
  paddingVertical?: number;
  /**
   * Padding Top
   */
  pt?: number;
  /**
   * PaddingRight
   */
  pr?: number;
  /**
   * PaddingBottom
   */
  pb?: number;
  /**
   * Padding Left
   */
  pl?: number;
  /**
   * Margin Top
   */
  mt?: number;
  /**
   * Margin Right
   */
  mr?: number;
  /**
   * Margin Bottom
   */
  mb?: number;
  /**
   * Margin Left
   */
  ml?: number;
  /**
   * Width
   */
  w?: string;
  /**
   * Border Radius
   */
  br?: number;
  direction?: "row" | "column";
  align?: "flex-start" | "center" | "flex-end";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
};

export const Box: React.FC<Props> = (props): JSX.Element => {
  return <Container {...props} />;
};

const Container = styled(View)<Props>`
  width: 100%;
  background-color: ${(props) => (props.bc ? props.bc : "#ccc")};

  padding-top: ${(props) => (props.pt ? props.pt : 0)}px;
  padding-right: ${(props) => (props.pr ? props.pr : 0)}px;
  padding-bottom: ${(props) => (props.pb ? props.pb : 0)}px;
  padding-left: ${(props) => (props.pl ? props.pl : 0)}px;

  margin-top: ${(props) => (props.mt ? props.mt : 0)}px;
  margin-right: ${(props) => (props.mr ? props.mr : 0)}px;
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
  margin-left: ${(props) => (props.ml ? props.ml : 0)}px;

  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  width: ${(props) => (props.w ? props.w : "100%")};

  border-radius: ${(props) => (props.br ? props.br : 4)}px;

  ${(props) =>
    props.flexBox &&
    css`
      flex: 1;
    `};

  ${(props) =>
    props.align &&
    css`
      align-items: ${props.align};
    `};

  ${(props) =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `};
`;
