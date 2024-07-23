import Square from "@/app/components/boxes/Square";
import TranslateSquare from "@/app/components/boxes/TranslateSquare";
import { Box, Paper, Typography } from "@mui/material";

export default function Translate() {
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
        <Typography variant="h4"> Translate </Typography>
      </Paper>

      {/* Transition boxes */}
      <Box>
        <Box>
          <Typography variant="h5"> Here some boxes to play with</Typography>
        </Box>
        <Box>
          <TranslateSquare style={{ transition: ["transform 2s"] }}>
            Box 1
          </TranslateSquare>
          <TranslateSquare style={{ transition: ["all 3s linear"] }}>
            Box 2
          </TranslateSquare>
          <TranslateSquare style={{ transition: ["transform 1s ease-in 1s"] }}>
            Box 3
          </TranslateSquare>
        </Box>
      </Box>
    </Box>
  );
}
