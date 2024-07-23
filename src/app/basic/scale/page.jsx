import { Box, Paper, Typography } from "@mui/material";
import ScaleSquare from "@/app/components/boxes/ScaleSquare";

export default function Scale() {
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
        <Typography variant="h4"> Scale </Typography>
      </Paper>

      {/* Transition boxes */}
      <Box>
        <Box>
          <Typography variant="h5"> Here some boxes to play with</Typography>
        </Box>
        <Box>
          <ScaleSquare style={{ transition: ["transform 2s"] }}>
            Box 1
          </ScaleSquare>
          <ScaleSquare style={{ transition: ["all 3s linear"] }}>
            Box 2
          </ScaleSquare>
          <ScaleSquare style={{ transition: ["transform 1s ease-in 1s"] }}>
            Box 3
          </ScaleSquare>
        </Box>
      </Box>
    </Box>
  );
}
