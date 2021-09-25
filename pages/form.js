import { Container, Button, ButtonGroup, TextField } from "@mui/material";
import React, { useState } from "react";

export default function form() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [pin, setPin] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [file, setFile] = useState(null);

  const handleOnSubmit = () => {
    console.log({ username, password, pin: Number(pin), date, time, file });
  };

  const handleOnClear = () => {
    setUsername(null);
    setPassword(null);
    setPin(null);
    setDate(null);
    setTime(null);
    setFile(null);
  };

  return (
    <Container sx={{ marginTop: "2rem" }}>
      <div style={{ color: "red" }}>Required *</div>
      <TextField
        sx={{ display: "block", my: "1rem" }}
        error={username === "" ? true : false}
        id="username"
        label="Username"
        onChange={(e) => setUsername(e.target.value)}
        variant="standard"
        value={username !== null ? username : ""}
      />

      <div style={{ color: "red" }}>Required *</div>
      <TextField
        sx={{ display: "block", my: "1rem" }}
        error={password === "" ? true : false}
        id="password"
        label="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password !== null ? password : ""}
      />

      <div style={{ color: "red" }}>Required *</div>
      <TextField
        sx={{ display: "block", my: "1rem" }}
        error={pin === "" ? true : false}
        id="pin"
        label="Pin"
        type="number"
        onChange={(e) => setPin(e.target.value)}
        variant="filled"
        value={pin !== null ? pin : ""}
      />

      <div style={{ color: "red" }}>Required *</div>
      <TextField
        sx={{ display: "block", my: "1rem" }}
        error={date === "" ? true : false}
        id="date"
        label="Date"
        type="date"
        onChange={(e) => setDate(e.target.value)}
        variant="filled"
        InputLabelProps={{
          shrink: true,
        }}
        value={date !== null ? date : ""}
      />

      <div style={{ color: "red" }}>Required *</div>
      <TextField
        sx={{ display: "block", my: "1rem" }}
        error={time === "" ? true : false}
        id="time"
        label="Time"
        type="time"
        onChange={(e) => setTime(e.target.value)}
        variant="filled"
        InputLabelProps={{
          shrink: true,
        }}
        value={time !== null ? time : ""}
      />

      <div style={{ color: "red" }}>Required *</div>
      <TextField
        sx={{ display: "block", my: "1rem" }}
        error={file === null ? true : false}
        id="file"
        label="File"
        type="file"
        onChange={(e) => setFile(e.target.value)}
        variant="filled"
        InputLabelProps={{
          shrink: true,
        }}
        value={file !== null ? file : ""}
      />

      <Button
        variant="contained"
        color="primary"
        sx={{ mx: "1rem" }}
        onClick={() => handleOnSubmit()}
      >
        Submit
      </Button>
      <Button
        variant="contained"
        color="error"
        sx={{ mx: "1rem" }}
        onClick={() => handleOnClear()}
      >
        Clear
      </Button>
    </Container>
  );
}
