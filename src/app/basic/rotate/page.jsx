import { Box, Paper, Typography } from "@mui/material";
import RotateSquare from "@/app/components/boxes/RotateSquare";

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
        <Typography variant="h4"> Rotate </Typography>
      </Paper>

      {/* Transition boxes */}
      <Box>
        <Box>
          <Typography variant="h5"> Here some boxes to play with</Typography>
        </Box>
        <Box>
          <RotateSquare style={{ transition: ["transform 2s"] }}>
            Box 1
          </RotateSquare>
          <RotateSquare style={{ transition: ["all 3s linear"] }}>
            Box 2
          </RotateSquare>
          <RotateSquare style={{ transition: ["transform 1s ease-in 1s"] }}>
            Box 3
          </RotateSquare>
        </Box>
      </Box>
    </Box>
  );
}
