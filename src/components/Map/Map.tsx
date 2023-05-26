"use client";
import { useListing } from "@/store/ListingStore";
import { findCenterPoint } from "@/utils/findCenterPoint";
import { useEffect, useState } from "react";
import MapGl, { Marker, Popup } from "react-map-gl";

type Props = {
  zoomLevel?: number;
};

const Map = ({ zoomLevel = 8 }: Props) => {
  const exemp = [
    { latitude: 40.7128, longitude: -74.006 }, // New York City
    { latitude: 51.5074, longitude: -0.1278 }, // London
    { latitude: 48.8566, longitude: 2.3522 }, // Paris
    { latitude: 35.6895, longitude: 139.6917 }, // Tokyo
    { latitude: -33.8651, longitude: 151.2094 }, // Sydney
  ];
  const { selectedLatLng } = useListing();

  const center = findCenterPoint(exemp);
  const [viewport, setViewport] = useState({
    zoom: zoomLevel,
  });

  useEffect(() => {
    if (!selectedLatLng.length) return;
    setViewport((prev) => {
      return {
        ...prev,
        latitude: selectedLatLng[0],
        longitude: selectedLatLng[1],
      };
    });
  }, [selectedLatLng[0], selectedLatLng[1]]);

  return (
    <>
      <MapGl
        {...viewport}
        initialViewState={{
          latitude: 51.5074,
          longitude: -0.1278,
        }}
        style={{ position: "absolute", inset: 0, overflow: "hidden" }}
        mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        onMove={(ev) => setViewport(ev.viewState)}
        onLoad={(ev) => console.log(ev)}
      ></MapGl>
    </>
  );
};

export default Map;
