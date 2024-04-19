import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import L from 'leaflet';

type TProps = {
  markerPosition: [number, number][],
  permission: boolean
}

const RoutingControl = (props: TProps) => {
  const map = useMap(); // Get the Leaflet map instance
  const [test , setTest] = useState<any>([])
  useEffect(() => {
    if(props.permission){
      L.Routing.control({
        waypoints: [
          L.latLng(props.markerPosition[0]),
          L.latLng(props.markerPosition[1]),
          props.markerPosition[2] ? L.latLng(props.markerPosition[2]) : L.latLng(props.markerPosition[props.markerPosition.length - 1]),
          props.markerPosition[3] ? L.latLng(props.markerPosition[3]) : L.latLng(props.markerPosition[props.markerPosition.length - 1]),
          props.markerPosition[4] ? L.latLng(props.markerPosition[4]) : L.latLng(props.markerPosition[props.markerPosition.length - 1]),
          props.markerPosition[5] ? L.latLng(props.markerPosition[5]) : L.latLng(props.markerPosition[props.markerPosition.length - 1]),
          props.markerPosition[6] ? L.latLng(props.markerPosition[6]) : L.latLng(props.markerPosition[props.markerPosition.length - 1]),
          props.markerPosition[7] ? L.latLng(props.markerPosition[7]) : L.latLng(props.markerPosition[props.markerPosition.length - 1]),
          props.markerPosition[8] ? L.latLng(props.markerPosition[8]) : L.latLng(props.markerPosition[props.markerPosition.length - 1]),
          props.markerPosition[9] ? L.latLng(props.markerPosition[9]) : L.latLng(props.markerPosition[props.markerPosition.length - 1]),
          props.markerPosition[10] ? L.latLng(props.markerPosition[10]) : L.latLng(props.markerPosition[props.markerPosition.length - 1]),
          props.markerPosition[11] ? L.latLng(props.markerPosition[11]) : L.latLng(props.markerPosition[props.markerPosition.length - 1]),
          props.markerPosition[12] ? L.latLng(props.markerPosition[12]) : L.latLng(props.markerPosition[props.markerPosition.length - 1]),
        ],
        autoRoute: true,
        fitSelectedRoutes: true,
        routeWhileDragging:false
      }).addTo(map);
    }
    
  }, [map, props]); // Add map to dependencies to ensure effect runs when map changes

  return null; // Routing control is managed internally, so return null
};
export default RoutingControl;