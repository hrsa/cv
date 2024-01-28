<script setup>
import {ref} from 'vue'
import {useTranslation} from "i18next-vue";
import {getImage} from "../globals.js";

const {i18next, t} = useTranslation();
const selectedCompany = ref([]);
const selectedResponsibility = ref(null);

const diplomas = t('diplomas', {returnObjects: true});

</script>

<template>
  <div>
    <div v-for="(diploma, index) in diplomas"
         class="mb-5 grid w-full grid-cols-1 blurbox font-bold">
      <p class="text-2xl font-bold my-5">{{ diploma.title }} ({{ diploma.date }})</p>
      <div class="mb-6 text-lg"
           v-if="diploma.comment"
           v-html="diploma.comment"
      />
      <div
          class="m-auto flex flex-wrap w-full gap-10 py-2 grid-cols-2"
      >
        <div v-for="school in diploma.school" class="m-auto flex place-content-center text-center font-bold">
          <div class="grid grid-cols-[5rem_12rem] gap-1 max-w-72">
            <img :alt="school.name"
                 :src="getImage(school.logo)" class="m-auto rounded-full p-1 size-20"/>
            <p class="place-self-center">{{ school.name }} ({{ school.city }})</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
```