import './App.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

import { useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";


function App() {

  const [location, setLocation] = useState("");

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const [response, setResponse] = useState("");

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleClearResponse = () => {
    setResponse("");
  };

  const handleResetLocation = () => {
    setLocation("");
  };

  return (
    <div className="App">   
      <div className="User-prompts">
        <div className = "Left-prompts">
          <p>
            Where are you located?
          </p>
          <FormControl fullWidth>
            <InputLabel id = "location-label"> Select Current Location </InputLabel>
            <Select labelId = "location-label" value = {location} onChange = {handleLocationChange} label="Select Current Location" sx = {{textAlign: 'left'}}>
              {locations.sort().map((name, index) => (
                <MenuItem key = {index} value = {name}> {name} </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="Left-buttons">
            <Button variant = "contained" color = '' size = "small" sx = {{color: "cornflowerblue"}} onClick={handleResetLocation}> Reset Location </Button>
            <Button variant = "contained" color = '' size = "small" sx = {{color: "cornflowerblue"}}> Refresh </Button>
          </div>
        </div>
        <div className = "Right-prompts">
          <p>
            How is the WiFi at your current location?
          </p>
          <FormControl fullWidth>
            <InputLabel id = "wifi-label"> Select Your Response </InputLabel>
            <Select labelId = "wifi-label" value = {response} onChange = {handleResponseChange} label="Select Your Response" sx = {{textAlign: 'left'}}>
              <MenuItem value = "Excellent"> Excellent </MenuItem> 
              <MenuItem value = "Good"> Good </MenuItem> 
              <MenuItem value = "Poor"> Poor </MenuItem>
              <MenuItem value = "Unstable"> Unstable </MenuItem>
              <MenuItem value = "Nonexistent"> Nonexistent </MenuItem>
            </Select>
          </FormControl>
          <div className="Right-buttons">
            <Button variant = "contained" color = '' size = "small" sx = {{color: "cornflowerblue"}} onClick={handleClearResponse}> Clear Response </Button>
            <Button variant = "contained" color = '' size = "small" sx = {{color: "cornflowerblue"}}> Submit Feedback </Button>
          </div>
        </div>
      </div>
    <div className="App">
      <header className="App-header">
        <h3>Welcome to the WiFi Heatmap Display Project!</h3>
        <p>Please follow the README to get started.</p>
      </header>
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
    </div>
  );
}

export default App;

const locations = [
  // Residence Halls (with Units)
  "Cheney Hall (Unit 1)",
  "Deutsch Hall (Unit 1)",
  "Freeborn Hall (Unit 1)",
  "Putnam Hall (Unit 1)",
  "Cunningham Hall (Unit 2)",
  "Ehrman Hall (Unit 2)",
  "Davidson Hall (Unit 2)",
  "Griffiths Hall (Unit 2)",
  "Towle Hall (Unit 2)",
  "Cleary Hall (Unit 3)",
  "Ida Sproul Hall (Unit 3)",
  "Norton Hall (Unit 3)",
  "Spens-Black Hall (Unit 3)",
  "Blackwell Hall",
  "Foothill Residence Hall",
  "Clark Kerr Campus",
  "Stern Hall",
  "Channing-Bowditch Apartments",
  "Manville Apartments",
  "Martinez Commons",
  "Wada Apartments (Unit 2)",
  "I-House (International House)",

  // Academic Buildings
  "Sather Tower (The Campanile)",
  "Dwinelle Hall",
  "Wheeler Hall",
  "Valley Life Sciences Building (VLSB)",
  "Evans Hall",
  "LeConte Hall",
  "Haas School of Business",
  "Etcheverry Hall",
  "Sutardja Dai Hall",
  "Bechtel Engineering Center",
  "Moffitt Library",
  "Doe Memorial Library",
  "Li Ka Shing Center for Biomedical and Health Sciences",
  "Hertz Hall",
  "Berkeley Law (Boalt Hall)",
  "Barrows Hall",
  "McCone Hall",
  "Cory Hall",
  "Soda Hall",
  "Mulford Hall",
  "Wurster Hall",
  "South Hall",
  "Hildebrand Hall",
  "Birge Hall",

  // Student Services and Unions
  "Martin Luther King Jr. Student Union (MLK Student Union)",
  "Tang Center (University Health Services)",
  "Sproul Plaza",
  "Cal Student Store",

  // Other Halls and Facilities
  "Zellerbach Hall",
  "Haas Pavilion",
  "RSF (Recreational Sports Facility)",
  "California Memorial Stadium",
  "Anthony Hall",
  "Hearst Memorial Gymnasium",
  "The Bancroft Library",

  // UCPD and Safety
  "University of California Police Department (UCPD)",

  // Outdoor Spaces and Landmarks
  "Sather Gate",
  "Memorial Glade",
  "UC Berkeley Botanical Garden",
];