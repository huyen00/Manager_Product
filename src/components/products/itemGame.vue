<template>
  <div>
    <div class="container mx-auto">
      <div class="flex">
        <div class="w-3/5 mx-3 image_slideShow">
          <img src="assets/item5.jpg" class="rounded-md" alt="" />
        </div>
        <div class="w-2/5 mx-3">
          <div>
            <h2 class="text-2xl font-bold">^GenericCourt</h2>
            <a href="" class="text-sm uppercase text-gray-500"
              ><span>@kdlfbzxbch</span></a
            >
            <p class="mt-5">Court is made mainly for RRBA League games</p>
          </div>
          <div class="mt-6">
            <button
              class="py-2 px-10 text-xl mx-3 rounded-lg bg-orange-500 uppercase text-white"
            >
              Play
            </button>
            <button
              class="py-2 px-10 text-xl mx-3 rounded-lg bg-orange-500 uppercase text-white"
            >
              meetup
            </button>
          </div>
          <hr class="w-full h-px bg-gray-200 border-0 dark:bg-gray-700 mt-5" />
          <div class="justify-between flex my-4">
            <div class="flex text-xl">
              <font-awesome-icon icon="fa-solid fa-thumbs-up" />
              <p>155</p>
            </div>
            <div class="text-xl">
              <font-awesome-icon icon="fa-solid fa-share" />
            </div>
          </div>
          <div>
            <div class="flex flex-wrap justify-start">
              <div class="bg-gray-500 mx-2 my-1 rounded-md p-1 text-white">
                #hangout
              </div>
              <div class="bg-gray-500 mx-2 my-1 rounded-md p-1 text-white">
                #hangouthangout
              </div>
              <div class="bg-gray-500 mx-2 my-1 rounded-md p-1 text-white">
                #hangout
              </div>
              <div class="bg-gray-500 mx-2 my-1 rounded-md p-1 text-white">
                #hangout
              </div>
              <div class="bg-gray-500 mx-2 my-1 rounded-md p-1 text-white">
                #hangout
              </div>
              <div class="bg-gray-500 mx-2 my-1 rounded-md p-1 text-white">
                #hangout
              </div>
              <div class="bg-gray-500 mx-2 my-1 rounded-md p-1 text-white">
                #hangout
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gradient-to-r bg-orange-300 px-6 py-4 rounded-md my-10">
        <div class="grid grid-cols-4 gap-4">
          <div class="text-center">
            <h2 class="capitalize text-white font-bold">room visits</h2>
            <p class="text-white text-sm">45.7k</p>
          </div>
          <div class="text-center">
            <h2 class="capitalize text-white font-bold">Created</h2>
            <p class="text-white text-sm">26/02/2012</p>
          </div>
          <div class="text-center">
            <h2 class="capitalize text-white font-bold">Capacity</h2>
            <p class="text-white text-sm">795672k</p>
          </div>
          <div class="text-center">
            <h2 class="capitalize text-white font-bold">Platforms</h2>
            <div class="flex justify-center text-white">
              <font-awesome-icon icon="fa-solid fa-mobile" class="mx-1" />
              <font-awesome-icon icon="fa-solid fa-laptop" class="mx-1" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="menu_tab">
          <div class="grid grid-cols-2 gap-4 py-3">
            <div class="text-2xl text-center border-b " :class="tab1 ? ' border-b border-orange-500 text-orange-500': ''"  @click="showTab1()">
              <font-awesome-icon icon="fa-solid fa-camera" />
            </div>
            <div class="text-2xl text-center " :class="tab2 ? ' border-b border-orange-500 text-orange-500': ''" @click="showTab2()">
              <font-awesome-icon icon="fa-solid fa-calendar-days" />
            </div>
          </div>
        </div>
        <div class="content_tab my-5">
          <div class="content1" v-if="tab1">
            <div class="px-5 py-2">
              <h2 class="capitalize text-2xl font-bold">Photo In This Room</h2>
              <hr
                class="w-full h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"
              />
            </div>
            <div class="shadow-2xl relative">
              <div class="grid grid-cols-2 gap-4 px-5 justify-center pb-4">
                <div>
                  <div class="mySlides">
                    <div
                      class="image1 w-full object-cover rounded-md h-full"
                    ></div>
                  </div>
                  <div class="mySlides hidden">
                    <div
                      class="image2 w-full object-cover rounded-md h-full"
                    ></div>
                  </div>
                  <div class="mySlides hidden">
                    <div
                      class="image3 w-full object-cover rounded-md h-full"
                    ></div>
                  </div>
                  <div class="mySlides hidden">
                    <div
                      class="image4 w-full object-cover rounded-md h-full"
                    ></div>
                  </div>
                  <div class="mySlides hidden">
                    <div
                      class="image5 w-full object-cover rounded-md h-full"
                    ></div>
                  </div>
                  <div class="mySlides hidden">
                    <div
                      class="image6 w-full object-cover rounded-md h-full"
                    ></div>
                  </div>
                  <div class="mySlides hidden">
                    <div
                      class="image7 w-full object-cover rounded-md h-full"
                    ></div>
                  </div>
                  <div class="mySlides hidden">
                    <div
                      class="image8 w-full object-cover rounded-md h-full"
                    ></div>
                  </div>
                  <div class="mySlides hidden">
                    <div
                      class="image9 w-full object-cover rounded-md h-full"
                    ></div>
                  </div>
                  <div class="mySlides hidden">
                    <div
                      class="image10 w-full object-cover rounded-md h-full"
                    ></div>
                  </div>
                  <div class="mySlides hidden">
                    <div
                      class="image11 w-full object-cover rounded-md h-full"
                    ></div>
                  </div>
                </div>
                <div class="ml-4">
                  <div class="">
                    <h2 class="font-bold capitalize text-black text-2xl">
                      Players In This photo
                    </h2>
                    <p class="text-sm text-gray-500">No Tagged players</p>
                  </div>
                  <hr
                    class="w-4/5 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"
                  />
                  <div>
                    <h2 class="font-bold capitalize text-black text-2xl">
                      34 cheered
                    </h2>
                    <button
                      class="border rounded-md border-gray-500 bg-gray-300 text-gray-600 px-10 py-2 text-xl hover:bg-gray-400 my-2"
                    >
                      <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                      Cheer
                    </button>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-5 gap-4 px-5 justify-center pb-4">
                <div>
                  <img
                    class="image1 w-full object-cover description h-26 hover:opacity-100 cursor-pointer rounded-md transform transition duration-500 hover:scale-105"
                    src="#"
                    @click="currentSlide(1)"
                    alt="Dog's Nose"
                  />
                </div>
                <div>
                  <img
                    class="image2 w-full object-cover description h-26 hover:opacity-100 cursor-pointer rounded-md transform transition duration-500 hover:scale-105"
                    src="#"
                    @click="currentSlide(2)"
                    alt="Lawnmower"
                  />
                </div>
                <div>
                  <img
                    class="image3 w-full object-cover description h-26 hover:opacity-100 cursor-pointer rounded-md transform transition duration-500 hover:scale-105"
                    src="#"
                    @click="currentSlide(3)"
                    alt="Globe"
                  />
                </div>
                <div>
                  <img
                    class="image4 w-full object-cover description h-26 hover:opacity-100 cursor-pointer rounded-md transform transition duration-500 hover:scale-105"
                    src="#"
                    @click="currentSlide(4)"
                    alt="Optical Illusion"
                  />
                </div>
                <div>
                  <img
                    class="image5 w-full object-cover description h-26 hover:opacity-100 cursor-pointer rounded-md transform transition duration-500 hover:scale-105"
                    src="#"
                    @click="currentSlide(5)"
                    alt="Lips"
                  />
                </div>
                <div>
                  <img
                    class="image6 w-full object-cover description h-26 hover:opacity-100 cursor-pointer rounded-md transform transition duration-500 hover:scale-105"
                    src="#"
                    @click="currentSlide(6)"
                    alt="Dog's Nose"
                  />
                </div>
                <div>
                  <img
                    class="image7 w-full object-cover description h-26 hover:opacity-100 cursor-pointer rounded-md transform transition duration-500 hover:scale-105"
                    src="#"
                    @click="currentSlide(7)"
                    alt="Lawnmower"
                  />
                </div>
                <div>
                  <img
                    class="image8 w-full object-cover description h-26 hover:opacity-100 cursor-pointer rounded-md transform transition duration-500 hover:scale-105"
                    src="#"
                    @click="currentSlide(8)"
                    alt="Globe"
                  />
                </div>
                <div>
                  <img
                    class="image9 w-full object-cover description h-26 hover:opacity-100 cursor-pointer rounded-md transform transition duration-500 hover:scale-105"
                    src="#"
                    @click="currentSlide(9)"
                    alt="Optical Illusion"
                  />
                </div>
                <div>
                  <img
                    class="image10 w-full object-cover description h-26 hover:opacity-100 cursor-pointer rounded-md transform transition duration-500 hover:scale-105"
                    src="#"
                    @click="currentSlide(10)"
                    alt="Lips"
                  />
                </div>
                <div id="imgae">
                  <img
                    class="image11 w-full object-cover description h-26 hover:opacity-100 cursor-pointer rounded-md transform transition duration-500 hover:scale-105"
                    src="#"
                    @click="currentSlide(11)"
                    alt="Lips"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            class="content2"
            v-if="tab2"
            id="tabs-home"
            role="tabpanel"
            aria-labelledby="tabs-home-tab"
            data-te-tab-active
          >
            <div class="grid grid-cols-3 gap-4  py-3">
              <div class="item_event">
                <div class="p-4 flex">
                  <img src="assets/avt_event.jpg" class="rounded-full" alt="" />
                  <div class="ml-4">
                    <h2 class="text-md font-bold block">Party!</h2>
                    <a href="" class="text-sm text-gray-500">@fhklhfyhjbn</a>
                  </div>
                </div>
                <div
                  class="relative transform transition duration-500 group hover:scale-100"
                >
                  <img src="assets/event1.jpg" alt="" />
                  <div
                    class="absolute top-0 item_text content_form overflow-hidden h-full w-full p-3 opacity-0 group-hover:opacity-100 bg-opacity-25"
                  >
                    <div
                      class="top-0 h-full overflow-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200"
                    >
                      <span class="text-sm text-white"
                        >What is stranger than fiction? Only the Stranger Things
                        itself - addictive PVP/RP play where you can fully
                        immerse in open world of reimagined Hawkins, vibe with
                        friends at Starcourt mall, chill at the arcade or night
                        club, drive around or just go anywhere else in town,
                        hangout or compete in shootout - it’s all up to you,
                        it’s StrangerThingsWars</span
                      >
                    </div>
                  </div>
                </div>

                <div class="p-2">
                  <span class="text-xs text-gray-500"
                    >Mar 1st, 5:00am - 9:00am</span
                  >
                  <p class="uppercase text-xs">13 ATTENDING</p>
                </div>
              </div>

              <div class="item_event">
                <div class="p-4 flex">
                  <img src="assets/avt_event.jpg" class="rounded-full" alt="" />
                  <div class="ml-4">
                    <h2 class="text-md font-bold block">Party!</h2>
                    <a href="" class="text-sm text-gray-500">@fhklhfyhjbn</a>
                  </div>
                </div>
                <div
                  class="relative transform transition duration-500 group hover:scale-100"
                >
                  <img src="assets/event3.jpg" alt="" />
                  <div
                    class="absolute top-0 item_text content_form overflow-hidden h-full w-full p-3 opacity-0 group-hover:opacity-100 bg-opacity-25"
                  >
                    <div
                      class="top-0 h-full overflow-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200"
                    >
                      <span class="text-sm text-white"
                        >What is stranger than fiction? Only the Stranger Things
                        itself - addictive PVP/RP play where you can fully
                        immerse in open world of reimagined Hawkins, vibe with
                        friends at Starcourt mall, chill at the arcade or night
                        club, drive around or just go anywhere else in town,
                        hangout or compete in shootout - it’s all up to you,
                        it’s StrangerThingsWars</span
                      >
                    </div>
                  </div>
                </div>

                <div class="p-2">
                  <span class="text-xs text-gray-500"
                    >Mar 1st, 5:00am - 9:00am</span
                  >
                  <p class="uppercase text-xs">13 ATTENDING</p>
                </div>
              </div>
              <div class="item_event">
                <div class="p-4 flex">
                  <img src="assets/avt_event.jpg" class="rounded-full" alt="" />
                  <div class="ml-4">
                    <h2 class="text-md font-bold block">Party!</h2>
                    <a href="" class="text-sm text-gray-500">@fhklhfyhjbn</a>
                  </div>
                </div>
                <div
                  class="relative transform transition duration-500 group hover:scale-100"
                >
                  <img src="assets/event1.jpg" alt="" />
                  <div
                    class="absolute top-0 item_text content_form overflow-hidden h-full w-full p-3 opacity-0 group-hover:opacity-100 bg-opacity-25"
                  >
                    <div
                      class="top-0 h-full overflow-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200"
                    >
                      <span class="text-sm text-white"
                        >What is stranger than fiction? Only the Stranger Things
                        itself - addictive PVP/RP play where you can fully
                        immerse in open world of reimagined Hawkins, vibe with
                        friends at Starcourt mall, chill at the arcade or night
                        club, drive around or just go anywhere else in town,
                        hangout or compete in shootout - it’s all up to you,
                        it’s StrangerThingsWars</span
                      >
                    </div>
                  </div>
                </div>

                <div class="p-2">
                  <span class="text-xs text-gray-500"
                    >Mar 1st, 5:00am - 9:00am</span
                  >
                  <p class="uppercase text-xs">13 ATTENDING</p>
                </div>
              </div>
              <div class="item_event">
                <div class="p-4 flex">
                  <img src="assets/avt_event.jpg" class="rounded-full" alt="" />
                  <div class="ml-4">
                    <h2 class="text-md font-bold block">Party!</h2>
                    <a href="" class="text-sm text-gray-500">@fhklhfyhjbn</a>
                  </div>
                </div>
                <div
                  class="relative transform transition duration-500 group hover:scale-100"
                >
                  <img src="assets/event1.jpg" alt="" />
                  <div
                    class="absolute top-0 item_text content_form overflow-hidden h-full w-full p-3 opacity-0 group-hover:opacity-100 bg-opacity-25"
                  >
                    <div
                      class="top-0 h-full overflow-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200"
                    >
                      <span class="text-sm text-white"
                        >What is stranger than fiction? Only the Stranger Things
                        itself - addictive PVP/RP play where you can fully
                        immerse in open world of reimagined Hawkins, vibe with
                        friends at Starcourt mall, chill at the arcade or night
                        club, drive around or just go anywhere else in town,
                        hangout or compete in shootout - it’s all up to you,
                        it’s StrangerThingsWars</span
                      >
                    </div>
                  </div>
                </div>

                <div class="p-2">
                  <span class="text-xs text-gray-500"
                    >Mar 1st, 5:00am - 9:00am</span
                  >
                  <p class="uppercase text-xs">13 ATTENDING</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemGame",
  data() {
    return {
      slideIndex: 1,
    };
  },
  computed:{
    tab1(){
      return this.$store.state.stores.tab1
    },
    tab2(){
      return this.$store.state.stores.tab2
      
    },
    
  },
  mounted() {},
  methods: {
    showTab1(){
      this.$store.commit('stores/showHideTab1')
    },
    showTab2(){
      this.$store.commit('stores/showHideTab2')
    },
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },
    currentSlide(n) {
      this.showSlides((this.slideIndex = n));
      document.getElementById("image").style.border = "1px solid red";
    },
    showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("description");
      var captionText = document.getElementById("caption");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" opacity-100", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " opacity-100";
      captionText.innerHTML = dots[this.slideIndex - 1].alt;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1080px;
}
.mySlides {
  height: 350px;
}
.menu_tab {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
}
/* .content_tab {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
} */
.image1 {
  content: url("https://img.rec.net/32w4pp1hhv67mfvesdbvcxndl.jpg?width=512");
}

