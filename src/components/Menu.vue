<script setup>
import {useTranslation} from "i18next-vue";
import {getImage} from "../globals.js";

const emit = defineEmits(['changeTab']);

const {i18next, t} = useTranslation();


</script>

<template>
  <div class="blurbox mb-5">
    <div class="flex flex-col sm:flex-row gap-2 sm:gap-10 justify-between w-full">
      <h1 class="place-self-center p-3 sm:p-10 text-2xl sm:text-4xl order-2">Anton Cherednichenko</h1>
      <img src="/photo.webp" alt="photo" class="size-32 sm:size-64 p-3  sm:p-10 rounded-full order-1 sm:order-2 self-center"/>
    </div>
    <div class="grid grid-cols-2 sm:flex justify-evenly text-lg">

      <div @click="emit('changeTab', 'experience')" class="w-full p-5 rounded-xl hover:backdrop-blur-lg hover:text-white text-gray-100 font-bold cursor-pointer">Experience</div>
      <div @click="emit('changeTab', 'education')" class="w-full p-5 rounded-xl hover:backdrop-blur-lg hover:text-white text-gray-100 font-bold cursor-pointer">Education</div>
      <div @click="emit('changeTab', 'about')" class="w-full p-5 rounded-xl hover:backdrop-blur-lg hover:text-white text-gray-100 font-bold cursor-pointer">About me</div>
      <div @click="emit('changeTab', 'contacts')" class="w-full p-5 rounded-xl hover:backdrop-blur-lg hover:text-white text-gray-100 font-bold cursor-pointer">Contacts</div>

    </div>
  </div>
</template>