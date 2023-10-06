import GLMap, { Marker, MapProvider, useMap, LngLatLike } from "react-map-gl";
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
import React, { useEffect, useRef, useState } from "react";

const API_KEY =
  "pk.eyJ1IjoibWF0cmFhIiwiYSI6ImNreGMweHUwNjB0OGsycG83d3B3N2d4N2kifQ.sn_yCa6tkatkbAs_QSQxLQ";

const ResultSection: React.FC = () => {
  const mapRef = useRef();

  // useEffect(() => {
  //   const map = new mapboxgl.Map({
  //     container: mapContainerRef.current,
  //     style: "mapbox://styles/lmaps/ckl6t1boq578819qod5v7ynby",
  //     center: markerLngLat,
  //     zoom: 13,
  //   });

  //   setMap(map);
  // }, []);

  const [center, setCenter] = useState<LngLatLike>([100, 50]);

  return (
    <>
      <MapProvider>
        <Map center={center} />
      </MapProvider>
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
              onClick={() => setCenter([100, 50])}
              sx={{
                display: "flex",
                position: "relative",
                alignItems: "stretch",
                border: "2px solid",
                borderColor: "primary.main",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <CardHeader title="Düsseldorf" sx={{ py: 1, px: 2 }} />
                <CardContent sx={{ py: 1, px: 2 }}>
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

const Map: React.FC<{ center: LngLatLike }> = ({ center }) => {
  const { map } = useMap();

  useEffect(() => {
    map?.flyTo({ center: center });
  }, [center, map]);

  return (
    <GLMap
      // @ts-ignore
      controller={true}
      style={{ height: "50vh" }}
      mapboxAccessToken={API_KEY}
      id="map"
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
  );
};

export default ResultSection;
