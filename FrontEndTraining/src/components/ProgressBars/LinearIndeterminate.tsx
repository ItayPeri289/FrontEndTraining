import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useState } from "react";
import HomePage from "../HomePage/HomePage";

export default function LinearIndeterminate() {
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      {loading && (
        <LinearProgress
          sx={{ marginTop: "12em", marginRight: "3rem", marginLeft: "5rem" }}
        />
      )}
      {!loading && <HomePage />}
    </Box>
  );
}
