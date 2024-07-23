import { Box, Paper, Typography } from "@mui/material";
import PerspectiveSquare from "@/app/components/boxes/PerspectiveSquare";

export default function Rotate() {
  return (
    <Box sx={{ paddingX: "3rem", border: "1px solid" }}>
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
        <Typography variant="h4"> Rotate </Typography>
      </Paper>

      {/* Transition boxes */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h5"> Here some boxes to play with</Typography>
        </Box>
        {/* BE careful with perspective. as it's relative to the center of screen */}
        <Box sx={{ perspective: "500px" }}>
          <PerspectiveSquare style={{ transition: ["transform 2s"] }}>
            Box 1
          </PerspectiveSquare>
          <PerspectiveSquare style={{ transition: ["all 1s linear"] }}>
            Box 2
          </PerspectiveSquare>
          <PerspectiveSquare
            style={{ transition: ["transform 1s ease-in 1s"] }}
          >
            Box 3
          </PerspectiveSquare>
        </Box>
      </Box>
    </Box>
  );
}
