<script setup>
import {ref} from 'vue'
import {useTranslation} from "i18next-vue";
import Experience from "./components/Experience.vue";
import Education from "./components/Education.vue";

const { i18next, t } = useTranslation();
const currentTab = ref('experience');
</script>

<template>
  <div class="max-w-4xl">
    <div class="blurbox">
      <div class="flex gap-10 justify-between">
        <h1 class="place-self-center p-10 text-[2.8rem]">Anton Cherednichenko</h1>
        <img src="/photo.webp" alt="photo" class="h-64 w-64 p-10 rounded-full"/>
      </div>
      <div class="flex justify-evenly text-lg">

        <div @click="currentTab = 'experience'" class="w-full p-5 rounded-xl hover:backdrop-blur-lg hover:text-white text-gray-100 font-bold cursor-pointer">Experience</div>
        <div @click="currentTab = 'education'" class="w-full p-5 rounded-xl hover:backdrop-blur-lg hover:text-white text-gray-100 font-bold cursor-pointer">Education</div>
        <div @click="currentTab = 'about'" class="w-full p-5 rounded-xl hover:backdrop-blur-lg hover:text-white text-gray-100 font-bold cursor-pointer">About me</div>
        <div @click="currentTab = 'contacts'" class="w-full p-5 rounded-xl hover:backdrop-blur-lg hover:text-white text-gray-100 font-bold cursor-pointer">Contacts</div>

      </div>
    </div>
    <div class="w-full flex flex-col p-10">
        <Experience v-if="currentTab === 'experience'"/>
        <Education v-if="currentTab === 'education'"/>
    </div>
  </div>
</template>

