import { Container, Typography } from "@mui/material";
import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          color="primary"
          sx={{ fontWeight: "700" }}
        >
          Taskinator
        </Typography>
      </Container>
    </header>
  );
};

export default Header;
