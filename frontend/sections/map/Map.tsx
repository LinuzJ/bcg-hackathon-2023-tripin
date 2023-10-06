import GLMap, { Marker } from "react-map-gl";
import { HexagonLayer } from "@deck.gl/aggregation-layers/typed";
import DeckGL from "@deck.gl/react/typed";
import "mapbox-gl/dist/mapbox-gl.css";

import {
  lightingEffect,
  material,
  INITIAL_VIEW_STATE,
  colorRange,
} from "./mapConfig";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { MapPin, MapPinLine } from "@phosphor-icons/react";
import Image from "next/image";

const API_KEY =
  "pk.eyJ1IjoibWF0cmFhIiwiYSI6ImNreGMweHUwNjB0OGsycG83d3B3N2d4N2kifQ.sn_yCa6tkatkbAs_QSQxLQ";

const Map: React.FC = () => {
  return (
    <>
      <DeckGL
        effects={[lightingEffect]}
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        style={{ height: "50vh", position: "relative" }}
      >
        <GLMap
          className=""
          controller={true}
          mapboxAccessToken={API_KEY}
          mapStyle="mapbox://styles/mapbox/light-v11"
        >
          {true && (
            <Marker longitude={100} latitude={50}>
              <Box
                sx={{
                  width: 0,
                  height: 0,
                  "& span": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxSizing: "border-box",
                    width: 30,
                    height: 30,
                    color: "error.main",
                    borderRadius: "50%",
                    cursor: "pointer",
                    transformOrigin: "0 0",
                    transform: "translate(-50%, -30px)",
                  },
                }}
              >
                <span>
                  <MapPin weight="fill" size={30} />
                </span>
              </Box>
            </Marker>
          )}
        </GLMap>
      </DeckGL>
      <Box
        sx={{
          width: "100vw",
          bgcolor: "background.paper",
          bottom: 0,
          left: 0,
          boxShadow: (theme) => theme.customShadows.z24,
          p: 2,
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h3">Travel Suggestions</Typography>
          <Card>
            <CardActionArea
              sx={{
                display: "flex",
                position: "relative",
                alignItems: "stretch",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <CardHeader title="Düsseldorf" />
                <CardContent>
                  <Typography variant="body1">Hei</Typography>
                </CardContent>
              </Box>
              <CardMedia>
                <Box
                  component="img"
                  sx={{ width: 150, height: 1 }}
                  src="https://a.cdn-hotels.com/gdcs/production61/d1121/6dfd3cfe-d31b-4514-b3af-aee8536223d1.jpg?impolicy=fcrop&w=800&h=533&q=medium"
                />
              </CardMedia>
            </CardActionArea>
          </Card>
          <Card>
            <CardActionArea
              sx={{
                display: "flex",
                position: "relative",
                alignItems: "stretch",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <CardHeader title="Düsseldorf" />
                <CardContent>
                  <Typography variant="body1">Hei</Typography>
                </CardContent>
              </Box>
              <CardMedia>
                <Box
                  component="img"
                  sx={{ width: 150, height: 1 }}
                  src="https://a.cdn-hotels.com/gdcs/production61/d1121/6dfd3cfe-d31b-4514-b3af-aee8536223d1.jpg?impolicy=fcrop&w=800&h=533&q=medium"
                />
              </CardMedia>
            </CardActionArea>
          </Card>
          <Card>
            <CardActionArea
              sx={{
                display: "flex",
                position: "relative",
                alignItems: "stretch",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <CardHeader title="Düsseldorf" />
                <CardContent>
                  <Typography variant="body1">Hei</Typography>
                </CardContent>
              </Box>
              <CardMedia>
                <Box
                  component="img"
                  sx={{ width: 150, height: 1 }}
                  src="https://a.cdn-hotels.com/gdcs/production61/d1121/6dfd3cfe-d31b-4514-b3af-aee8536223d1.jpg?impolicy=fcrop&w=800&h=533&q=medium"
                />
              </CardMedia>
            </CardActionArea>
          </Card>
        </Stack>
      </Box>
    </>
  );
};

export default Map;
