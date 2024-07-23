import { Box, Button, Paper, Typography } from "@mui/material";
import Link from "next/link";

export default function Basic() {
  return (
    <Box sx={{ paddingX: "3rem" }}>
      <Paper
        sx={{
          marginLeft: "3rem",
          marginRight: "auto",
          width: "max-content",
          padding: "0 2rem",
          margin: "2rem 0",
        }}
      >
        <Typography variant="h4"> Welcome to Basic! </Typography>
      </Paper>
      <Box>
        <Box>
          <Typography variant="h5"> Available Trainings: </Typography>
        </Box>
        <Button>
          <Link href="/basic/transition">Transition</Link>
        </Button>
        <Button>
          <Link href="/basic/translate">Translate</Link>
        </Button>
        <Button>
          <Link href="/basic/scale">Scale</Link>
        </Button>
        <Button>
          <Link href="/basic/rotate">Rotate</Link>
        </Button>
        <Button>
          <Link href="/basic/skew">Skew</Link>
        </Button>
        <Button>
          <Link href="/basic/transform-origin">Transform Origin</Link>
        </Button>
        <Button>
          <Link href="/basic/perspective">Perspective</Link>
        </Button>
      </Box>
    </Box>
  );
}
