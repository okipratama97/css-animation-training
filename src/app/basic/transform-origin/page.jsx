import { Box, Paper, Typography } from "@mui/material";
import TransformOSquare from "@/app/components/boxes/TransformOSquare";

export default function TransformOrigin() {
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
        <Typography variant="h4"> Transform Origin </Typography>
      </Paper>

      {/* Transition boxes */}
      <Box>
        <Box>
          <Typography variant="h5"> Here some boxes to play with</Typography>
        </Box>
        <Box>
          <TransformOSquare style={{ transition: ["transform 2s"] }}>
            Box 1
          </TransformOSquare>
          <TransformOSquare style={{ transition: ["all 3s linear"] }}>
            Box 2
          </TransformOSquare>
          <TransformOSquare style={{ transition: ["transform 1s ease-in 1s"] }}>
            Box 3
          </TransformOSquare>
        </Box>
      </Box>
    </Box>
  );
}
