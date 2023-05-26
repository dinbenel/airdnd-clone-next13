type Locaition = {
  latitude: number;
  longitude: number;
};
export function findCenterPoint(locations: Locaition[]) {
  // Extract latitude and longitude values into separate arrays
  const latitudes = locations.map((location) => location.latitude);
  const longitudes = locations.map((location) => location.longitude);

  // Calculate the average latitude and longitude values
  const averageLatitude =
    latitudes.reduce((sum, latitude) => sum + latitude, 0) / latitudes.length;
  const averageLongitude =
    longitudes.reduce((sum, longitude) => sum + longitude, 0) /
    longitudes.length;

  return { latitude: averageLatitude, longitude: averageLongitude };
}
