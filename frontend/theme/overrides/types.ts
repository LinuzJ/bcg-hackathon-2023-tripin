/* https://mui.com/material-ui/about-the-lab/#typescript */
import { Theme } from "@mui/material";

export type ComponentOverride = (theme: Theme) => Theme["components"];
