import { Box, Paper, Typography } from "@mui/material";
import SkewSquare from "@/app/components/boxes/SkewSquare";

export default function Rotate() {
  return (
    <Box sx={{ paddingX: "3rem" }}>
      {/* Title */}
      <Paper
        sx={{
          marginLeft: "3rem",
          marginRight: "auto",
          width: "max-content",
          padding: "0 2rem",
          margin: "2rem 0",
        }}
      >
        <Typography variant="h4"> Skew </Typography>
      </Paper>

      {/* Transition boxes */}
      <Box>
        <Box>
          <Typography variant="h5"> Here some boxes to play with</Typography>
        </Box>
        <Box>
          <SkewSquare style={{ transition: ["transform 2s"] }}>
            Box 1
          </SkewSquare>
          <SkewSquare style={{ transition: ["all 3s linear"] }}>
            Box 2
          </SkewSquare>
          <SkewSquare style={{ transition: ["transform 1s ease-in 1s"] }}>
            Box 3
          </SkewSquare>
        </Box>
      </Box>
    </Box>
  );
}
