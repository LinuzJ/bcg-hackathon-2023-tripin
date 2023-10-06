import { Box, SxProps } from "@mui/material";

const Logo: React.FC<{ color: string } & SxProps> = ({ color, sx }) => {
  return (
    <Box
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="-10 0 75 56.2"
      component="svg"
      sx={{
        "& .st0": {
          fill: color,
          strokeWidth: 3,
          stroke: color,
        },
        "& .st1": {
          fill: "white",
        },
        "& .st2": {
          fill: "white",
        },
        ...sx,
      }}
    >
      <g id="Layer_1">
        <g>
          <path
            className="st0"
            d="M59.45,35.15c0.39-2.22,0.75-3.83,0.93-5.46c0.23-2.08,0.4-3.96-2.9-3.42c-2.67,0.44-4.71-2.14-6.6-4.61
			c-2.83-3.72-3.79-3.23-6.01-0.61c-0.86,1.02-1.37,1.64-2.27,2.62c-3.96,4.3-6.9,4.74-10.1,1.52c-3.93-3.96-4.69-11.02-1.12-13.87
			c2.74-2.19,6.13-4.98,4.45-7.9c-1.49-2.58-5.78-0.61-8.73,0.25c-1.64,0.47-3.51,2.25-4.28,0.6c-1.12-2.4,2.14-2.45,3.57-2.92
			c13.43-4.4,28.25,2.31,34.05,15.27c5.84,13.02,1.02,28.26-11.25,35.61c-12.17,7.29-28.05,4.3-36.59-7.05
			c-1.91-2.53-3.77-4.67-6.8-6.14c-5.11-2.47-6.89-8-5.17-14.72C2.32,17.74,6.52,12.9,12.01,9.08c1.44-1,2.69-1.49,3.34,0.8
			c1.36,4.78,2.98,9.5,4.07,14.34c1.91,8.49,0.54,11.52-6.74,16.39c1.42,3.08,3.73,5.44,6.32,7.53c4.61,3.72,4.91,3.62,6.58-1.85
			c1.12-3.68,3.94-4.79,7.34-4.64c5.06,0.23,8.73-0.98,9.75-6.77c0.48-2.7,2.77-3.91,5.64-3.9C52.34,30.99,55.64,32.87,59.45,35.15z
			"
          />
          <path
            className="st1"
            d="M31.64,17.76c-0.24-2.29,0.12-3.8,1.48-4.65c3.14-1.97,5.05-4.63,5.52-8.36c0.32-2.47,2.05-1.6,3.4-1.16
			c8.24,2.65,13.93,8,16.91,16.16c0.48,1.32,1.52,2.99-0.28,3.95c-1.64,0.87-3.17,0.02-4.37-1.36c-6.76-7.74-6.75-7.72-13.57-0.37
			c-1.3,1.4-2.54,3.49-4.88,2.46C32.79,23.06,32.17,20.01,31.64,17.76z"
          />
          <path
            className="st1"
            d="M34.58,53.78c-2.36-0.36-6.98,0.06-6.98-4.07c0-3.42,1.33-5.85,5.3-5.56c6.19,0.46,10.44-1.44,12.14-8.16
			c1.09-4.31,4.86-2.47,7.51-1.62c6.23,2.01,6.72,3.74,2.88,8.88C50.33,50.05,43.42,53.4,34.58,53.78z"
          />
          <path
            className="st2"
            d="M12.97,11.38c1.58,5.27,3.1,9.65,4.17,14.14c0.89,3.77,1.04,7.66-2.33,10.55c-0.84,0.72-2.08,1.59-3.01,1.46
			c-1.27-0.17-1.15-1.78-1.32-2.91c-0.58-3.99-0.49-7.92,0.77-11.79c0.3-0.92,0.83-2.21-0.25-2.65c-1.53-0.62-1.91,0.94-2.23,1.97
			C7.27,27,7.13,31.91,8.27,37.23c-3.97-1.21-5.48-4.01-5.64-7.39C2.27,21.95,6.67,16.61,12.97,11.38z"
          />
          <path
            className="st1"
            d="M55.43,43.24c-5.1,6.81-12.01,10.16-20.85,10.53c-2.34-0.09-6.98,0.06-6.98-4.07"
          />
        </g>
      </g>
      <g id="Layer_2"></g>
    </Box>
  );
};

export default Logo;
