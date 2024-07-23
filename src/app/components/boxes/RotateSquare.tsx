"use client";
import { styled } from "@mui/material";
import { StyledBox } from "./Square";

const Styled = styled(StyledBox)(({ style }) => ({
  "&:hover": {
    // rotate: (360deg = 1turn = 400grad, neg to turn ccw)
    transform: "rotate(180deg)",
  },
  ...style,
}));

export default function RotateSquare({ children, style }: any) {
  return <Styled style={style}>{children}</Styled>;
}
