<script setup>
import {ref} from 'vue'
import {useTranslation} from "i18next-vue";
import Menu from "./components/Menu.vue";
import Experience from "./components/Experience.vue";
import Education from "./components/Education.vue";
import About from "./components/About.vue";

const { i18next, t } = useTranslation();
const currentTab = ref('experience');
</script>

<template>
  <div class="max-w-4xl absolute top-8 left-1/2 -translate-x-1/2 text-center w-full">
    <Menu @changeTab="currentTab = $event"/>
    <div class="w-full flex flex-col">
        <Experience v-if="currentTab === 'experience'"/>
        <Education v-if="currentTab === 'education'"/>
        <About v-if="currentTab === 'about'"/>
    </div>
  </div>
</template>

