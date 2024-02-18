<script setup>
import {onMounted, ref} from 'vue'
import {useTranslation} from "i18next-vue";
import Menu from "./components/Menu.vue";
import Experience from "./components/Experience.vue";
import Education from "./components/Education.vue";
import Skills from "./components/Skills.vue";
import {sendMessage} from "./telegram.js";

const { i18next, t } = useTranslation();
const currentTab = ref('experience');
const langQuery = ref('');
const dataQuery = ref('');


onMounted(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  langQuery.value = urlParams.get('lang');
  dataQuery.value = urlParams.get('data');
  if (langQuery.value) {
    i18next.changeLanguage(langQuery.value);
  }
});
</script>

<template>
  <div class="max-w-4xl absolute top-8 left-1/2 -translate-x-1/2 text-center w-full">
    <Menu @changeTab="currentTab = $event; sendMessage('Browsing ' + $event)"/>
    <div class="w-full flex flex-col">
        <Experience v-if="currentTab === 'experience'"/>
        <Education v-if="currentTab === 'education'"/>
        <Skills v-if="currentTab === 'skills'"/>
    </div>
  </div>
</template>

