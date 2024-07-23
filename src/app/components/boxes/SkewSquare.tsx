"use client";
import { styled } from "@mui/material";
import { StyledBox } from "./Square";

const Styled = styled(StyledBox)(({ style }) => ({
  "&:hover": {
    // skewX: (360deg, neg to other direction)
    // skewY: (deg)
    // skew: (deg, deg)
    transform: "skew(20deg, 30deg)",
  },
  ...style,
}));

export default function SkewSquare({ children, style }: any) {
  return <Styled style={style}>{children}</Styled>;
}