.image2 {
  content: url("https://img.rec.net/dqa2s1lm9gfz2n60ke9gnzwlv.jpg?width=512");
}

.image3 {
  content: url("https://img.rec.net/7m0jp5u0qmkzzk69h0u6xx9es.jpg?width=512");
}

.image4 {
  content: url("https://img.rec.net/2i1kpu7h1bgv7otlmrg9ufx7p.jpg?width=512");
}

.image5 {
  content: url("https://img.rec.net/bjoke3yf3wpgiozk6d4ivr936.jpg?width=512");
}

.image6 {
  content: url("https://img.rec.net/d7slx68zcl9mbztbtgr9vyu25.jpg?width=512");
}

.image7 {
  content: url("https://img.rec.net/2n3zyqa9wdojgtcl8ttfjoe0l.jpg?width=512");
}
.image8 {
  content: url("https://img.rec.net/bvqbopqs189wwkai51zmkqhiy.jpg?width=512");
}

.image9 {
  content: url("https://img.rec.net/bjoke3yf3wpgiozk6d4ivr936.jpg?width=512");
}

.image10 {
  content: url("https://img.rec.net/2i1kpu7h1bgv7otlmrg9ufx7p.jpg?width=512");
}

.image11 {
  content: url("https://img.rec.net/bjoke3yf3wpgiozk6d4ivr936.jpg?width=512");
}
.item_event{
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}
</style>