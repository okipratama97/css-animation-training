"use client";
import { styled } from "@mui/material";
import { StyledBox } from "./Square";

const Styled = styled(StyledBox)(({ style }) => ({
  "&:hover": {
    // scaleX: (multiplier)
    // scaleY: (multiplier)
    // scale: (multiplier, multiplier) or (multiplier)
    transform: "scale(1.5)",
  },
  ...style,
}));

export default function ScaleSquare({ children, style }: any) {
  return <Styled style={style}>{children}</Styled>;
}
