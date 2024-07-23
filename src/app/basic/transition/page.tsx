import { Box, Button, Paper, Typography } from "@mui/material";
import Link from "next/link";
import TransitionSquare from "@/app/components/boxes/TransitionSquare";

export default function Transition() {
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
        <Typography variant="h4"> Transition </Typography>
      </Paper>
      {/* Transition boxes */}
      <Box>
        <Box>
          <Typography variant="h5"> Here some boxes to play with</Typography>
        </Box>
        <Box>
          {/* [Use comma separated in MUI, space in css] Writing style 1: by spreading the transition property, duration, and delay */}
          <TransitionSquare
            style={{
              transitionProperty: "background-color,color,width",
              transitionDuration: "2s",
              transitionDelay: "500ms",
            }}
          >
            Box 1
          </TransitionSquare>
          {/* Writing style 2: by give transition-property: all */}
          <TransitionSquare
            style={{
              transitionProperty: "all",
              transitionDuration: "2s",
              transitionTimingFunction: "linear",
              transitionDelay: "1s",
            }}
          >
            Box 2
          </TransitionSquare>
          {/* [Array and comma in MUI, comma in css. Can use all like style 2] Writing style 3: single line using transition: [property] [duration] [timing] [delay]*/}
          <TransitionSquare
            style={{
              transition: [
                "background-color 2s ease-out 0s",
                "color 2s ease-out 2s",
                "width 1s linear 4s",
              ],
            }}
          >
            Box 3
          </TransitionSquare>
        </Box>
      </Box>
      {/* Bonus button */}
      <Box>
        <Button>
          <Link href="/basic/transition/bonus">Bonus</Link>
        </Button>
      </Box>
    </Box>
  );
}
