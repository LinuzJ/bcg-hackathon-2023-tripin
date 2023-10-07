"use client";

import { PlaceType } from "@/components/GoogleMaps";
import { Alert, Box } from "@mui/material";
import { useState } from "react";
import PlannerForm from "./PlannerForm";
import PlannerMap from "./PlannerMap";
import { error } from "console";

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
    budget: [0, 1200],
    time_of_year: "winter",
    duration: 2,
  });

  const [loading, setIsLoading] = useState(false);

  const [formStep, setFormStep] = useState(0);
  const [showError, setShowError] = useState(false);

  const onFormStateChange = (
    key: keyof FormStateProps,
    newValue: FormStateProps[keyof FormStateProps]
  ) => {
    const updatedFormState = { ...formState } as FormStateProps;
    setShowError(false);

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

  const [data, setData] = useState(null);

  const onFormSuccess = (data: any) => {
    if (data == "error" && !data) {
      setShowError(true);
      return;
    }
    setFormStep(1);
    setData(data);
  };

  return (
    <>
      <Box px={2}>
        <PlannerForm
          formState={formState}
          onFormStateChange={onFormStateChange}
          onSuccess={onFormSuccess}
          isLoading={loading}
          setIsLoading={setIsLoading}
        />
      </Box>

      {showError && (
        <Alert severity="warning">
          {"Oops! We trip'd out of bounds, please try again."}
        </Alert>
      )}

      {data && !loading && <PlannerMap formState={formState} data={data} />}
    </>
  );
};

export default HeaderTravelInput;
