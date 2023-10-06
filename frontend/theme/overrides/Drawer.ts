import { alpha } from "@mui/material/styles";
import { ComponentOverride } from "./types";

const Drawer: ComponentOverride = (theme) => {
  const lightMode = theme.palette.mode === "light";

  return {
    MuiDrawer: {
      styleOverrides: {
        modal: {
          '&[role="presentation"]': {
            "& .MuiDrawer-paperAnchorLeft": {
              boxShadow: `8px 24px 24px 12px ${alpha(theme.palette.grey[900], lightMode ? 0.16 : 0.48)}`,
            },
            "& .MuiDrawer-paperAnchorRight": {
              boxShadow: `-8px 24px 24px 12px ${alpha(theme.palette.grey[900], lightMode ? 0.16 : 0.48)}`,
            },
          },
        },
      },
    },
  };
};

export default Drawer;
