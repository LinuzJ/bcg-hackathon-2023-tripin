import { Box, Typography, useTheme } from "@mui/material";

const loadingSteps: string[] = [
  "Quantum Optimization: Initiating the quantum algorithms for optimized dream destinations.",
  "Dimensional Vortex Initialization: Activating the hyperdimensional data vortex.",
  "Quantum Bit Entanglement: Entangling quantum bits to extract personalized vacation paradigms.",
  "Cryptographic Key Generation: Generating cryptographic keys to securely unlock your digital odyssey.",
  "Utilizing Proprietary Generative AI to breach the vacation singularity.",
  "Neural Network Calibration: Calibrating neural networks for real-time travel insights.",
  "Quantum Tunneling Simulation: Simulating quantum tunneling for instant vacation access.",
  "Holographic Terrain Rendering: Rendering holographic terrains for immersive trip previews.",
  "Digital Frontier Approach: Stand by as we approach the digital frontier for your extraordinary journey.",
];

const AnimatedLogo: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 200,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" sx={{ mb: 4 }}>
          {"Trip'in"}
        </Typography>
        <Box
          component="svg"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 64.39 57.7"
          xmlSpace="preserve"
          sx={{
            animation: "spin 4s linear infinite",
            "@keyframes spin": {
              from: {
                transform: "rotate(0deg)",
              },
              to: {
                transform: "rotate(360deg)",
              },
            },

            "& .st0": {
              fill: theme.palette.primary.main,
            },

            "& .st1": {
              stroke: theme.palette.primary.dark,
              strokeWidth: 0.6,
              fill: "transparent",
              strokeDasharray: "100 200 100",
              animation: "fill 3s linear infinite",
              "@keyframes fill": {
                from: {
                  strokeDashoffset: 0,
                  strokeDasharray: "100 200 100 0",
                },
                "50%": {
                  strokeDashoffset: 100,
                  strokeDasharray: "100 50 100 0 ",
                },
                to: {
                  strokeDashoffset: 0,
                  strokeDasharray: "100 200 100 0",
                },
              },
            },
          }}
        >
          <g id="Layer_1">
            <g>
              <g>
                <path
                  className="st0"
                  d="M35.57,57.32c-8.85,0-17.27-4.17-22.52-11.17c-1.67-2.23-3.57-4.53-6.66-6.02
				c-5.15-2.49-7.16-8.16-5.37-15.15c1.55-6.09,5.32-11.14,11.52-15.45c0.64-0.45,1.39-0.9,2.1-0.9c0.86,0,1.45,0.62,1.82,1.91
				c0.45,1.57,0.92,3.13,1.39,4.69c0.96,3.15,1.94,6.41,2.68,9.67c1.89,8.4,0.59,11.72-6.62,16.6c1.22,2.51,3.11,4.71,6.08,7.11
				c1.86,1.5,3.13,2.48,3.87,2.48c0.77,0,1.26-1.33,2.11-4.15c0.99-3.26,3.38-4.92,7.1-4.92c0.21,0,0.41,0,0.62,0.01
				c0.37,0.02,0.73,0.03,1.09,0.03c5,0,7.48-1.94,8.28-6.49c0.47-2.68,2.65-4.21,5.99-4.21c3.84,0.01,6.98,1.62,10.88,3.94
				c0.09-0.52,0.18-1.01,0.27-1.47c0.24-1.26,0.44-2.35,0.56-3.44c0.12-1.06,0.24-2.17-0.23-2.69c-0.24-0.27-0.66-0.41-1.27-0.41
				c-0.28,0-0.61,0.03-0.97,0.09c-0.22,0.04-0.44,0.05-0.65,0.05c-2.64,0-4.67-2.66-6.3-4.8c-1.35-1.78-2.24-2.53-2.96-2.53
				c-0.69,0-1.4,0.68-2.46,1.94l-0.4,0.47c-0.64,0.76-1.12,1.34-1.88,2.16c-2.35,2.56-4.33,3.75-6.24,3.75
				c-1.48,0-2.92-0.73-4.4-2.22c-2.36-2.37-3.7-5.89-3.51-9.18c0.13-2.24,0.99-4.1,2.42-5.24c3.12-2.49,5.8-4.93,4.36-7.42
				c-0.43-0.75-1.14-1.09-2.25-1.09c-1.36,0-3.06,0.55-4.56,1.04c-0.52,0.17-1.03,0.33-1.5,0.47C27.5,4.91,27,5.18,26.52,5.45
				c-0.7,0.39-1.35,0.75-1.97,0.75c-0.61,0-1.06-0.35-1.33-1.04c-0.28-0.69-0.29-1.29-0.03-1.77c0.48-0.91,1.74-1.17,2.85-1.41
				c0.36-0.08,0.7-0.15,0.98-0.24c2.77-0.91,5.64-1.37,8.56-1.37c11.18,0,21.37,6.61,25.95,16.83c5.9,13.15,0.99,28.66-11.4,36.09
				C45.74,55.93,40.7,57.32,35.57,57.32C35.57,57.32,35.58,57.32,35.57,57.32z M33.02,45.24c-2.89,0-4.3,1.7-4.3,5.21
				c0,2.89,2.31,3.31,5.33,3.57c0.48,0.04,0.93,0.08,1.33,0.14c8.82-0.38,15.54-3.77,20.49-10.39c1.97-2.64,2.64-4.17,2.28-5.27
				c-0.35-1.11-1.84-2.01-4.98-3.02c-0.27-0.09-0.56-0.19-0.85-0.29c-1.12-0.39-2.38-0.82-3.46-0.82c-0.9,0-2.16,0.25-2.71,2.46
				c-1.46,5.81-4.9,8.51-10.83,8.51c-0.55,0-1.11-0.02-1.7-0.07C33.42,45.25,33.22,45.24,33.02,45.24z M11.09,20.43
				c0.24,0,0.51,0.06,0.78,0.17c1.33,0.54,0.83,2.03,0.53,2.92l-0.06,0.19c-1.14,3.48-1.39,7.28-0.76,11.62
				c0.03,0.2,0.05,0.42,0.07,0.65c0.1,1.11,0.23,1.85,0.93,1.94c0.05,0.01,0.09,0.01,0.14,0.01c0.62,0,1.54-0.49,2.58-1.39
				c3.41-2.93,2.97-6.98,2.21-10.18c-0.73-3.07-1.69-6.14-2.7-9.39c-0.42-1.34-0.85-2.73-1.29-4.18
				c-5.35,4.51-10.14,9.81-9.76,17.78c0.16,3.47,1.72,5.72,4.77,6.85c-1.02-5.17-0.81-9.96,0.62-14.61l0.05-0.16
				C9.46,21.77,9.87,20.43,11.09,20.43z M40.81,4.2c-0.28,0-0.87,0-1.04,1.35c-0.47,3.7-2.34,6.52-5.7,8.63
				c-1.16,0.72-1.55,2.01-1.31,4.29l0.04,0.16c0.51,2.21,1.15,4.95,3.96,6.19c0.37,0.16,0.71,0.24,1.04,0.24c1.14,0,2-1,2.83-1.96
				c0.19-0.23,0.39-0.45,0.58-0.66c3.47-3.74,5.19-5.59,7.02-5.59c1.89,0,3.63,2,7.1,5.98c0.63,0.72,1.62,1.58,2.74,1.58
				c0.39,0,0.78-0.1,1.17-0.31c1.17-0.62,0.9-1.51,0.33-2.91c-0.08-0.2-0.16-0.39-0.23-0.58c-2.9-7.95-8.52-13.31-16.68-15.93
				l-0.41-0.14C41.76,4.38,41.24,4.2,40.81,4.2z"
                />
                <path
                  className="st1"
                  d="M35.58,0.75c10.74,0,21.01,6.35,25.61,16.61c5.84,13.02,1.02,28.26-11.25,35.61c-4.47,2.68-9.44,3.97-14.36,3.97
				c-8.48,0-16.82-3.84-22.22-11.02c-1.91-2.53-3.77-4.67-6.8-6.14c-5.11-2.47-6.89-8-5.17-14.72c1.68-6.58,5.89-11.42,11.37-15.24
				c0.68-0.48,1.33-0.84,1.88-0.84c0.61,0,1.12,0.44,1.46,1.64c1.36,4.78,2.98,9.5,4.07,14.34c1.91,8.49,0.54,11.52-6.74,16.39
				c1.42,3.08,3.73,5.44,6.32,7.53c2.06,1.66,3.26,2.56,4.11,2.56c1.05,0,1.55-1.38,2.47-4.41c1.05-3.46,3.61-4.65,6.74-4.65
				c0.2,0,0.4,0,0.6,0.01c0.38,0.02,0.75,0.03,1.11,0.03c4.49,0,7.7-1.44,8.65-6.8c0.47-2.69,2.76-3.9,5.62-3.9
				c0.01,0,0.01,0,0.02,0c4.02,0.01,7.32,1.89,11.13,4.16c0.39-2.22,0.75-3.83,0.93-5.46c0.21-1.84,0.36-3.52-1.87-3.52
				c-0.3,0-0.64,0.03-1.03,0.09c-0.2,0.03-0.4,0.05-0.59,0.05c-2.39,0-4.26-2.37-6-4.65c-1.43-1.88-2.38-2.68-3.26-2.68
				c-0.86,0-1.65,0.78-2.75,2.08c-0.86,1.02-1.37,1.64-2.27,2.62c-2.23,2.43-4.15,3.63-5.97,3.63c-1.4,0-2.74-0.71-4.14-2.11
				c-3.93-3.96-4.69-11.02-1.12-13.87c2.74-2.19,6.13-4.98,4.45-7.9c-0.55-0.95-1.47-1.28-2.57-1.28c-1.89,0-4.29,0.99-6.16,1.53
				c-1.14,0.33-2.38,1.41-3.3,1.41c-0.41,0-0.75-0.21-0.99-0.81c-0.99-2.46,2.14-2.45,3.57-2.92C29.92,1.18,32.76,0.75,35.58,0.75
				 M37.81,25.44c1.6,0,2.62-1.59,3.68-2.73c3.37-3.63,5.07-5.47,6.75-5.47c1.72,0,3.4,1.93,6.82,5.85c0.87,0.99,1.9,1.71,3.02,1.71
				c0.44,0,0.89-0.11,1.35-0.35c1.8-0.95,0.77-2.62,0.28-3.95c-2.98-8.16-8.68-13.51-16.91-16.16c-0.64-0.2-1.36-0.51-1.98-0.51
				c-0.69,0-1.25,0.37-1.41,1.67c-0.48,3.73-2.38,6.39-5.52,8.36c-1.36,0.85-1.72,2.36-1.48,4.65c0.52,2.25,1.15,5.3,4.22,6.66
				C37.04,25.36,37.44,25.44,37.81,25.44 M9.02,37.98C7.88,32.66,8.01,27.75,9.5,22.92c0.27-0.87,0.58-2.11,1.59-2.11
				c0.19,0,0.4,0.04,0.64,0.14c1.08,0.44,0.55,1.73,0.25,2.65c-1.27,3.87-1.35,7.81-0.77,11.79c0.16,1.13,0.05,2.73,1.32,2.91
				c0.06,0.01,0.13,0.01,0.19,0.01c0.9,0,2.04-0.8,2.82-1.48c3.37-2.9,3.23-6.78,2.33-10.55c-1.06-4.49-2.59-8.87-4.17-14.14
				C7.42,17.36,3.01,22.7,3.38,30.58C3.54,33.97,5.05,36.76,9.02,37.98 M35.32,44.96c-0.54,0-1.1-0.02-1.67-0.06
				c-0.22-0.02-0.43-0.02-0.63-0.02c-3.49,0-4.68,2.35-4.68,5.58c0,4.13,4.62,3.72,6.98,4.07c8.84-0.37,15.75-3.72,20.85-10.53
				c3.85-5.14,3.35-6.86-2.88-8.88c-1.35-0.44-3-1.13-4.43-1.13c-1.37,0-2.55,0.64-3.08,2.75C44.25,42.83,40.61,44.96,35.32,44.96
				 M35.58,0c-2.95,0-5.87,0.47-8.68,1.39c-0.25,0.08-0.58,0.15-0.94,0.23c-1.13,0.24-2.54,0.54-3.1,1.6
				C22.54,3.8,22.55,4.5,22.87,5.3c0.42,1.06,1.15,1.28,1.68,1.28c0.71,0,1.41-0.39,2.15-0.8c0.46-0.26,0.94-0.52,1.36-0.64
				c0.48-0.14,0.99-0.3,1.51-0.47c1.47-0.48,3.14-1.02,4.44-1.02c1.25,0,1.7,0.52,1.92,0.91c1.29,2.24-1.28,4.56-4.27,6.94
				c-1.52,1.21-2.42,3.17-2.56,5.51c-0.2,3.4,1.19,7.02,3.62,9.47c1.56,1.57,3.08,2.33,4.67,2.33c2.02,0,4.09-1.23,6.52-3.87
				c0.76-0.83,1.26-1.42,1.89-2.17l0.4-0.47c0.94-1.12,1.63-1.81,2.17-1.81c0.76,0,1.88,1.36,2.66,2.39
				c1.68,2.21,3.77,4.95,6.6,4.95c0.24,0,0.48-0.02,0.71-0.06c0.34-0.06,0.65-0.08,0.91-0.08c0.49,0,0.83,0.09,0.99,0.28
				c0.36,0.4,0.24,1.51,0.14,2.4c-0.12,1.07-0.32,2.15-0.56,3.4c-0.06,0.3-0.12,0.62-0.18,0.95c-3.74-2.2-6.82-3.71-10.58-3.71
				c-3.51,0-5.88,1.69-6.38,4.52c-0.77,4.39-3.06,6.18-7.91,6.18c-0.35,0-0.71-0.01-1.07-0.03c-0.22-0.01-0.43-0.01-0.64-0.01
				c-3.9,0-6.41,1.74-7.46,5.18c-0.52,1.73-1.18,3.88-1.75,3.88c-0.66,0-2.31-1.33-3.64-2.39c-2.81-2.27-4.64-4.35-5.84-6.69
				c7.14-4.9,8.42-8.32,6.51-16.81c-0.74-3.28-1.73-6.54-2.68-9.7c-0.47-1.53-0.95-3.12-1.39-4.69c-0.41-1.45-1.14-2.18-2.18-2.18
				c-0.81,0-1.62,0.49-2.31,0.97C6.05,13.58,2.23,18.7,0.65,24.88c-1.83,7.18,0.25,13.01,5.57,15.58c2.73,1.32,4.46,3.17,6.52,5.91
				c5.33,7.09,13.86,11.32,22.82,11.32c5.2,0,10.3-1.41,14.75-4.08c12.56-7.52,17.52-23.24,11.55-36.56C57.23,6.7,46.9,0,35.58,0
				L35.58,0z M33.13,18.39c-0.21-2.09,0.13-3.26,1.14-3.89c3.46-2.17,5.38-5.08,5.87-8.9c0.13-1.02,0.45-1.02,0.67-1.02
				c0.37,0,0.86,0.17,1.34,0.33c0.14,0.05,0.28,0.1,0.42,0.14c8.05,2.58,13.58,7.87,16.44,15.7c0.07,0.19,0.15,0.39,0.23,0.59
				c0.61,1.49,0.66,2-0.16,2.43c-0.34,0.18-0.66,0.26-1,0.26c-0.98,0-1.88-0.79-2.46-1.45c-3.55-4.06-5.33-6.1-7.39-6.1
				c-2,0-3.75,1.89-7.25,5.67l-0.04,0.04c-0.2,0.21-0.39,0.44-0.59,0.67c-0.81,0.94-1.57,1.83-2.54,1.83
				c-0.28,0-0.57-0.07-0.89-0.21c-2.64-1.16-3.25-3.81-3.75-5.93L33.13,18.39L33.13,18.39z M8.02,36.8c-2.47-1.14-3.75-3.2-3.9-6.25
				c-0.36-7.59,4.1-12.74,9.19-17.11c0.38,1.26,0.76,2.47,1.13,3.64c1.01,3.25,1.97,6.31,2.7,9.37c1.11,4.67,0.48,7.6-2.09,9.81
				c-0.94,0.81-1.82,1.3-2.33,1.3c-0.03,0-0.06,0-0.09-0.01c-0.36-0.05-0.49-0.39-0.6-1.61c-0.02-0.23-0.04-0.45-0.07-0.66
				c-0.62-4.29-0.38-8.03,0.75-11.45l0.06-0.19c0.3-0.88,0.91-2.71-0.75-3.39c-0.32-0.13-0.63-0.2-0.93-0.2
				c-1.5,0-1.98,1.56-2.26,2.49L8.78,22.7C7.39,27.2,7.14,31.82,8.02,36.8L8.02,36.8z M35.32,45.71c6.13,0,9.68-2.79,11.19-8.79
				c0.48-1.92,1.46-2.18,2.35-2.18c1.02,0,2.25,0.43,3.34,0.8c0.3,0.1,0.58,0.2,0.86,0.29c3.01,0.97,4.42,1.8,4.73,2.78
				c0.31,0.96-0.36,2.44-2.23,4.93c-4.87,6.5-11.48,9.85-20.21,10.23c-0.39-0.06-0.82-0.09-1.28-0.13
				c-2.92-0.25-4.99-0.62-4.99-3.19c0-4.33,2.24-4.83,3.93-4.83c0.18,0,0.38,0.01,0.57,0.02C34.2,45.68,34.78,45.71,35.32,45.71
				L35.32,45.71z"
                />
              </g>
            </g>
          </g>
          <g id="Layer_2"></g>
        </Box>
        <Typography variant="body1" mt={3}>
          {/* {loadingSteps[Math.floor(Math.random() * loadingSteps.length)]} */}
          Utilizing proprietary generative AI to breach the vacation singularity
        </Typography>
      </Box>
    </Box>
  );
};

export default AnimatedLogo;
