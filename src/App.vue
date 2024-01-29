<script setup>
import {ref} from 'vue'
import {useTranslation} from "i18next-vue";
import Experience from "./components/Experience.vue";
import Education from "./components/Education.vue";

const { i18next, t } = useTranslation();
const currentTab = ref('experience');
</script>

<template>
  <div class="max-w-4xl absolute top-8 left-1/2 -translate-x-1/2 text-center w-full">
    <div class="blurbox mb-5">
      <div class="flex flex-col sm:flex-row gap-2 sm:gap-10 justify-between w-full">
        <h1 class="place-self-center p-3 sm:p-10 text-2xl sm:text-4xl order-2">Anton Cherednichenko</h1>
        <img src="/photo.webp" alt="photo" class="size-32 2xl:size-64 p-3  sm:p-10 rounded-full order-1 sm:order-2 self-center"/>
      </div>
      <div class="grid grid-cols-2 sm:flex justify-evenly text-lg">

        <div @click="currentTab = 'experience'" class="w-full p-5 rounded-xl hover:backdrop-blur-lg hover:text-white text-gray-100 font-bold cursor-pointer">Experience</div>
        <div @click="currentTab = 'education'" class="w-full p-5 rounded-xl hover:backdrop-blur-lg hover:text-white text-gray-100 font-bold cursor-pointer">Education</div>
        <div @click="currentTab = 'about'" class="w-full p-5 rounded-xl hover:backdrop-blur-lg hover:text-white text-gray-100 font-bold cursor-pointer">About me</div>
        <div @click="currentTab = 'contacts'" class="w-full p-5 rounded-xl hover:backdrop-blur-lg hover:text-white text-gray-100 font-bold cursor-pointer">Contacts</div>

      </div>
    </div>
    <div class="w-full flex flex-col">
        <Experience v-if="currentTab === 'experience'"/>
        <Education v-if="currentTab === 'education'"/>
    </div>
  </div>
</template>

