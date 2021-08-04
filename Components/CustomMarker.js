import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Dimensions } from "react-native"
import { Marker, Callout } from "react-native-maps"
import Svg,{Image} from 'react-native-svg';


const CustomMArkers = ({ data }) => {

    // console.log(data.locationAllData.imageUrl, "custom marker say")

    const [stateForCordinates, setstateForCordinates] = useState({
        latitudeOfmap: data.locationAllData.lat,
        longitudeofmap: data.locationAllData.long
    })

    return (

        <Marker
            // draggable
            coordinate={{
                latitude: stateForCordinates.latitudeOfmap,
                longitude: stateForCordinates.longitudeofmap,
            }}
        // onDragEnd={
        //     (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
        //   }
        // pinColor="#03B8F7"
        // image={require("../assets/images/markerPerfect.png")}

        >



            <Callout tooltip>
                <View>
                    <View style={styles.Bubble}>
                        <View style={{ width: "100%", height: "100%" }}>
                            <View style={{ width: "85%", height: "45%",alignSelf: "center", marginTop: 10, marginBottom: 10 }}>
                                {/* <Image source={{ uri: `${data.locationAllData.imageUrl}` }} style={{ width: "100%", height: "100%" }} /> */}

                                <Svg
                                    width={"100%"} height={"100%"} > 
                                    <Image
                                        href={data.locationAllData.imageUrl}
                                        width={"100%"}
                                        height={"100%"}
                                        style={{backgroundColor:"red"}}
                                        // backgroundColor="red"
                                    />
                                </Svg>




                                {/* <Image source={require(`${data.locationAllData.imageUrl}`)} style={{width:"100%",height:"100%"}} /> */}
                            </View>

                            <View style={{ height: "40%", width: "85%", alignSelf: "center" }}>

                                <View style={{ height: "35%", width: "100%", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: 13,color:"white" }}>Title:</Text>
                                    <Text style={{ fontWeight: "bold",color:"white" }}>{data.locationAllData.title}</Text>
                                </View>

                                <View style={{ height: "65%", width: "100%", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: 13,color:"white" }}>Description:</Text>
                                    <Text style={{ fontWeight: "bold",color:"white" }}>{data.locationAllData.descrip}</Text>
                                </View>

                            </View>

                        </View>
                    </View>
                    <View style={styles.arrowBorder} />
                    <View style={styles.arrow} />
                </View>
            </Callout>
        </Marker>

    )

}


export default CustomMArkers


const styles = StyleSheet.create({
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
        backgroundColor: "#FC5B3F",
        marginTop: 50,
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
        borderTopColor: "#FC5B3F",
        borderWidth: 16,
        alignSelf: "center",
        marginTop: -32,
      
    },
    arrowBorder: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderTopColor: "#fff",
        borderWidth: 16,
        alignSelf: "center",
        marginTop: -0.5,
        
    },

})
