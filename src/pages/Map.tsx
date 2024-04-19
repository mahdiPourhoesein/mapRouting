import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from "react-leaflet";
import startMarkerImage from "../assets/images/marker.svg"
import L from "leaflet";
import { useEffect, useRef, useState } from "react";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import RoutingControl from "./RoutingControl";

const Map = () => {
    const mapRef: any = useRef(null);
    const [markerPosition , setMarkerPosition] = useState<[number,number][]>([])
    const [step,setStep] = useState(1)
    const [permission,setPermission] = useState<boolean>(false)

    
    function SetViewOnClick() {
        const map = useMapEvent('click', (e) => {
            setPermission(false)
            if(step === markerPosition.length){
              const copy = [...markerPosition]
              copy[step - 1] = [e.latlng.lat, e.latlng.lng]
              setMarkerPosition(copy)
            }else{
              setMarkerPosition([...markerPosition , [e.latlng.lat, e.latlng.lng]])
            }
        })
      
        return null
    }
    const iconStart = new L.Icon({
        iconUrl: startMarkerImage,
        iconRetinaUrl: startMarkerImage,
        iconSize: new L.Point(40, 50)
    });
    return(
      <div className="h-[100vh]">
        <div className="relative w-full h-full">
            <MapContainer attributionControl={false} ref={mapRef} style={{ height: "100%" }} center={[35.68828921602836 , 51.39279842376709]} zoom={13} scrollWheelZoom={true}>
                {markerPosition.length > 1 && <RoutingControl permission={permission} markerPosition={markerPosition}/>}
                <TileLayer
                    url=" https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; NASA Blue Marble, image service by OpenGeo"
                />
                <SetViewOnClick />
                {/* <>{console.log(markerPosition)}</> */}
                {
                  markerPosition.map((latLng , index)=> {
                    return(
                      <Marker
                        draggable={false}
                        position={latLng}
                        autoPan
                        icon={iconStart}
                        eventHandlers={{
                            moveend: (event) => {
                              console.log(event.target.getLatLng())
                            }
                        }}
                      >
                            {markerPosition.length - 1 === index &&
                              <Popup >
                                <p className="flex" style={{fontFamily: "IranSansLight , IranSansMedium , IranSansBold, Helvetica"}}>
                                    <span>تایید؟</span>
                                    <button onClick={() => {
                                        mapRef.current._popup._closeButton.click()
                                    }} 
                                    className="mx-3"
                                    >
                                        <span onClick={() =>{
                                           setStep(step + 1)
                                           setPermission(true)
                                        }}>بله</span>
                                    </button>
                                    <button onClick={() => {mapRef.current._popup._closeButton.click()}} className="">
                                        خیر
                                    </button>
                                </p>
                            </Popup>
                          }
                      </Marker>
                    )
                  })
                }
            </MapContainer>
            </div>
        </div>
    )
}
export default Map;