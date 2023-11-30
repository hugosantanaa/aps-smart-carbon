import { MapContext } from "../context/MapContext";
import { useApi } from "./useApi";
import { useFetch } from "./useFetch";
import { useContext, useEffect} from "react";
import { vehicleOpt } from "../context/MapProvider";
import { stylesMap } from "@/data";


export const useRenderMap = () => {
    
    
    const { LambdaCalculateEmission } = useFetch()
    const {setTextDistance, setTextTime, setHasRoute} = useContext(MapContext)

    const { mapRef, setisInvalid } = useContext(MapContext)

    const { isLoaded, directionsRenderer, directionsService, service } = useApi()

    const centeredOnUnip = {
        lat: -23.632608446295116,
        lng: -46.69668773214834,
    };

    const mapOptions = {
        zoom: 15,
        center: centeredOnUnip,
        styles: stylesMap
    };


    useEffect(() => {
        if (isLoaded && mapRef.current) {
            const map = new google.maps.Map(mapRef.current, mapOptions);
            directionsRenderer?.setMap(map);
        }
    }, [isLoaded]);

    const calculateRoute = async (Origin: string, Destination: string, vehicle: vehicleOpt) => {


        if (isLoaded && mapRef.current) {
            const map = new google.maps.Map(mapRef.current, mapOptions);
            directionsRenderer?.setMap(map);

            try {
                directionsService?.route(
                    {
                        origin: Origin,
                        destination: Destination,
                        travelMode: google.maps.TravelMode[vehicle]
                    },
                    function (result, status) {
                        if (status === "OK") {
                            console.log('traçou o resultado?')
                            console.log(result)
                            directionsRenderer?.setDirections(result);
                        } else {
                            setisInvalid(true)
                        }
                    }
                );

                service?.getDistanceMatrix(
                    {
                        origins: [Origin],
                        destinations: [Destination],
                        travelMode: google.maps.TravelMode[vehicle]
                    },
                    async function (result, status) {
                        if (status === "OK") {
                            const distanceInText = result?.rows[0].elements[0].distance?.text;
                            const timeInText = result?.rows[0].elements[0].duration?.text;
                            const NumberDistance = result?.rows[0].elements[0].distance?.value;
                            const NumberTime = result?.rows[0].elements[0].duration?.value;

                            if (NumberDistance && NumberTime && distanceInText && timeInText) {
                                setHasRoute(true)
                                setTextDistance(distanceInText)
                                setTextTime(timeInText)
                                LambdaCalculateEmission(NumberDistance, NumberTime, vehicle)
                            }
                        } else {
                            setisInvalid(true)
                        }
                    }
                );

            } catch (error) {
                console.error(error);
                setisInvalid(true)
            }
        }
    }

    return {
        mapRef,
        calculateRoute,
    }

};


