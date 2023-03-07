export default{
    showHideTab1(state){
        state.tab1 =true
       
        state.tab2 =false
        state.tab3 =false
    },
    showHideTab2(state){
        state.tab1 =false
        state.tab2 =true
        state.tab3 =false
    },
    showHideTab3(state){
        state.tab1 =false
        state.tab2 =false
        state.tab3 =true
    },
    SET_ROOM(state, data){
        state.room = data
        console.log("data roles", data)
    },
    DELETE_ROOM(state, data){ 
        const index=state.room.findIndex(item => item.id ===data.id)
        console.log("index333:",index)
        if(index !== -1){
        state.room.splice(index,1)
        }
    },
    showFormModel(state){
        state.showhide_FormModel = true
        state.editMode = false
    },
    EditFormModel(state,id){
        console.log("iddddd", id)
        state.roomById = state.room.find(room => room.id ==id)
        state.showhide_FormModel = true
        state.editMode = true
    },
    closeFormModel(state){
        state.showhide_FormModel = false
        state.editMode = false
    },
    ADD_ROOM(state, data){
        state.room.push(data)
    },
    EDIT_ROOM(state, data){
        console.log(state)
        console.log(data)
        const index = state.room.findIndex(room => room.id === data.id)
        if( index !== -1){
            state.room.splice(index,1, data)
        }
    },
    // search
    SEARCH(state,data){
        state.room =data
    },
    // event
    SET_EVENT(state, data){
        state.events = data
        console.log("data roles", data)
    },
    ADD_EVENT(state, data){
        state.events.push(data)
    },
    DELETE_EVENT(state, data){ 
        const index=state.events.findIndex(item => item.id ===data.id)
        console.log("index333:",index)
        if(index !== -1){
        state.events.splice(index,1)
        }
    },
    EditFormModelEvent(state,id){
        console.log("iddddd", id)
        state.eventById = state.events.find(event => event.id ==id)
        state.showhide_FormModel = true
        state.editMode = true
    },
    EDIT_EVENT(state, data){
        console.log(state)
        console.log(data)
        const index = state.events.findIndex(event => event.id === data.id)
        if( index !== -1){
            state.events.splice(index,1, data)
        }
    },
}
