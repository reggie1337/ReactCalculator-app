import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Icon,
  TextField,
  Typography,
} from "@mui/material";
import { BoxProps } from "@mui/material/Box";
import { useState } from "react";

const buttonOne = 1;
const buttonTwo = 2;
const buttonThree = 3;
const buttonFour = 4;
const buttonFive = 5;
const buttonSix = 6;
const buttonSeven = 7;
const buttonEight = 8;
const buttonNine = 9;
const buttonZero = 0;

const App = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [prevNum, setPrevNum] = useState("");

  const ButtonClick = (value) => {
    setCurrentValue((prevNumber) => prevNumber * 10 + value);
  };

  const handleButtonClick = (operator) => {
    setPrevNum((prevNum) => prevNum + currentValue + operator);
    setCurrentValue(0);
  };

  const clearButton = () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      setCurrentValue(0);
      setPrevNum("");
      return null;
    } catch (error) {
      setCurrentValue(0);
      setPrevNum("");
    }
  };

  const handleEqualsButtonClick = () => {
    // eslint-disable-next-line no-eval
    const result = eval(prevNum + currentValue);
    setCurrentValue(result);
    setPrevNum("");
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          DISPLAY:
        </Typography>
        <TextField className={"equationBar"} value={currentValue}></TextField>
      </CardContent>
      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          gridAutoRows: "40px",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 3,
          m: 5,
        }}
      >
        <CardActions>
          <Button
            onClick={() => ButtonClick(buttonOne)}
            size="large"
            sx={{
              border: 2,
            }}
          >
            1
          </Button>
        </CardActions>
        <CardActions>
          <Button
            onClick={() => ButtonClick(buttonTwo)}
            size="large"
            sx={{
              border: 2,
            }}
          >
            2
          </Button>
        </CardActions>
        <CardActions>
          <Button
            onClick={() => ButtonClick(buttonThree)}
            size="large"
            sx={{
              border: 2,
            }}
          >
            3
          </Button>
        </CardActions>
        <CardActions>
          <Button
            onClick={() => ButtonClick(buttonFour)}
            size="large"
            sx={{
              border: 2,
            }}
          >
            4
          </Button>
        </CardActions>
        <CardActions>
          <Button
            onClick={() => ButtonClick(buttonFive)}
            size="large"
            sx={{
              border: 2,
            }}
          >
            5
          </Button>
        </CardActions>
        <CardActions>
          <Button
            onClick={() => ButtonClick(buttonSix)}
            size="large"
            sx={{
              border: 2,
            }}
          >
            6
          </Button>
        </CardActions>

        <CardActions>
          <Button
            onClick={() => ButtonClick(buttonSeven)}
            size="large"
            sx={{
              border: 2,
            }}
          >
            7
          </Button>
        </CardActions>
        <CardActions>
          <Button
            onClick={() => ButtonClick(buttonEight)}
            size="large"
            sx={{
              border: 2,
            }}
          >
            8
          </Button>
        </CardActions>
        <CardActions>
          <Button
            onClick={() => ButtonClick(buttonNine)}
            size="large"
            sx={{
              border: 2,
            }}
          >
            9
          </Button>
        </CardActions>
        <CardActions>
          <Button
            onClick={() => handleEqualsButtonClick()}
            size="large"
            sx={{
              border: 2,
            }}
          >
            =
          </Button>
        </CardActions>
        <CardActions>
          <Button
            onClick={() => ButtonClick(buttonZero)}
            size="large"
            sx={{
              border: 2,
            }}
          >
            0
          </Button>
        </CardActions>
        <CardActions>
          <Button
            onClick={() => ButtonClick(clearButton())}
            size="large"
            sx={{
              border: 2,
            }}
          >
            clear
          </Button>
        </CardActions>
      </Box>

      <div className={"functionButton"}>
        <CardActions>
          <Button
            onClick={() => handleButtonClick("+")}
            size="large"
            sx={{
              border: 2,
            }}
          >
            +
          </Button>
        </CardActions>
        <CardActions>
          <Button
            onClick={() => handleButtonClick("-")}
            size="large"
            sx={{
              border: 2,
            }}
          >
            -
          </Button>
        </CardActions>
        <CardActions>
          <Button
            onClick={() => handleButtonClick("/")}
            size="large"
            sx={{
              border: 2,
            }}
          >
            &#247;
          </Button>
        </CardActions>
        <CardActions>
          <Button
            onClick={() => handleButtonClick("*")}
            size="large"
            sx={{
              border: 2,
            }}
          >
            *
          </Button>
        </CardActions>
      </div>
    </React.Fragment>
  );

  function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          p: 1,
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
          ...sx,
        }}
        {...other}
      />
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to React Calculator</p>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 400,
              height: 500,
            },
          }}
        >
          <Paper elevation={3}>
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">{card}</Card>
            </Box>
          </Paper>
        </Box>
      </header>
    </div>
  );
};

export default App;
