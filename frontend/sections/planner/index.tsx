"use client";

import GoogleMaps, { PlaceType } from "@/components/GoogleMaps";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
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
  CaretDown,
  Church,
  Mountains,
  SneakerMove,
  Snowflake,
  TreeEvergreen,
  TreePalm,
} from "@phosphor-icons/react";
import { useState } from "react";
import axios from "axios";

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

interface FormStateProps {
  starting_position: PlaceType;
  activity: string[];
  climate: string;
  budget: [number, number];
  time_of_year: string;
  duration: number;
}

const HeaderTravelInput: React.FC = () => {
  const [formState, setFormState] = useState<FormStateProps>({
    starting_position: {
      description: "",
      structured_formatting: {
        main_text: "",
        secondary_text: "",
      },
    },
    activity: ["relaxing"],
    climate: "tropical",
    budget: [0, 3000],
    time_of_year: "winter",
    duration: 2,
  });

  const [travelInputOpen, setTravelInputOpen] = useState(true);

  const onFormStateChange = (
    key: keyof FormStateProps,
    newValue: FormStateProps[keyof FormStateProps]
  ) => {
    const updatedFormState = { ...formState } as FormStateProps;

    if (updatedFormState === undefined) {
      return updatedFormState;
    }

    if (key == "activity") {
      const isAlreadySelected = (updatedFormState[key] as string[]).includes(
        newValue as string
      );

      setFormState({
        ...updatedFormState,
        activity: [
          ...updatedFormState["activity"].filter((a) => a != newValue),
          ...(isAlreadySelected ? [] : [newValue as string]),
        ],
      });
      return;
    }

    (updatedFormState as any)[key] = newValue;

    setFormState(updatedFormState);
  };

  const handleSubmission = async () => {
    setTravelInputOpen(false);

    const data = {
      starting_position:
        formState.starting_position.structured_formatting.main_text,
      activity: formState.activity,
      climate: formState.climate,
      budget: formState.budget,
      time_of_year: formState.time_of_year,
      duration: formState.duration,
    };

    const API_URL = "http://127.0.0.1:8000/generate-trips";
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    const response = await axios
      .post(API_URL, data, { headers })
      .catch((error) => {
        console.log("Error in get multiple suggestions:" + error);
        return null;
      });

    console.log(response);
  };

  return (
    <Box p={2}>
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
                <GoogleMaps
                  value={formState?.starting_position}
                  setValue={(v) =>
                    v && onFormStateChange("starting_position", v)
                  }
                />
              </FormControl>
              {/* Period */}
              <Typography variant="h5">{"When are you going?"}</Typography>
              <ToggleButtonGroup
                value={formState?.time_of_year}
                onChange={(_, v) => v && onFormStateChange("time_of_year", v)}
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
                    value={formState?.duration}
                    max={8}
                    min={1}
                    step={1}
                    onChange={(_, v) =>
                      onFormStateChange("duration", v as number)
                    }
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
                        onClick={() => onFormStateChange("climate", c.id)}
                        sx={{
                          width: 1,
                          boxShadow: (theme) => theme.customShadows.z16,
                          bgcolor:
                            formState?.climate == c.id
                              ? "primary.main"
                              : "common.white",
                          color:
                            formState?.climate == c.id
                              ? "common.white"
                              : "text.secondary",
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
                {"What is your preferred activity?"}
              </Typography>
              <div>
                <Grid container spacing={1} sx={{ width: 1 }}>
                  {activityLevels.map((c) => (
                    <Grid key={c.id} item xs={4}>
                      <Button
                        variant="contained"
                        onClick={() => onFormStateChange("activity", c.id)}
                        sx={{
                          width: 1,
                          boxShadow: (theme) => theme.customShadows.z16,
                          bgcolor: formState?.activity.includes(c.id)
                            ? "primary.main"
                            : "common.white",
                          color: formState?.activity.includes(c.id)
                            ? "common.white"
                            : "text.secondary",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          "&:hover": {
                            bgcolor: formState?.activity.includes(c.id)
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
                    value={formState?.budget}
                    max={3000}
                    step={100}
                    onChange={(_, v) =>
                      onFormStateChange("budget", v as [number, number])
                    }
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
    </Box>
  );
};

export default HeaderTravelInput;
