<script setup>
import {useTranslation} from "i18next-vue";
import LanguageSwitch from "./LanguageSwitch.vue";

const emit = defineEmits(['changeTab']);

const {i18next, t} = useTranslation();

</script>

<template>
  <div class="blurbox mb-5">
    <LanguageSwitch class="pt-5"/>
    <div class="flex flex-col sm:flex-row gap-2 sm:gap-10 justify-between w-full">
      <div class="flex flex-col gap-5 place-self-center p-3 sm:p-10 justify-center order-2">
        <h1 class="text-2xl sm:text-4xl ">{{ t('firstname') }} {{ t('lastname') }}</h1>
        <h2 class="text-2xl sm:text-3xl">{{ t('post') }}</h2>
        <div class="flex gap-5 justify-around">
          <div v-for="link in t('links', {returnObjects: true})" :key="link.name">
            <a :href="link.url" target="_blank" rel="noopener noreferrer">
              <img :alt="link.name" :src="link.icon" class="size-10"/>
            </a>
          </div>
        </div>
      </div>
      <img src="/photo.webp" alt="photo" class="size-32 sm:size-64 p-3  sm:p-10 rounded-full order-1 sm:order-2 self-center"/>
    </div>
    <div class="flex justify-between text-lg">

      <div @click="emit('changeTab', 'experience')" class="w-full p-5 rounded-xl hover:backdrop-blur-lg hover:text-white text-gray-100 font-bold cursor-pointer">
        {{ t('experience') }}
      </div>
      <div @click="emit('changeTab', 'education')" class="w-full p-5 rounded-xl hover:backdrop-blur-lg hover:text-white text-gray-100 font-bold cursor-pointer">
        {{ t('education') }}
      </div>
      <div @click="emit('changeTab', 'skills')" class="w-full p-5 rounded-xl hover:backdrop-blur-lg hover:text-white text-gray-100 font-bold cursor-pointer">
        {{ t('skills') }}
      </div>
    </div>
  </div>
</template>