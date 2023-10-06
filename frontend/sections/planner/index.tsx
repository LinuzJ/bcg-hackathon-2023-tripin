"use client";

import { PlaceType } from "@/components/GoogleMaps";
import { Box } from "@mui/material";
import { useState } from "react";
import PlannerForm from "./PlannerForm";
import PlannerMap from "./PlannerMap";

export interface FormStateProps {
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
    budget: [0, 300],
    time_of_year: "winter",
    duration: 2,
  });

  const [formStep, setFormStep] = useState(0);

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

  const onFormSuccess = () => {
    setFormStep(1);
  };

  return (
    <>
      <Box p={2}>
        {formStep == 0 && (
          <PlannerForm
            formState={formState}
            onFormStateChange={onFormStateChange}
            onSuccess={onFormSuccess}
          />
        )}
        {/* {!travelInputOpen && (
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
        )} */}
      </Box>
      {formStep == 1 && <PlannerMap />}
    </>
  );
};

export default HeaderTravelInput;
