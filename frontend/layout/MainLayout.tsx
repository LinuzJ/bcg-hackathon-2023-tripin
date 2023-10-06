import Logo from "@/components/Logo";
import { useTheme } from "@emotion/react";
import { Box, Typography, colors } from "@mui/material";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      {/* Header */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logo
          // @ts-ignore
          color={theme.palette.primary.main}
          sx={{ height: 40, width: 40, mr: 1.5 }}
        />
        <Typography variant="h3">{"Trip'in"}</Typography>
      </Box>
      {/* Content */}
      <Box>{children}</Box>
    </>
  );
};

export default MainLayout;
