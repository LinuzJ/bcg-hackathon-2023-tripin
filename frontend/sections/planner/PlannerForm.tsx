import { use, useState } from "react";
import { FormStateProps } from ".";
import GoogleMaps from "@/components/GoogleMaps";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Stack,
  FormControl,
  ToggleButtonGroup,
  ToggleButton,
  Box,
  Grid,
  Slider,
  Button,
  CircularProgress,
} from "@mui/material";
import {
  TreePalm,
  Cactus,
  TreeEvergreen,
  AppleLogo,
  Church,
  SneakerMove,
  Mountains,
  Snowflake,
  Bed,
  CaretDown,
  Robot,
  Brain,
} from "@phosphor-icons/react";
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

function formatBudget(value: number) {
  return `€${value}` + (value == 3000 ? "+" : "");
}

function formatDuration(value: number) {
  if (value == 1) {
    return `${value} week`;
  }

  return `${value} weeks`;
}

type PlannerForm = {
  formState: FormStateProps;
  onFormStateChange: (
    key: keyof FormStateProps,
    newValue: FormStateProps[keyof FormStateProps]
  ) => void;
  onSuccess: () => void;
};

const PlannerForm: React.FC<PlannerForm> = ({
  formState,
  onFormStateChange,
  onSuccess,
}) => {
  const [travelInputOpen, setTravelInputOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmission = async () => {
    setTravelInputOpen(false);

    const data = {
      starting_position:
        formState.starting_position.structured_formatting.main_text,
      activity: formState.activity,
      climate: formState.climate,
      budget: formState.budget,
      time_of_year: formState.time_of_year,
      duration: formState.duration + "",
    };

    const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    setIsLoading(true);

    if (API_URL === undefined) {
      console.error("Cannot find API URL");
    }

    const response = await axios
      .post(API_URL as string, data, { headers })
      .then((response) => {
        setIsLoading(false);
        console.log(response);
        return response;
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("Error in get multiple suggestions:" + error);
        return null;
      });

    onSuccess();
  };

  return (
    <>
      <Accordion
        expanded={travelInputOpen && !isLoading}
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
                    valueLabelFormat={formatDuration}
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
                    valueLabelFormat={formatBudget}
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
                {"Start Trip'in"}
              </Button>
            </Stack>
          </Box>
        </AccordionDetails>
      </Accordion>
      {isLoading && (
        <Box
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "50%",
          }}
        >
          <CircularProgress />

          <Typography variant="h3">{"Generating your trip..."}</Typography>
        </Box>
      )}
    </>
  );
};

export default PlannerForm;
