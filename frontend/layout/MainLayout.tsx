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
        id="top"
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid",
          borderColor: "divider",
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
      <Box sx={{ maxWidth: 400, margin: "0 auto" }}>{children}</Box>
    </>
  );
};

export default MainLayout;
