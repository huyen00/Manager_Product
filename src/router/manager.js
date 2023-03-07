//Dòng này để import vue-router

import listRoom from "@/components/manager/listRoom"
import event from "@/components/manager/event"
import HomeComponent from "@/components/HomeComponent"
export default [
  // bao gồm danh sách route
  {
  path: "/manager-room",
 
  component: HomeComponent,
  redirect: {
    name: "manager-room",
  },
  meta: { requiresAuth: true },
  children: [
  {
    path: "/manager-room",
    name: "manager-room",
    component: listRoom,
  },
  {
    path: "/manager-event",
    name: "manager-event",
    component: event,
  },
]
  }
  
 
];

