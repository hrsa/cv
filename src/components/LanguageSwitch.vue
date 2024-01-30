<script setup>
import {useTranslation} from "i18next-vue";
const {i18next, t} = useTranslation();
</script>

<template>
  <div>
    <div
        class="m-auto grid grid-rows-1 w-32 bg-[rgba(30,30,30,0.4)] backdrop-blur-2xl rounded-full h-8 overflow-x-hidden">
      <div
          class="w-fit cursor-pointer flex place-items-center font-bold text-lg transition-transform duration-500 ease-in-out"
          :class="i18next.resolvedLanguage === 'fr' ? '' : '-translate-x-[5.95rem]'"
          @click="i18next.changeLanguage(i18next.resolvedLanguage === 'fr' ? 'en' : 'fr')"
      >
        <div class="w-[7rem]">{{ t('languages.fr') }}</div>
        <img :src="i18next.resolvedLanguage === 'fr' ? '/flags/1x1/fr.svg' : '/flags/1x1/gb.svg'"
             :alt="t('languages.' + i18next.resolvedLanguage)" class="size-8 rounded-full"/>
        <div class="w-[6.75rem]">{{ t('languages.en') }}</div>
      </div>
    </div>
  </div>
</template>
