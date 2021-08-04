
export const LocationAddKrni = (  fromdata,id) => {
        
//  console.log(fromdata,id,"actionssay")

    return {
        type:"ADD_LOCATION",
        payload:{
            dataAgya:fromdata,
            autoIncreid:new Date().getTime().toString(), 
        }
    }
}



export const DeleteLocation = (id) => {
        
    // console.log(id,"actionssay")
   
       return {
           type:"DELETE_LOCATION",
           payload:{
               idForDelete:id, 
           }
       }
   }














