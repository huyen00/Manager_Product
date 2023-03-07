<template>
    <div id="app fixed h-full">
     
      <menuSidebar />
      <div class="p-4 sm:ml-64">
        <div class="p-4  rounded-lg dark:border-gray-700 mt-14">
          <router-view></router-view>
        </div>
      </div>
     
    </div>
  </template>
  
  <script>
  
  import menuSidebar from '../components/products/menuSlidebar.vue'
  
  export default {
    name: 'HomeComponent',
    
    components: {
     
      menuSidebar
    
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
   
  }
  </style>
  