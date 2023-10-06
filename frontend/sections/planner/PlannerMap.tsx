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
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { ListBullets, MapPin, MapPinLine } from "@phosphor-icons/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import photoGenerator from "@/api/photo";
import imageGenerator from "@/api/photo";

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
    itinerary: [
      {
        id: 0,
        title: "Cologne Cathedral",
        coordinates: [50.941357, 6.958307],
        description:
          "Visit the iconic Cologne Cathedral (Kölner Dom), which is free to enter but consider a small donation.",
        image:
          "https://i.guim.co.uk/img/media/82f98ba14fde31d4605f541794e5456e11201644/379_271_5327_3196/master/5327.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=5a75229ff2184a9e8f1b68f2ce20dbf0",
        carbonLevel: 0,
      },
      {
        id: 1,
        title: "Rhine River",
        coordinates: [50.938491, 6.959456],
        description: "Stroll along the Rhine River and enjoy the scenic views.",
        image:
          "https://www.planetware.com/photos-large/D/cologne-germany-cologne-cathedral-and-rhine-river.jpg",
        carbonLevel: 0,
      },
    ],
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
  const [activeLocation, setActiveLocation] = useState<number>(0);
  const [isViewingItinerary, setIsViewingItinerary] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      const photoArray = await Promise.all(
        dummyData.map(async (data) => {
          return await imageGenerator(data.title);
        })
      );
      setPhotos(photoArray.map((photo) => photo ?? ""));
    };
    getPhotos();
  });

  const handleActiveLocationChange = (data: any) => {
    setActiveLocation(data.id);
    setCenter([data.coordinates[1], data.coordinates[0]]);
    if (document) {
      document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewItinerary = () => {
    setIsViewingItinerary(!isViewingItinerary);
  };

  return (
    <>
      <MapProvider>
        <Map height={isViewingItinerary ? "0" : "50vh"} center={center} />
      </MapProvider>
      <Box
        sx={{
          width: "100vw",
          bgcolor: "background.paper",
          bottom: 0,
          left: 0,
          p: 2,
        }}
      >
        <LayoutGroup>
          {isViewingItinerary ? (
            <Box sx={{ height: 1, textAlign: "center", mb: 2 }}>
              <Button
                onClick={handleViewItinerary}
                variant="contained"
                color="inherit"
              >
                View all suggestions
              </Button>
            </Box>
          ) : (
            <Typography mb={2} variant="h3">
              Travel Suggestions
            </Typography>
          )}
          {dummyData
            .sort((data) => (data.id == activeLocation ? -1 : 1))
            .slice(0, isViewingItinerary ? 1 : 3)
            .map((data, i) => (
              <motion.div layout key={data.id}>
                <Card
                  sx={{
                    mb: 2,
                    ...(isViewingItinerary && { mx: -2 }),
                  }}
                >
                  <CardActionArea
                    onClick={() => handleActiveLocationChange(data)}
                    sx={{
                      display: "flex",
                      position: "relative",
                      flexDirection: isViewingItinerary ? "column" : "row",
                      height: isViewingItinerary ? "auto" : 100,
                      alignItems: "stretch",
                      ...(data.id == activeLocation && {
                        // border: "2px solid",
                        borderColor: "primary.main",
                      }),
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: isViewingItinerary ? "row" : "column",
                        ...(!isViewingItinerary && { flexGrow: 1 }),
                      }}
                    >
                      <Stack
                        sx={{
                          py: 1,
                          px: 2,
                          height: 1,
                          justifyContent: "space-between",
                          flexDirection: "column",
                        }}
                      >
                        <Typography variant="h5">{data.title}</Typography>
                        <Typography
                          variant="caption"
                          component={"div"}
                          sx={{
                            ...(data.carbonLevel == 0
                              ? { color: "success.dark" }
                              : { color: "warning.dark" }),
                          }}
                        >
                          {data.carbonLevel == 0 ? "Low" : "Medium"} Carbon
                          Footprint
                        </Typography>
                      </Stack>
                    </Box>
                    <CardMedia>
                      <Box
                        component="img"
                        sx={{
                          width: isViewingItinerary ? 1 : 150,
                          height: isViewingItinerary ? 200 : 1,
                          objectFit: "cover",
                        }}
                        src={photos[i]}
                      />
                    </CardMedia>
                    <Box>
                      <List>
                        {isViewingItinerary &&
                          data.itinerary?.map((item, i) => (
                            <ListItem key={i}>
                              {i + 1}. {item.description}
                            </ListItem>
                          ))}
                      </List>
                    </Box>
                  </CardActionArea>
                  {data.id == activeLocation && !isViewingItinerary && (
                    <Button
                      onClick={handleViewItinerary}
                      fullWidth
                      variant="contained"
                      color="primary"
                      sx={{
                        borderRadius: 0,
                        // bgcolor: "grey.900",
                        "&:hover": {
                          // bgcolor: "grey.800",
                        },
                      }}
                      endIcon={<ListBullets />}
                    >
                      View Itinerary
                    </Button>
                  )}
                </Card>
              </motion.div>
            ))}
        </LayoutGroup>
      </Box>
    </>
  );
};

const Map: React.FC<{ center: LngLatLike; height: string }> = ({
  center,
  height,
}) => {
  const { map } = useMap();

  useEffect(() => {
    map?.flyTo({ center: center, zoom: 6 });
  }, [center, map]);

  return (
    <GLMap
      // @ts-ignore
      controller={true}
      style={{ height: height }}
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
