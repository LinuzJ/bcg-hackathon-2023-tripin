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

const dummyData = [
  {
    id: 0,
    title: "Cologne",
    coordinates: [50.935173, 6.953101],
    description:
      "Take a train (around 45 minutes) to Cologne. You can find affordable train tickets for about 20-30 euros round trip. Visit the iconic Cologne Cathedral (Kölner Dom), which is free to enter but consider a small donation. Stroll along the Rhine River and enjoy the scenic views.",
    image:
      "https://i.guim.co.uk/img/media/82f98ba14fde31d4605f541794e5456e11201644/379_271_5327_3196/master/5327.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=5a75229ff2184a9e8f1b68f2ce20dbf0",
    carbonLevel: 0,
  },
  {
    id: 1,
    title: "Day Trip to Duisburg",
    coordinates: [51.435146, 6.762692],
    description:
      "Take a short train ride (around 20 minutes) to Duisburg, which is known for its industrial heritage. Visit Landschaftspark Duisburg-Nord, a former industrial site turned into a public park and cultural center. Entrance is free, but you may want to budget for a guided tour if interested.",
    image:
      "https://duisburg-travel-stories.de/wp-content/uploads/2022/07/fotospot_header-1200x675.jpg",
    carbonLevel: 0,
  },
  {
    id: 2,
    title: "Barcelona",
    coordinates: [41.390205, 2.154007],
    description:
      "Arrive in Barcelona and check into your accommodation. Look for budget-friendly hostels or guesthouses in areas like El Raval or Poble Sec. Start your day with a visit to the famous La Boqueria Market, where you can sample local food and buy fresh produce for a picnic later.",
    image:
      "https://a.cdn-hotels.com/gdcs/production81/d1983/1441d9b5-d0e6-4230-9923-646d58ba66d8.jpg",
    carbonLevel: 1,
  },
];

const PlannerMap: React.FC = () => {
  const [center, setCenter] = useState<LngLatLike>([6.953101, 50.935173]);

  const [activeLocation, setActiveLocation] = useState<number | null>(null);

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
          {dummyData.map((data) => (
            <Card key={data.id}>
              <CardActionArea
                onClick={() =>
                  setCenter([data.coordinates[1], data.coordinates[0]])
                }
                sx={{
                  display: "flex",
                  position: "relative",
                  alignItems: "stretch",
                  // border: "2px solid",
                  borderColor: "primary.main",
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
                >
                  <CardHeader title={data.title} sx={{ py: 1, px: 2 }} />
                  <CardContent sx={{ py: 1, px: 2 }}>
                    <Typography
                      variant="caption"
                      component={"div"}
                      sx={{
                        mb: 1,
                        ...(data.carbonLevel == 0
                          ? { color: "success.dark" }
                          : { color: "warning.dark" }),
                      }}
                    >
                      {data.carbonLevel == 0 ? "Low" : "Medium"} Carbon
                      Footprint
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ lineClamp: 4, boxOrient: "vertical" }}
                    >
                      {data.description.slice(0, 50)}...
                    </Typography>
                  </CardContent>
                </Box>
                <CardMedia>
                  <Box
                    component="img"
                    sx={{ width: 150, height: 1 }}
                    src={data.image}
                  />
                </CardMedia>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
      </Box>
    </>
  );
};

const Map: React.FC<{ center: LngLatLike }> = ({ center }) => {
  const { map } = useMap();

  useEffect(() => {
    map?.flyTo({ center: center, zoom: 6 });
  }, [center, map]);

  return (
    <GLMap
      // @ts-ignore
      controller={true}
      style={{ height: "50vh" }}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API}
      id="map"
      mapStyle="mapbox://styles/mapbox/light-v11"
    >
      {dummyData.map((data) => (
        <Marker
          key={data.id}
          longitude={data.coordinates[1]}
          latitude={data.coordinates[0]}
        >
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
      ))}
    </GLMap>
  );
};

export default PlannerMap;
