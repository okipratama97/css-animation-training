"use client";
import { styled } from "@mui/material";
import { StyledBox } from "./Square";

const Styled = styled(StyledBox)(({ style }) => ({
  "&:hover": {
    // rotateZ: act like normal rotate
    // rotateX: top down rotate
    // rotateY: left rigth rotate
    // translateZ: act like a zoom. will move beyond screen if value > container perspective
    transform: "translateZ(200px) rotateX(20deg)",
  },
  ...style,
}));

export default function PerspectiveSquare({ children, style }: any) {
  return <Styled style={style}>{children}</Styled>;
}
