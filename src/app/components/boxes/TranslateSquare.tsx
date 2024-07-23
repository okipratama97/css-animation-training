"use client";
import { styled } from "@mui/material";
import { StyledBox } from "./Square";

const Styled = styled(StyledBox)(({ style }) => ({
  "&:hover": {
    // other than transform. you can use the translate directly. works with other transform function
    // translateX: (distance in pixels etc, can be negative)
    // translateY: (distance)
    // translate: (distance x, distance y)
    transform: "translate(500px, 500px)",
  },
  ...style,
}));

export default function TranslateSquare({ children, style }: any) {
  return <Styled style={style}>{children}</Styled>;
}
