import { useState, useMemo, useCallback, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer
} from "@react-google-maps/api";

import Places from "./places";
import Distance from "./distance";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

const containerStyle = {
  width: "100vw",
  height: "100vh"
};

export const associates = [
  {
    name: "Wheel of Health Limited",
    loc: "lat: 50.946803, lng: -1.3934312"
  }
];

export default function Map() {
  const [office, setOffice] = useState<LatLngLiteral>();
  const GB = {
    lat: 54.00366,
    lng: -2.547855
  };

  const wofh = {
    lat: 50.946803,
    lng: -1.3934312
  };
  const SR = {
    lat: 50.964948,
    lng: 0.256191
  };
  const CA = {
    lat: 53.464071,
    lng: -2.131452
  };
  const DB = {
    lat: 51.5022355,
    lng: -3.240155
  };
  const LL = {
    lat: 52.4973284,
    lng: -1.933842
  };
  const JT = {
    lat: 51.5308759,
    lng: -0.1302738
  };
  const TC = {
    lat: 51.2093233,
    lng: -0.8230901
  };
  const CE = {
    lat: 51.4273455,
    lng: -0.2414023
  };
  const RG = {
    lat: 51.5918113,
    lng: 0.1846313
  };
  const AJ = {
    lat: 54.6727378,
    lng: -1.2428304
  };
  const JM = {
    lat: 52.1965088,
    lng: -2.2453584
  };
  const CM = {
    lat: 50.8399049,
    lng: -0.1967285
  };
  const AM = {
    lat: 51.6895306,
    lng: -0.3153745
  };
  const LO = {
    lat: 51.829243,
    lng: -0.0416263
  };
  const VO = {
    lat: 52.6722117,
    lng: -1.0833025
  };
  const JR = {
    lat: 51.5817552,
    lng: -1.517462
  };
  const VT = {
    lat: 52.3786267,
    lng: -0.7060027
  };
  const EW = {
    lat: 50.6608396,
    lng: -3.300652
  };
  const SX = {
    lat: 51.5775513,
    lng: -0.3693732
  };
  const MM = {
    lat: 53.39455,
    lng: -7.718726
  };
  const mapRef = useRef<GoogleMap>();
  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 54.00366, lng: -2.547855 }),
    []
  );
  const options = useMemo<MapOptions>(
    () => ({
      mapId: "d2f54d8ae91809da",
      disableDefaultUI: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      clickableIcons: false
    }),
    []
  );
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  return (
    <>
      {/* <Places
            setOffice={(position) => {
              setOffice(position);
              mapRef.current?.panTo(position);
            }}
          /> */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5.6}
        options={options}
        onLoad={onLoad}
      >
        <Marker position={wofh} />
        <Marker position={CA} />
        <Marker position={LL} />
        <Marker position={SR} />
        <Marker position={DB} />
        <Marker position={JT} />
        <Marker position={TC} />
        <Marker position={CE} />
        <Marker position={RG} />
        <Marker position={AJ} />
        <Marker position={JM} />
        <Marker position={CM} />
        <Marker position={AM} />
        <Marker position={LO} />
        <Marker position={VO} />
        <Marker position={JR} />
        <Marker position={VT} />
        <Marker position={EW} />
        <Marker position={SX} />
        <Marker position={MM} />
      </GoogleMap>
    </>
  );
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A"
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D"
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252"
};

const generateHouses = (position: LatLngLiteral) => {
  const _houses: Array<LatLngLiteral> = [];
  for (let i = 0; i < 100; i++) {
    const direction = Math.random() < 0.5 ? -2 : 2;
    _houses.push({
      lat: position.lat + Math.random() / direction,
      lng: position.lng + Math.random() / direction
    });
  }
  return _houses;
};
