// @ts-nocheck
import React from "react";

import {
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
  Pressable,
} from "react-native";

import styled from "styled-components/native";

type Props = PressableProps & {
  accessibilityRole?: "button";
  bc?: string;
  br?: number;
  align?: "flex-start" | "center" | "flex-end";
  justify?:
    | "flex-end"
    | "flex-start"
    | "center"
    | "space-between"
    | "space-around";
};

const opacityStyle = ({
  pressed,
}: PressableStateCallbackType): StyleProp<ViewStyle> => ({
  opacity: pressed ? 0.5 : 1,
});

export const Button: React.FC<Props> = (props): JSX.Element => {
  return <Container style={opacityStyle} {...props} />;
};

const Container = styled(Pressable)<Props>`
  width: 100%;
  background-color: ${(props) => (props.bc ? props.bc : "#ccc")};
  height: 50px;
  border-radius: ${(props) => (props.br ? props.br : 4)}px;
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
`;
