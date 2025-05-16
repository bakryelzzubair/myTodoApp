import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTodos } from "../contexts/TodosContext";

export const ColorToggleButton = () => {
  const {currentTab, setcurrentTab} = useTodos()
  const handleChange = (event, newAlignment) => {
    setcurrentTab(newAlignment);
  };
  return (
    <ToggleButtonGroup
      color="primary"
      value={currentTab}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 3,
        direction: "ltr",
      }}
    >
      <ToggleButton value="non-completed">غير منجز</ToggleButton>
      <ToggleButton value="completed">منجز</ToggleButton>
      <ToggleButton value="all">الكل</ToggleButton>
    </ToggleButtonGroup>
  );
};

