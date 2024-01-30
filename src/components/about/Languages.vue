<script setup>
import {useTranslation} from "i18next-vue";
import {computed} from "vue";
const {i18next, t} = useTranslation();

const languages = computed(() => t('about.languages', {returnObjects: true}));

const getBackground = (level) => {
  switch (level) {
    case 4:
      return 'bg-green-600';
    case 3:
      return 'bg-yellow-600'
    case 2:
      return 'bg-orange-600';
    case 1:
      return 'bg-purple-700';
    default:
      return 'bg-gray-600';
  }
}

</script>

<template>
  <div class="mb-5 grid w-full grid-cols-1 blurbox font-bold">
    <p class="text-2xl font-bold my-5 px-5">{{ languages.title }}</p>
    <div class="grid max-[650px]:grid-cols-1 min-[650px]:grid-cols-2 m-auto">
      <div
          v-for="(language, index) in languages.list" :key="index"
          class="grid grid-cols-[2.5rem_auto_7rem] w-full gap-5 mb-2 text-lg px-5"
      >
        <img :alt="language.name"
             :src="`${language.icon}`" class="m-auto rounded-xl p-1 size-10"/>
        <p class="place-self-center justify-self-start">{{ language.name }}</p>
        <div
            :class="getBackground(language.level)"
            class="rounded-full px-3 place-self-center text-base w-full justify-self-start"
        >
          {{ language.mastery }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>