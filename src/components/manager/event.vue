<template>
  <div>
    <h2 class="text-2xl font-bold">Quản trị Event</h2>
    <button class="bg-primary px-4 py-2 rounded-md text-white capitalize mt-5" @click="add()">create Event</button>
    
    <div id="medium-modal" v-if="showhide_FormModel"  tabindex="-1" class="add__sv fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full" >
      <div class="relative w-full h-full max-w-lg md:h-auto m-auto">
        
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            
            <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white" v-if="editMode == true ">
                    Edit student
                </h3>
                <h3 v-else class="text-xl font-medium text-gray-900 dark:text-white">
                    Create student
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="medium-modal" @click="closeModel()">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span> 
                </button>
            </div>
             
              <div class="p-6 space-y-6">
                <div class="row flex">
                  <div class="grid-cols-6">
                    <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2" >name:</label>
                    <input  placeholder="" class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-2 px-3 mb-3 text-xl leading-tight focus:outline-none focus:bg-white"  ref="name_event"  v-model="list_event.name_event"  />
                  </div>
                  <div class="grid-cols-6 ml-12">
                    <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2">avata:</label>
                   <input  ref="image1" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2"
                    :class="errors && errors.image_room ? 'border-red-500' : ''" type="file">
                  </div>
                </div>
                <div class="row flex">
                  <div class="grid-cols-6">
                    <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2" >email:</label>
                    <input  placeholder="" class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-2 px-3 mb-3 text-xl leading-tight focus:outline-none focus:bg-white" ref="email_event"  v-model="list_event.email_event" />
                  </div>
                  <div class="grid-cols-6 ml-12">
                    <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2">image:</label>
                   <input  ref="image" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2"
                    :class="errors && errors.image_room ? 'border-red-500' : ''" type="file">
                  </div>
                </div>
                
                <div class="row flex">
                    <div class="grid-cols-4">
                    <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2" >member:</label>
                    <input  placeholder="" class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-2 px-3 mb-3 text-xl leading-tight focus:outline-none focus:bg-white" ref="member_event"  v-model="list_event.member_event"/>
                  </div>
                  
                  <div class="grid-cols-4 ml-6">
                    <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2" >time:</label>
                    <input  type="date" placeholder="" class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-2 px-3 mb-3 text-xl leading-tight focus:outline-none focus:bg-white" ref="time_event"  v-model="list_event.time_event" />
                   
                  </div>
                  <div class="grid-cols-4 ml-6">
                    <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2" >category:</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   v-model="list_event.category_event">
                        <option selected>Soon</option>
                        <option value="US">Popular</option>
                        <option value="CA">official</option>
                    </select>
                  </div>
                </div>
                <div class="row ">
                  
                  <div class="">
                    <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2" >content:</label>
                    <textarea id="message" rows="4" type="text"
                                        :class="errors && errors.content_room ? 'border-red-500' : ''" ref="content_event"
                                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           v-model="list_event.content_event"
                                        placeholder="Write your thoughts here..."></textarea>

                  </div>
                </div>
              </div>
              
              <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button data-modal-hide="medium-modal" type="button"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="savechange()" >Save changes</button>
                  <button data-modal-hide="medium-modal" type="button"  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="closeModel()">Close</button>
              </div>
          </div>
      </div>
  </div>

    <form class="mt-5 w-2/6">
            <label for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input type="search" id="default-search" 
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..." required>
                <button type="submit"
                    class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
    </form>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            avata
                        </th>
                        <th scope="col" class="px-6 py-3">
                            email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            image
                        </th>
                        <th scope="col" class="px-6 py-3">
                            content
                        </th>
                        <th scope="col" class="px-6 py-3">
                            category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            member
                        </th>
                        <th scope="col" class="px-6 py-3">
                            time
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(item, index) in events"
                        :key="index">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ item.id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ item.name_event }}
                        </td>
                        <td class="px-6 py-4">
                            <img :src="item.avata_event" class="w-full h-full" alt="">
                           
                        </td>
                        
                        <td class="px-6 py-4">
                            {{ item.email_event }}
                        </td>
                        <td class="px-6 py-4 w-1/6 h-1/6">
                            <img :src="item.image_event" class="w-full h-full" alt="">
                          
                        </td>
                        <td class="px-6 py-4">
                            {{ item.content_event }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.category_event }}
                            
                           
                        </td>
                        <td class="px-6 py-4">
                            {{ item.member_event }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.time_event }}
                        </td>
                        <td class="px-6 py-4 flex">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2"
                                @click="editDataEvent(item)">Edit</a>
                            <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2"
                                @click="deleteDataEvent(item.id)">Delete</button>
                        </td>

                    </tr>

                </tbody>
            </table>
        </div>
  
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
name: 'manager-event',
data() {
        return {
            errors: null,
            search: "",
            list_event: {
                name_event: null,
                avata_event: null,
                email_event: null,
                image_event: null,
                content_event: null,
                category_event: null,
                member_event: null,
                time_event: null,
            }
        }
    },
    computed:{
        ...mapState("stores", {
                events: state => state.events,
            
            }),
        showhide_FormModel() {
            return this.$store.state.stores.showhide_FormModel
        },
        editMode() {
            return this.$store.state.stores.editMode
        },
    },
    mounted() {
            this.$store.dispatch("stores/getEvent").then(response => {
                console.log(response)
                this.$store.commit('stores/SET_EVENT', response.data)
            })

    },
    methods:{
        add() {
            this.$store.commit('stores/showFormModel')
        },
        closeModel() {
            this.$store.commit('stores/closeFormModel')
        },
        editDataEvent(item) {
            console.log("item", item)
            this.$store.commit('stores/EditFormModelEvent', item.id)
            this.list_event.name_event = item.name_event
            this.list_event.avata_event = item.avata_event
            this.list_event.email_event = item.email_event
            this.list_event.image_event = item.image_event
            this.list_event.content_event = item.content_event
            this.list_event.category_event = item.category_event
            this.list_event.member_event = item.member_event
            this.list_event.time_event = item.time_event
        },
        savechange() {
            const formData = new FormData();
            formData.append("name_event", this.$refs.name_event.value);
            formData.append("avata_event", this.$refs.image1.files[0] ? this.$refs.image1.files[0]: '' );
            formData.append("email_event", this.$refs.email_event.value);
            formData.append("image_event", this.$refs.image.files[0] ? this.$refs.image.files[0]: '' );
            formData.append("content_event", this.$refs.content_event.value);
            formData.append("category_event", this.list_event.category_event);
            formData.append("member_event", this.$refs.member_event.value);
            formData.append("time_event", this.$refs.time_event.value);
            console.log(formData.get('image_room'))
            if (this.editMode) {

                this.$store.dispatch('stores/editEvent', { formData: formData, roomById: this.$store.state.stores.roomById }).then(response => {
                    console.log(response)
                    this.$store.commit('stores/EDIT_EVENT', response.data)

                    this.$store.commit('stores/closeFormModel')
                    this.list_event= {
                        name_event: null,
                        avata_event: null,
                        email_event: null,
                        image_event: null,
                        content_event: null,
                        category_event: null,
                        member_event: null,
                        time_event: null,
                    }

                }).catch(error => {
                    if (error.response.status == 422) {
                        console.log(error.response.data)
                        this.errors = error.response.data
                    }
                })
            }
            else {
                this.$store.dispatch('stores/addEvent', formData).then(response => {
                    console.log(response)
                    this.$store.commit('stores/ADD_EVENT', response.data)

                    this.$store.commit('stores/closeFormModel')
                    this.list_event= {
                        name_event: null,
                        avata_event: null,
                        email_event: null,
                        image_event: null,
                        content_event: null,
                        category_event: null,
                        member_event: null,
                        time_event: null,
                    }

                }).catch(error => {
                    if (error.response.status == 422) {
                        console.log(error.response.data)
                        this.errors = error.response.data
                    }
                })
            }
          

        },
        deleteDataEvent(id) {
            console.log(id);
            this.$store.dispatch('stores/deleteEvent', id).then(response => {
                this.$store.commit('stores/DELETE_EVENT', response.data)
                console.log(response)

            })
        },
    }
}
</script>

<style>

</style>