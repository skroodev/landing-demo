"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import siteConfig from "@/lib/config";

export default function MapComponent() {
  useEffect(() => {
    // Fix leaflet marker icons
    const defaultIcon = L.icon({
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    L.Marker.prototype.setIcon(defaultIcon);
  }, []);

  const position: [number, number] = [siteConfig.maps.latitude, siteConfig.maps.longitude];

  const defaultIcon = L.icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer
      center={position}
      zoom={siteConfig.maps.zoom}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
        maxZoom={18}
      />
      <Marker position={position} icon={defaultIcon}>
        <Popup>
          <div>
            <h4 className="font-bold">{siteConfig.maps.markerTitle}</h4>
            <p>{siteConfig.maps.markerAddress}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
