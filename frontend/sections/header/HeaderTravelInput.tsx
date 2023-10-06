"use client";

import {
  Box,
  Button,
  Grid,
  Paper,
  Slider,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import {
  AppleLogo,
  Bed,
  Cactus,
  Church,
  CoinVertical,
  Mountains,
  SneakerMove,
  Snowflake,
  TreeEvergreen,
  TreePalm,
} from "@phosphor-icons/react";
import { useState } from "react";

const climates = [
  { id: "tropical", name: "Tropical", icon: TreePalm },
  { id: "desert", name: "Desert", icon: Cactus },
  { id: "mountain", name: "Mountaineous", icon: Mountains },
  { id: "alpine", name: "Alpine", icon: TreeEvergreen },
  { id: "polar", name: "Polar", icon: Snowflake },
  { id: "mediterranean", name: "Mediterranean", icon: AppleLogo },
];

const activityLevels = [
  { id: "relaxing", name: "Relaxing", icon: Bed },
  { id: "cultural", name: "Cultural", icon: Church },
  { id: "sporty", name: "Sporty", icon: SneakerMove },
];

function valuetext(value: number) {
  return `€${value}` + (value == 3000 ? "+" : "");
}

const HeaderTravelInput: React.FC = () => {
  const [period, setPeriod] = useState();
  const [climate, setClimate] = useState("tropical");
  const [activityLevel, setActivityLevel] = useState(["lazy"]);

  const onActivityLevelChange = (
    e: React.MouseEvent<HTMLElement>,
    v: string
  ) => {
    e.target?.dispatchEvent(new Event("blur"));

    const isAlreadySelected = activityLevel.includes(v);

    setActivityLevel([
      ...activityLevel.filter((a) => a != v),
      ...(isAlreadySelected ? [] : [v]),
    ]);
  };

  const [budget, setBudget] = useState<number[]>([20, 37]);

  const handleBudgetChange = (event: Event, newValue: number | number[]) => {
    setBudget(newValue as number[]);
  };

  return (
    <>
      <Box sx={{ width: 1 }}>
        <Stack direction="column" spacing={4}>
          {/* Period */}
          <Typography variant="h5">{"When are you going?"}</Typography>
          <ToggleButtonGroup
            value={period}
            onChange={(e, v) => setPeriod(v)}
            exclusive
            fullWidth
          >
            <ToggleButton value="winter">Winter</ToggleButton>
            <ToggleButton value="spring">Spring</ToggleButton>
            <ToggleButton value="summer">Summer</ToggleButton>
            <ToggleButton value="autumn">Autumn</ToggleButton>
          </ToggleButtonGroup>
          {/* Temperature */}
          <Typography variant="h5">
            {"What is your preferred climate?"}
          </Typography>
          <div>
            <Grid container spacing={1} sx={{ width: 1 }}>
              {climates.map((c) => (
                <Grid key={c.id} item xs={6}>
                  <Button
                    variant="contained"
                    onClick={() => setClimate(c.id)}
                    sx={{
                      width: 1,
                      bgcolor: climate == c.id ? "primary.main" : "grey.50",
                      color:
                        climate == c.id ? "common.white" : "text.secondary",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <c.icon size={30} />
                    {c.name}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </div>
          {/* Activity */}
          <Typography variant="h5">
            {"What is your preferred level of activity?"}
          </Typography>
          <div>
            <Grid container spacing={1} sx={{ width: 1 }}>
              {activityLevels.map((c) => (
                <Grid key={c.id} item xs={4}>
                  <Button
                    variant="contained"
                    onClick={(e) => onActivityLevelChange(e, c.id)}
                    sx={{
                      width: 1,
                      bgcolor: activityLevel.includes(c.id)
                        ? "primary.main"
                        : "grey.50",
                      color: activityLevel.includes(c.id)
                        ? "common.white"
                        : "text.secondary",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      "&:hover": {
                        bgcolor: activityLevel.includes(c.id)
                          ? "primary.main"
                          : "grey.50",
                      },
                    }}
                  >
                    <c.icon size={30} />
                    {c.name}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </div>
          {/* Budget */}
          <Typography variant="h5">{"What is your budget?"}</Typography>
          <div>
            <Stack
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              px={4}
              pt={2}
            >
              <Slider
                valueLabelDisplay="on"
                valueLabelFormat={valuetext}
                color="primary"
                sx={{
                  height: 20,
                  "& .MuiSlider-thumb": {
                    height: 25,
                    width: 25,
                    border: "2px solid",
                    borderColor: "primary.main",
                    bgcolor: "grey.100",
                    boxShadow: (theme) => theme.customShadows.z12,
                  },
                }}
                getAriaLabel={() => "Budget range"}
                value={budget}
                max={3000}
                step={100}
                onChange={handleBudgetChange}
              />
              {/* <Paper
                sx={{
                  bgcolor: "grey.100",
                  width: 150,
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CoinVertical />
                <Typography variant="caption" fontWeight="bold">
                  {budget[0]} - {budget[1]}
                </Typography>
              </Paper> */}
            </Stack>
          </div>
        </Stack>
      </Box>
    </>
  );
};

export default HeaderTravelInput;
