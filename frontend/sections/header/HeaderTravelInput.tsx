"use client";

import GoogleMaps, { PlaceType } from "@/components/GoogleMaps";
import Logo from "@/components/Logo";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  OutlinedInput,
  Paper,
  Slider,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import {
  AppleLogo,
  Bed,
  Cactus,
  CaretDown,
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

function valueDuration(value: number) {
  if (value == 1) {
    return `${value} week`;
  }

  return `${value} weeks`;
}

const HeaderTravelInput: React.FC = () => {
  const [period, setPeriod] = useState("summer");
  const [climate, setClimate] = useState("tropical");
  const [activityLevel, setActivityLevel] = useState(["lazy"]);
  const [travelInputOpen, setTravelInputOpen] = useState(true);
  const [budget, setBudget] = useState<number[]>([0, 500]);
  const [duration, setDuration] = useState(2);
  const [location, setLocation] = useState<PlaceType | null>(null);

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

  const handleBudgetChange = (event: Event, newValue: number | number[]) => {
    setBudget(newValue as number[]);
  };

  const handleSubmission = () => {
    setTravelInputOpen(false);
  };

  return (
    <>
      <Accordion
        expanded={travelInputOpen}
        onChange={(e) => setTravelInputOpen(!travelInputOpen)}
      >
        <AccordionSummary expandIcon={<CaretDown size={20} />}>
          <Typography variant="h3">Find your trip</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: 1 }}>
            <Stack direction="column" spacing={4}>
              {/* Location */}
              <Typography variant="h5">
                {"Where are you trip'in from?"}
              </Typography>
              <FormControl>
                <GoogleMaps value={location} setValue={setLocation} />
              </FormControl>
              {/* Period */}
              <Typography variant="h5">{"When are you going?"}</Typography>
              <ToggleButtonGroup
                value={period}
                onChange={(e, v) => v && setPeriod(v)}
                exclusive
                fullWidth
              >
                <ToggleButton value="winter">Winter</ToggleButton>
                <ToggleButton value="spring">Spring</ToggleButton>
                <ToggleButton value="summer">Summer</ToggleButton>
                <ToggleButton value="autumn">Autumn</ToggleButton>
              </ToggleButtonGroup>
              {/* Location */}
              <Typography variant="h5">
                {"What's the duration of your travels?"}
              </Typography>
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
                    color="primary"
                    valueLabelFormat={valueDuration}
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
                    value={duration}
                    max={8}
                    min={1}
                    step={1}
                    onChange={(e, v) => setDuration(v as number)}
                  />
                </Stack>
              </div>

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
                          boxShadow: (theme) => theme.customShadows.z16,
                          bgcolor:
                            climate == c.id ? "primary.main" : "common.white",
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
                          boxShadow: (theme) => theme.customShadows.z16,
                          bgcolor: activityLevel.includes(c.id)
                            ? "primary.main"
                            : "common.white",
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
                </Stack>
              </div>
              <Button
                onClick={handleSubmission}
                size="large"
                variant="contained"
              >
                Find my Trip
              </Button>
            </Stack>
          </Box>
        </AccordionDetails>
      </Accordion>
      {!travelInputOpen && (
        <Box
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default HeaderTravelInput;
