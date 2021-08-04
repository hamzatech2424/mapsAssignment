import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux'
import {DeleteLocation} from "../Redux/Actions"


const AllLocationList = ({data,navigation}) => {
    const dispatch = useDispatch()


console.log(data,"alllocatonlistsay")



    return(

      

        <View style={{ width: "100%", height: 50, flexDirection: "row",marginVertical:5 }}>
        <View style={{ width: "60%", height: "100%",flexDirection: "row" }}>

            <View style={{ height: "100%", width: "20%",justifyContent:"center",alignItems:"center" }}>
            <MaterialIcons name="location-on" color="red" size={25} />
            </View>


            <View style={{ height: "100%", width: "80%",justifyContent:"center" }}>
                <Text style={{fontSize:16}}>{data.locationAllData.title}</Text>
            </View>



        </View>

        <View style={{ width: "40%", height: "100%", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
            {/* <TouchableOpacity 
            onPress={()=>{
                // navigation.navgate("Maps",{cord:data.locationAllData})
            }}
            style={{ backgroundColor: "green", height: 30, width: "48%", justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                <Text style={{ color: "white" }}>Go to</Text>
            </TouchableOpacity> */}

            <TouchableOpacity 
            style={{ backgroundColor: "red", height: 30, width: "100%", justifyContent: "center", alignItems: "center", borderRadius: 10 }}
            onPress={()=>{
                dispatch(DeleteLocation(data.id))
            }}
            >
                <Text style={{ color: "white" }}>Delete</Text>
            </TouchableOpacity>

        </View>

    </View>

        
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default AllLocationList