import Illustration from "@/components/Illustration";
import { Box, Stack, useTheme } from "@mui/material";

const Hero: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ height: "100vh", width: "100vw", bgcolor: "grey.900" }}>
      <Stack direction="column">
        <Illustration color={theme.palette.primary.main} />
      </Stack>
    </Box>
  );
};

export default Hero;
