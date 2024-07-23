"use client";
import { styled } from "@mui/material";
import { StyledBox } from "./Square";

const Styled = styled(StyledBox)(({ style }) => ({
  "&:hover": {
    backgroundColor: "green",
    width: 300,
    color: "black",
  },
  ...style,
}));

export default function TransitionSquare({ children, style }: any) {
  return <Styled style={style}>{children}</Styled>;
}
