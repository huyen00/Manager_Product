//Dòng này để import vue-router


import listProduct from "@/components/products/listProduct"
import rooms_Holo from "@/components/products/rooms"
import home from "@/components/products/home"
import event from "@/components/products/event"
// import productItem from "@/components/products/productItem"
import itemEvent from "@/components/products/itemEvent"
import itemGame from "@/components/products/itemGame"
import demoTabs from "@/components/demoTabs"
import login from "@/components/auth/login"
import HomeComponent from "@/components/HomeComponent"
import manager from "@/router/manager"
const routes = [
  // bao gồm danh sách route
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/",
    name: "index",
    component: HomeComponent,
    redirect: {
      name: "homeRoom",
    },
    meta: { requiresAuth: true },
    children: [
      {
          path: "/home",
          name: "homeRoom",
          component: home,
          meta: { requiresAuth: true },
        },
      {
          path: "/products",
          name: "listProduct",
          component: listProduct,
          meta: { requiresAuth: true },
        },
        {
          path: "/room",
          name: "rooms_Holo",
          component: rooms_Holo,
          meta: { requiresAuth: true },
        },
        
        {
          path: "/game-item",
          name: "itemGame",
          component: itemGame,
          meta: { requiresAuth: true },
        },
        {
          path: "/demo",
          name: "tabs",
          component: demoTabs,
          meta: { requiresAuth: true },
        },
        {
          path: "/event",
          name: "eventRoom",
          component: event,
          meta: { requiresAuth: true },
          children: [
            {
              
              path: 'item-event',
              component: itemEvent,
            },
            
            
          ],
        }
      
    ],
  
  },
  ...manager
  // {
  //   path: "/home",
  //   name: "homeRoom",
  //   component: home,
  // },
  // {
  //   path: "/products",
  //   name: "listProduct",
  //   component: listProduct,
  // },
  // {
  //   path: "/room",
  //   name: "rooms_Holo",
  //   component: rooms_Holo,
  // },
  
  // {
  //   path: "/game-item",
  //   name: "itemGame",
  //   component: itemGame,
  // },
  // {
  //   path: "/demo",
  //   name: "tabs",
  //   component: demoTabs,
  // },
  // {
  //   path: "/event",
  //   name: "eventRoom",
  //   component: event,
  //   children: [
  //     {
        
  //       path: 'item-event',
  //       component: itemEvent,
  //     },
      
      
  //   ],
  // },
  
  
  
];
export default routes;
