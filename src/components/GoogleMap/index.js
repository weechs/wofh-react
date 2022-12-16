import { useLoadScript } from "@react-google-maps/api";
import Map from "./map.tsx";

export const libraries = String(["places"]);

export default function GoogleMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCGd4BFtFP7jBezyZ1e6tpe6gJHBj2UWb8",
    [libraries]: libraries
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
