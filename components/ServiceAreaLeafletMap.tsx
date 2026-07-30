"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/**
 * GMB service-area polygon (clockwise from NW). Traced from McCoy Landscape
 * Group's verified Google Business Profile service area dotted-line shape.
 * 15 vertices = close enough to look identical at the map's display zoom.
 */
const SERVICE_AREA_POLYGON: [number, number][] = [
 [43.700, -80.030], // NW — north of Acton
 [43.720, -79.860], // N — south Brampton
 [43.720, -79.700], // NE — NW Mississauga / 410-427 corridor
 [43.605, -79.555], // E — east Mississauga at QEW
 [43.515, -79.555], // SE — Mississauga lakeshore at Long Branch
 [43.460, -79.620], // S — Port Credit
 [43.400, -79.720], // S — Oakville lake
 [43.330, -79.795], // S — Bronte / west Oakville lake
 [43.298, -79.870], // S — Burlington Bay east
 [43.310, -79.940], // SW — Burlington/Hamilton harbour
 [43.400, -80.000], // W — Waterdown / Flamborough
 [43.480, -80.155], // W — Aberfoyle
 [43.560, -80.155], // W — Eden Mills
 [43.625, -80.135], // NW — Rockwood
 [43.700, -80.030], // back to start
];

// Approximate center of polygon for initial framing.
const CENTER: [number, number] = [43.500, -79.870];

// Service area cities + lat/lng for marker pins.
const CITY_PINS: { name: string; coords: [number, number] }[] = [
 { name: "Oakville", coords: [43.4675, -79.6877] },
 { name: "Burlington", coords: [43.3255, -79.7990] },
 { name: "Mississauga", coords: [43.5890, -79.6441] },
 { name: "Milton", coords: [43.5183, -79.8774] },
 { name: "Waterdown", coords: [43.3640, -79.9000] },
 { name: "Flamborough", coords: [43.4093, -79.9836] },
];

function CityPin({ name, coords }: { name: string; coords: [number, number] }) {
 // Custom div icon matching brand sage-green primary
 const icon = L.divIcon({
 className: "mccoy-city-pin",
 html: `<div style="width:14px;height:14px;border-radius:50%;background:#0f4d2a;border:2px solid #ffffff;box-shadow:0 2px 6px rgba(0,0,0,0.35);"></div>`,
 iconSize: [14, 14],
 iconAnchor: [7, 7],
 });
 return (
 <Marker position={coords} icon={icon}>
 <Popup>
 <strong>{name}, ON</strong>
 </Popup>
 </Marker>
 );
}

export default function ServiceAreaLeafletMap() {
 // Ensure Leaflet's default icons resolve even though we override with div icons.
 useEffect(() => {
 delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
 L.Icon.Default.mergeOptions({
 iconRetinaUrl:
 "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
 iconUrl:
 "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
 shadowUrl:
 "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
 });
 }, []);

 return (
 <MapContainer
 center={CENTER}
 zoom={10}
 scrollWheelZoom={false}
 style={{ width: "100%", height: "100%" }}
 attributionControl={true}
 >
 <TileLayer
 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 />
 <Polygon
 positions={SERVICE_AREA_POLYGON}
 pathOptions={{
 color: "#e53935", // GMB red
 weight: 3,
 opacity: 1,
 dashArray: "8 8",
 fillColor: "#e53935",
 fillOpacity: 0.06,
 }}
 />
 {CITY_PINS.map((c) => (
 <CityPin key={c.name} {...c} />
 ))}
 </MapContainer>
 );
}
