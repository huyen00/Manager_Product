<template>
    
            <div class="flex">
                <ul class="drop-shadow-lg" role="tablist" data-te-nav-ref>
                    <li class="bg-orange-500 block px-5 py-3 rounded-lg" role="presentation">
                        <a  href="#tabs-home03" data-te-toggle="pill" data-te-target="#tabs-home03" data-te-nav-active role="tab" aria-controls="tabs-home03" aria-selected="true">
                            <font-awesome-icon icon="fa-brands fa-hotjar" class="text-white" />
                            <p class="text-white uppercase">Hot</p>
                        </a>
                        
                    </li>
                    <li class="block px-5 py-3 rounded-lg drop-shadow-lg" role="presentation">
                        <a href="#tabs-profile03" data-te-toggle="pill" data-te-target="#tabs-profile03" role="tab" aria-controls="tabs-profile03" aria-selected="false">
                            <font-awesome-icon icon="fa-brands fa-hotjar" class="text-white" />
                            <p class="text-black uppercase">Hot</p>
                        </a>
                    </li>
                </ul>
                <div class="w-full ml-5 mr-5 mt-4">
                    <form class="flex items-center">
                        <label for="voice-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text" id="voice-search"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search Mockups, Logos, Design Templates..." required />
                            <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg aria-hidden="true"
                                    class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <button type="submit"
                            class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>Search
                        </button>
                    </form>
                    <div class="ml-5 mr-5">
                        <div class="grid grid-cols-4 gap-4   opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block" id="tabs-home03" role="tabpanel" aria-labelledby="tabs-home-tab03" data-te-tab-active>
                            <div class="relative rounded-3xl mt-5 shadow-lg transform transition duration-500 group hover:scale-105 item_room" v-for="(item, index) in room" :key="index">
                                <img :src="item.image_room" class="rounded-3xl h-full object-cover w-full" alt="" />
                                <div
                                    class="absolute top-0 content_form overflow-hidden rounded-t-3xl h-full w-full p-3 opacity-0 group-hover:opacity-100 bg-opacity-25">
                                    <div class="top-0 h-full overflow-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                                        <span class="text-sm text-white">{{item.content_room}}</span>
                                    </div>
                                </div>
                                <div class="title_form bottom-0 absolute py-1 px-2 w-full rounded-b-3xl">
                                    <router-link to="/game-item">
                                        <h2 class="text-xl text-white title_room hover:text-orange-300 cursor-pointer">
                                           {{item.title_room}}
                                        </h2>
                                    </router-link>
                                    <ul class="flex mt-1">
                                        <li class="text-white">
                                            <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                                            <span class="text-sm text-white ml-2">{{item.like_room}}</span>
                                        </li>
                                        <li class="text-white mx-3">
                                            <font-awesome-icon icon="fa-solid fa-person-running" />
                                            <span class="text-sm text-white ml-2">{{ item.run_room }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4  opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block" id="tabs-profile03" role="tabpanel" aria-labelledby="tabs-profile-tab03" >
                            <div class="relative rounded-3xl mt-5 shadow-lg transform transition duration-500 group hover:scale-105">
                                <img src="assets/room1.jpg" class="rounded-3xl" alt="" />
                                <div
                                    class="absolute top-0 content_form overflow-hidden rounded-t-3xl h-full w-full p-3 opacity-0 group-hover:opacity-100 bg-opacity-25">
                                    <div class="top-0 h-full overflow-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                                        <span class="text-sm text-white">What is stranger than fiction? Only the Stranger Things
                                            itself - addictive PVP/RP play where you can fully immerse in
                                            open world of reimagined Hawkins, vibe with friends at
                                            Starcourt mall, chill at the arcade or night club, drive
                                            around or just go anywhere else in town, hangout or compete in
                                            shootout - it’s all up to you, it’s StrangerThingsWars</span>
                                    </div>
                                </div>
                                <div class="title_form bottom-0 absolute p-3 w-full rounded-b-3xl">
                                    <a href="">
                                        <h2 class="text-xl text-white title_room hover:text-orange-300 cursor-pointer">
                                            StrangerThingsWars
                                        </h2>
                                    </a>
                                    <ul class="flex mt-4">
                                        <li class="text-white">
                                            <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                                            <span class="text-sm text-white ml-2">12754</span>
                                        </li>
                                        <li class="text-white mx-3">
                                            <font-awesome-icon icon="fa-solid fa-person-running" />
                                            <span class="text-sm text-white ml-2">1.34k</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="relative rounded-3xl mt-5 shadow-lg transform transition duration-500 group hover:scale-105">
                                <img src="assets/room1.jpg" class="rounded-3xl" alt="" />
                                <div
                                    class="absolute top-0 content_form overflow-hidden rounded-t-3xl h-full w-full p-3 opacity-0 group-hover:opacity-100 bg-opacity-25">
                                    <div class="top-0 h-full overflow-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                                        <span class="text-sm text-white">What is stranger than fiction? Only the Stranger Things
                                            itself - addictive PVP/RP play where you can fully immerse in
                                            open world of reimagined Hawkins, vibe with friends at
                                            Starcourt mall, chill at the arcade or night club, drive
                                            around or just go anywhere else in town, hangout or compete in
                                            shootout - it’s all up to you, it’s StrangerThingsWars</span>
                                    </div>
                                </div>
                                <div class="title_form bottom-0 absolute p-3 w-full rounded-b-3xl">
                                    <a href="">
                                        <h2 class="text-xl text-white title_room hover:text-orange-300 cursor-pointer">
                                            StrangerThingsWars
                                        </h2>
                                    </a>
                                    <ul class="flex mt-4">
                                        <li class="text-white">
                                            <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                                            <span class="text-sm text-white ml-2">12754</span>
                                        </li>
                                        <li class="text-white mx-3">
                                            <font-awesome-icon icon="fa-solid fa-person-running" />
                                            <span class="text-sm text-white ml-2">1.34k</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="relative rounded-3xl mt-5 shadow-lg transform transition duration-500 group hover:scale-105">
                                <img src="assets/room1.jpg" class="rounded-3xl" alt="" />
                                <div
                                    class="absolute top-0 content_form overflow-hidden rounded-t-3xl h-full w-full p-3 opacity-0 group-hover:opacity-100 bg-opacity-25">
                                    <div class="top-0 h-full overflow-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                                        <span class="text-sm text-white">What is stranger than fiction? Only the Stranger Things
                                            itself - addictive PVP/RP play where you can fully immerse in
                                            open world of reimagined Hawkins, vibe with friends at
                                            Starcourt mall, chill at the arcade or night club, drive
                                            around or just go anywhere else in town, hangout or compete in
                                            shootout - it’s all up to you, it’s StrangerThingsWars</span>
                                    </div>
                                </div>
                                <div class="title_form bottom-0 absolute p-3 w-full rounded-b-3xl">
                                    <a href="">
                                        <h2 class="text-xl text-white title_room hover:text-orange-300 cursor-pointer">
                                            StrangerThingsWars
                                        </h2>
                                    </a>
                                    <ul class="flex mt-4">
                                        <li class="text-white">
                                            <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                                            <span class="text-sm text-white ml-2">12754</span>
                                        </li>
                                        <li class="text-white mx-3">
                                            <font-awesome-icon icon="fa-solid fa-person-running" />
                                            <span class="text-sm text-white ml-2">1.34k</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="relative rounded-3xl mt-5 shadow-lg transform transition duration-500 group hover:scale-105">
                                <img src="assets/room1.jpg" class="rounded-3xl" alt="" />
                                <div
                                    class="absolute top-0 content_form overflow-hidden rounded-t-3xl h-full w-full p-3 opacity-0 group-hover:opacity-100 bg-opacity-25">
                                    <div class="top-0 h-full overflow-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                                        <span class="text-sm text-white">What is stranger than fiction? Only the Stranger Things
                                            itself - addictive PVP/RP play where you can fully immerse in
                                            open world of reimagined Hawkins, vibe with friends at
                                            Starcourt mall, chill at the arcade or night club, drive
                                            around or just go anywhere else in town, hangout or compete in
                                            shootout - it’s all up to you, it’s StrangerThingsWars</span>
                                    </div>
                                </div>
                                <div class="title_form bottom-0 absolute p-3 w-full rounded-b-3xl">
                                    <a href="">
                                        <h2 class="text-xl text-white title_room hover:text-orange-300 cursor-pointer">
                                            StrangerThingsWars
                                        </h2>
                                    </a>
                                    <ul class="flex mt-4">
                                        <li class="text-white">
                                            <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                                            <span class="text-sm text-white ml-2">12754</span>
                                        </li>
                                        <li class="text-white mx-3">
                                            <font-awesome-icon icon="fa-solid fa-person-running" />
                                            <span class="text-sm text-white ml-2">1.34k</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="relative rounded-3xl mt-5 shadow-lg transform transition duration-500 group hover:scale-105">
                                <img src="assets/room1.jpg" class="rounded-3xl" alt="" />
                                <div
                                    class="absolute top-0 content_form overflow-hidden rounded-t-3xl h-full w-full p-3 opacity-0 group-hover:opacity-100 bg-opacity-25">
                                    <div class="top-0 h-full overflow-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                                        <span class="text-sm text-white">What is stranger than fiction? Only the Stranger Things
                                            itself - addictive PVP/RP play where you can fully immerse in
                                            open world of reimagined Hawkins, vibe with friends at
                                            Starcourt mall, chill at the arcade or night club, drive
                                            around or just go anywhere else in town, hangout or compete in
                                            shootout - it’s all up to you, it’s StrangerThingsWars</span>
                                    </div>
                                </div>
                                <div class="title_form bottom-0 absolute p-3 w-full rounded-b-3xl">
                                    <a href="">
                                        <h2 class="text-xl text-white title_room hover:text-orange-300 cursor-pointer">
                                            StrangerThingsWars
                                        </h2>
                                    </a>
                                    <ul class="flex mt-4">
                                        <li class="text-white">
                                            <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                                            <span class="text-sm text-white ml-2">12754</span>
                                        </li>
                                        <li class="text-white mx-3">
                                            <font-awesome-icon icon="fa-solid fa-person-running" />
                                            <span class="text-sm text-white ml-2">1.34k</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="relative rounded-3xl mt-5 shadow-lg transform transition duration-500 group hover:scale-105">
                                <img src="assets/room1.jpg" class="rounded-3xl" alt="" />
                                <div
                                    class="absolute top-0 content_form overflow-hidden rounded-t-3xl h-full w-full p-3 opacity-0 group-hover:opacity-100 bg-opacity-25">
                                    <div class="top-0 h-full overflow-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                                        <span class="text-sm text-white">What is stranger than fiction? Only the Stranger Things
                                            itself - addictive PVP/RP play where you can fully immerse in
                                            open world of reimagined Hawkins, vibe with friends at
                                            Starcourt mall, chill at the arcade or night club, drive
                                            around or just go anywhere else in town, hangout or compete in
                                            shootout - it’s all up to you, it’s StrangerThingsWars</span>
                                    </div>
                                </div>
                                <div class="title_form bottom-0 absolute p-3 w-full rounded-b-3xl">
                                    <a href="">
                                        <h2 class="text-xl text-white title_room hover:text-orange-300 cursor-pointer">
                                            StrangerThingsWars
                                        </h2>
                                    </a>
                                    <ul class="flex mt-4">
                                        <li class="text-white">
                                            <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                                            <span class="text-sm text-white ml-2">12754</span>
                                        </li>
                                        <li class="text-white mx-3">
                                            <font-awesome-icon icon="fa-solid fa-person-running" />
                                            <span class="text-sm text-white ml-2">1.34k</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="relative rounded-3xl mt-5 shadow-lg transform transition duration-500 group hover:scale-105">
                                <img src="assets/room1.jpg" class="rounded-3xl" alt="" />
                                <div
                                    class="absolute top-0 content_form overflow-hidden rounded-t-3xl h-full w-full p-3 opacity-0 group-hover:opacity-100 bg-opacity-25">
                                    <div class="top-0 h-full overflow-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                                        <span class="text-sm text-white">What is stranger than fiction? Only the Stranger Things
                                            itself - addictive PVP/RP play where you can fully immerse in
                                            open world of reimagined Hawkins, vibe with friends at
                                            Starcourt mall, chill at the arcade or night club, drive
                                            around or just go anywhere else in town, hangout or compete in
                                            shootout - it’s all up to you, it’s StrangerThingsWars</span>
                                    </div>
                                </div>
                                <div class="title_form bottom-0 absolute p-3 w-full rounded-b-3xl">
                                    <a href="">
                                        <h2 class="text-xl text-white title_room hover:text-orange-300 cursor-pointer">
                                            StrangerThingsWars
                                        </h2>
                                    </a>
                                    <ul class="flex mt-4">
                                        <li class="text-white">
                                            <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                                            <span class="text-sm text-white ml-2">12754</span>
                                        </li>
                                        <li class="text-white mx-3">
                                            <font-awesome-icon icon="fa-solid fa-person-running" />
                                            <span class="text-sm text-white ml-2">1.34k</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="relative rounded-3xl mt-5 shadow-lg transform transition duration-500 group hover:scale-105">
                                <img src="assets/room1.jpg" class="rounded-3xl" alt="" />
                                <div
                                    class="absolute top-0 content_form overflow-hidden rounded-t-3xl h-full w-full p-3 opacity-0 group-hover:opacity-100 bg-opacity-25">
                                    <div class="top-0 h-full overflow-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                                        <span class="text-sm text-white">What is stranger than fiction? Only the Stranger Things
                                            itself - addictive PVP/RP play where you can fully immerse in
                                            open world of reimagined Hawkins, vibe with friends at
                                            Starcourt mall, chill at the arcade or night club, drive
                                            around or just go anywhere else in town, hangout or compete in
                                            shootout - it’s all up to you, it’s StrangerThingsWars</span>
                                    </div>
                                </div>
                                <div class="title_form bottom-0 absolute p-3 w-full rounded-b-3xl">
                                    <a href="">
                                        <h2 class="text-xl text-white title_room hover:text-orange-300 cursor-pointer">
                                            StrangerThingsWars
                                        </h2>
                                    </a>
                                    <ul class="flex mt-4">
                                        <li class="text-white">
                                            <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                                            <span class="text-sm text-white ml-2">12754</span>
                                        </li>
                                        <li class="text-white mx-3">
                                            <font-awesome-icon icon="fa-solid fa-person-running" />
                                            <span class="text-sm text-white ml-2">1.34k</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="relative rounded-3xl mt-5 shadow-lg transform transition duration-500 group hover:scale-105">
                                <img src="assets/room1.jpg" class="rounded-3xl" alt="" />
                                <div
                                    class="absolute top-0 content_form overflow-hidden rounded-t-3xl h-full w-full p-3 opacity-0 group-hover:opacity-100 bg-opacity-25">
                                    <div class="top-0 h-full overflow-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                                        <span class="text-sm text-white">What is stranger than fiction? Only the Stranger Things
                                            itself - addictive PVP/RP play where you can fully immerse in
                                            open world of reimagined Hawkins, vibe with friends at
                                            Starcourt mall, chill at the arcade or night club, drive
                                            around or just go anywhere else in town, hangout or compete in
                                            shootout - it’s all up to you, it’s StrangerThingsWars</span>
                                    </div>
                                </div>
                                <div class="title_form bottom-0 absolute p-3 w-full rounded-b-3xl">
                                    <a href="">
                                        <h2 class="text-xl text-white title_room hover:text-orange-300 cursor-pointer">
                                            StrangerThingsWars
                                        </h2>
                                    </a>
                                    <ul class="flex mt-4">
                                        <li class="text-white">
                                            <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                                            <span class="text-sm text-white ml-2">12754</span>
                                        </li>
                                        <li class="text-white mx-3">
                                            <font-awesome-icon icon="fa-solid fa-person-running" />
                                            <span class="text-sm text-white ml-2">1.34k</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "rooms_Holo",
    computed:{
        ...mapState("stores", {
            room: state => state.room
  
    })
    },
    mounted() {
        this.$store.dispatch("stores/getRoom").then(response=>{
            console.log(response)
            this.$store.commit('stores/SET_ROOM', response.data)

        })
        
    },
};
</script>

<style scoped>
.item_room{
    height:220px;
}

.bg-hero-pattern {
    height: 250px;
}

.item_room {
    background: rgba(22, 22, 22, 0.281);
}

.item_room .title_room:nth-of-type(2) {
    order: 2;
}

.title_form {
    background: rgba(36, 35, 35, 0.425);
}

.content_form {
    background: rgba(2, 2, 2, 0.527);
    height: 62%;
   
}
@layer utilities {
  .scrollbar::-webkit-scrollbar {
    width: 5px;
    height: 20px;
  }

  .scrollbar::-webkit-scrollbar-track {
    border-radius: 100vh;
    background: #161616;
  }

  .scrollbar::-webkit-scrollbar-thumb {
    background: #aca8a856;
    border-radius: 100vh;
    border: 3px solid #07070769;
  }

  .scrollbar::-webkit-scrollbar-thumb:hover {
    background: #c0a0b9;
  }
}

</style>