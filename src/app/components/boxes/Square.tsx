"use client";
import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ style }) => ({
  height: 100,
  width: 100,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid currentColor",
  margin: "0.5rem 0",
  backgroundColor: "red",
  ...style,
}));

export default function Square({ children, style }: any) {
  return <StyledBox style={style}>{children}</StyledBox>;
}
