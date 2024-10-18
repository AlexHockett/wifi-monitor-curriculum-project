import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import './App.css';

function Map() {
  return (
    <div style={{
        height: '70vh',
        marginBottom: '1rem',
        borderRadius: '1.5rem',
        borderStyle: 'solid',
        borderWidth: 'thin',
        borderColor: '#25B4E7'
      }}>
        <MapContainer center={[37.8719, -122.2585]} zoom={17} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
  );
}

export default Map;



