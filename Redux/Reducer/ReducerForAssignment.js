

const initialState = {
    arrayForData: [],

}


const ReducerForAssignment = (state = initialState, action) => {

    switch (action.type) {

        case "ADD_TASK":

            const { tasks, autoIncreid } = action.payload


            return {
                ...state,
                arrayForData: [
                    ...state.arrayForData,
                    {
                        id: autoIncreid,
                        tasksToPerform: tasks,
                        persons: 0,
                        isActive:false
                    }
                ]
            }



        case "DELETE_TASK":


            const { idOfTask } = action.payload

            let newArray = state.arrayForData.filter((element) => element.id != idOfTask)

            return {
                ...state,
                arrayForData: newArray
            }






        case "INCREASE_PERSONS":


            const { idTask } = action.payload

            // console.log(idTask)

            return {
                ...state,
                arrayForData: state.arrayForData.map(item => item.id === idTask ? { ...item, persons: ++item.persons } : item)
            }





        case "DECREASE_PERSONS":


            const { Taskid } = action.payload

            // console.log(Taskid, "hamza")

            return {
                ...state,
                arrayForData: state.arrayForData.map(item => item.id === Taskid ? { ...item, persons: --item.persons } : item)
            }




        case "RESET_PERSONS":


            let newArray1 = [...state.arrayForData]

            for (var i = 0; i < state.arrayForData.length; i++) {

                newArray1[i].persons = "Zero"

            }

            return {
                ...state,
                arrayForData: newArray1
            }




        case "EDIT_TASK":
            
            const { TaskKiId} = action.payload

            return {
                ...state,
                arrayForData: state.arrayForData.map(item => item.id === TaskKiId ?
                    //  { ...item, tasksToPerform: newValueEdited,isActive:true } 
                    { ...item, isActive:true } 
                     : item)
            }




            case "EDIT_TASK_SAVE_TASK":
            
            const { TaskKiIdhai, newValueEdited } = action.payload

            return {
                ...state,
                arrayForData: state.arrayForData.map(item => item.id === TaskKiIdhai ?
                     { ...item, tasksToPerform: newValueEdited,isActive:false } 
                     : item)
            }





        default: return state;

    }
}


export default ReducerForAssignment