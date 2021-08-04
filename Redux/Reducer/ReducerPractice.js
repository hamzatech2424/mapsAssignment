const initialState = {
    arrayofData:[]
}


const PracticeReducer = (state = initialState,action) => {

    switch(action.type) {


        case "Add" :

        const {task,id} = action.payload


        return {
            ...state,
            arrayofData:[
                ...state.arrayofData,
                {
                    taskstoPerform:task,
                    id:id,
                    num:true,
                    change:0
                }
            ]
        }


        case "delete" :

        const {ids} = action.payload
         
         
        let newArray = state.arrayofData.filter((ele)=>ele.id != ids)


        return {
            ...state,
            arrayofData:newArray
        }


        case "ChangeState": 

        const {idss} = action.payload

        return{
            ...state,
            arrayofData:state.arrayofData.map((ele)=> ele.id === idss ? {...ele,num:false,change:1} : ele)
        }













      default: return state
    }
    
}