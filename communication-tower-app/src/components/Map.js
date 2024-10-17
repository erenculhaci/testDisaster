import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useDispatch, useSelector } from 'react-redux';
import { addNode, deleteNode } from '../store';

const MapComponent = () => {
    const nodes = useSelector((state) => state.nodes);
    const dispatch = useDispatch();

    // Create a component to handle map events
    const MapEventHandler = () => {
        useMapEvents({
            click: (event) => {
                const { lat, lng } = event.latlng;
                dispatch(addNode({ lat, lng }));
            },
        });
        return null; // This component doesn't need to render anything
    };

    return (
        <MapContainer center={[41.0082, 28.9784]} zoom={12} style={{ height: "100vh" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            <MapEventHandler /> {/* Add the event handler component here */}
            {nodes.map((node, index) => (
                <Marker key={index} position={[node.lat, node.lng]}>
                    <Popup>
                        <button onClick={() => dispatch(deleteNode(node))}>Delete Node</button>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;
