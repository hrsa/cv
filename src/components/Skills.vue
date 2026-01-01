<script setup>
import {useTranslation} from "i18next-vue";
import Languages from "./about/Languages.vue";
import Tech from "./about/Tech.vue";

const {i18next, t} = useTranslation();

const languages = t('about.languages', {returnObjects: true});


</script>

<template>
  <div class="cursor-default">
    <Tech />
    <Languages />
  </div>
</template>