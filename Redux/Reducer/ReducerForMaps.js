
const initialState = {
    arrayofData : []
}


const ReducerForMaps = (state = initialState, action) => {


switch(action.type) {

      case "ADD_LOCATION" :
     
      const {dataAgya,autoIncreid} = action.payload
    //   console.log(dataAgya,autoIncreid,"reducersay")

      return {
          ...state,
          arrayofData:[
              ...state.arrayofData,
              {
                id: autoIncreid,
                locationAllData: dataAgya,
              }
          ]
      }


      case "DELETE_LOCATION":

      const {idForDelete} = action.payload

      let newArray = state.arrayofData.filter((element) => element.id != idForDelete)

      return {
        ...state,
        arrayofData:newArray
      }




    default :return state
}


}


export default ReducerForMaps