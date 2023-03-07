

import ApiService from "@/common/apiService";

export default{
    getRoom({commit}){
        console.log("committt",commit)
     
       return  ApiService.query('api/v1/room')
     
     },
     deleteRoom({commit},id){
        console.log("committt",id)
        console.log("committt",commit)
        return ApiService.delete(`api/v1/room/delete/${id}`)
  
     },
     addRoom({content},data){
        console.log("committt",content)
        console.log("data",data)
        return ApiService.post('api/v1/room/store',data)
     },
     editRoom({commit},{formData,roomById}){
      console.log("commit:", commit)
      console.log("list_room",formData)
      console.log("list_room",roomById)
   
      return ApiService.post(`api/v1/room/update/${roomById.id}`,formData)
     },
   //   event
   getEvent({commit}){
      console.log("committt",commit)
     return  ApiService.query('api/v1/events')
   },
   addEvent({content},data){
      console.log("committt",content)
      console.log("data",data)
      return ApiService.post('api/v1/event/store',data)
   },
   deleteEvent({commit},id){
      console.log("committt",id)
      console.log("committt",commit)
      return ApiService.delete(`api/v1/event/delete/${id}`)

   },
   editEvent({commit},{formData,eventById}){
      console.log("commit:", commit)
      console.log("list_room",formData)
      console.log("list_room",eventById)
   
      return ApiService.post(`api/v1/room/update/${eventById.id}`,formData)
     },
}