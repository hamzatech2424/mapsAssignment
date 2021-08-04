import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Dimensions,Alert } from "react-native"
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Circle, Polygon } from "react-native-maps"
import { request, PERMISSIONS } from "react-native-permissions"
import { ActivityIndicator } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import CustomMArkers from "../Components/CustomMarker";
import { useSelector, useDispatch } from 'react-redux'

const Maps = ({navigation,route}) => {

 
    // const { cord } = route.params;

    const [UserLocation, setUserLocation] = useState("")
    const [myLocButton, setmyLocButton] = useState({
        margin: 1
    })
    // console.log(UserLocation,"UserLocation")

    const [PointingLocation, setPointingLocation] = useState({
        longitude: 73.1350,
        latitude: 31.4504
        // longitude:UserLocation.longitude,
        // latitude:UserLocation.latitude
    })
    const LocationReduxSayData = useSelector((state) => state.ReducerForMaps.arrayofData)


    // console.log(LocationReduxSayData,"Maps page say")

    // const dataArray = [
    //     {
    //         imgUrl: "",
    //         title: "Royal ",
    //         description: "csalcmacmlsacmac",
    //         locationLat: 31.41996,
    //         locationLong: 73.11489

    //     },
    //     {
    //         imgUrl: "",
    //         title: "Mujahid Hospital",
    //         description: "csalcmacmlsacmac",
    //         locationLat: 31.42057,
    //         locationLong: 73.12228

    //     },
    //     {
    //         imgUrl: "",
    //         title: "random",
    //         description: "csalcmacmlsacmac",
    //         locationLat: 31.42291,
    //         locationLong: 73.11847

    //     },

    // ]


    useEffect(() => {

        function getUserLocation() {
            requestLocationPermission()
        }

        getUserLocation()

    }, [])




    async function requestLocationPermission() {
        var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        if (response == "granted") {
            await Geolocation.getCurrentPosition(
                ({ coords }) => {
                    setUserLocation(coords)
                    // console.log(coords,"current position say")
                },
                (error) => {
                    Alert.alert(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        }
    }


    if (!UserLocation) return <ActivityIndicator color="#03B8F7" size="large" style={{ flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }} />

    return (
        <View style={styles.Container}>

            <MapView
                style={[styles.MapkaConatiner]}
                initialRegion={{
                    latitude: PointingLocation.latitude,
                    longitude: PointingLocation.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121
                }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                showsMyLocationButton={false}
                setMyLocationEnabled={true}
                zoomControlEnabled={true}
                onMapReady={() => { setmyLocButton({ margin: 0 }) }}
                onRegionChangeComplete={(initialRegion) => {
                    // console.log(initialRegion)
                    setPointingLocation({ longitude: initialRegion.longitude, latitude: initialRegion.latitude })
                }}
                onPress={(event)=>{ 
                
                    let valuefcoordinates = event.nativeEvent.coordinate

                    Alert.alert(
                        'Add Location',
                        'Do you want to add desired Location Pin?',
                        [
                          {
                            text: 'Yes',
                            onPress: () => {
                                navigation.navigate("Add-location",{tapCoordinatesFrmMap:valuefcoordinates})
                            },
                          },
                          {
                            text: 'No',
                            onPress: async ()  => {
                                return null;
                            },
                          },
                        ],
                        {cancelable: false},
                      );
                    
                }}

            >



                {LocationReduxSayData.map((value,index)=>{
                    return(
                        // console.log(value,"array map")
                        <CustomMArkers key={index} data={value} />
                    )
                })

                }






            </MapView>

        </View>
    )
}


const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    MapkaConatiner: {
        width: "100%",
        height: "100%",
        // backgroundColor:"red"
    },
    Bubble: {
        flexDirection: "row",
        alignSelf: "flex-start",
        backgroundColor: "#fff",
        borderRadius: 6,
        borderColor: "#ccc",
        borderWidth: 0.5,
        // padding: 15,
        width: 150,
        height: 200,
        backgroundColor: "white",
        marginTop: 40,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1.5,
    },
    arrow: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderTopColor: "#fff",
        borderWidth: 16,
        alignSelf: "center",
        marginTop: -32
    },
    arrowBorder: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderTopColor: "#fff",
        borderWidth: 16,
        alignSelf: "center",
        marginTop: -0.5
    },
    name: {
        fontSize: 16,
        // marginBottom: 5
    },
})



export default Maps