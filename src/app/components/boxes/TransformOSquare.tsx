"use client";
import { styled } from "@mui/material";
import { StyledBox } from "./Square";

const Styled = styled(StyledBox)(({ style }) => ({
  // possible combinations:
  // transformOrigin: "center/top/bottom <and/or> center/left/right"
  // transformOrigin: "x-coordinate y-coordinate" (for absolute positioning)
  // transformOrigin: "percentage x-coordinate percentage y-coordinate" (for percentage positioning)
  // transformOrigin: "length x-axis length y-axis" (for 3D positioning)

  transformOrigin: "top left",
  "&:hover": {
    transform: "rotate(180deg)",
  },
  ...style,
}));

export default function TransformOSquare({ children, style }: any) {
  return <Styled style={style}>{children}</Styled>;
}
