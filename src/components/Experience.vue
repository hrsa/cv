<script setup>
import {ref} from 'vue'
import {useTranslation} from "i18next-vue";
import Responsibility from "./Responsibility.vue";
import Popup from "./Popup.vue";

const { i18next, t } = useTranslation();
const selectedCompany = ref([1, 2, 3, 4, 5, 6, 7]);
const selectedResponsibility = ref(null);

const jobs = t('jobs', { returnObjects: true });

const handleSelectResponsibility = (responsibility) => {
  selectedResponsibility.value = responsibility;
}

const handleSelectCompany = (id) => {
  if (selectedCompany.value.includes(id)) {
    selectedCompany.value = selectedCompany.value.filter((item) => item !== id);
  } else {
    selectedCompany.value.push(id);
  }
}


</script>

<template>
  <div>
    <Teleport to="body">
      <Popup
          v-if="selectedResponsibility"
          :title="selectedResponsibility.name" :content="selectedResponsibility.description"
          @closePopup="selectedResponsibility = null"/>
    </Teleport>
    <div class="mb-5 grid w-full grid-cols-1 blurbox font-bold p-5"
         v-for="(job, index) in jobs" :key="index">
      <div
          class="m-auto grid w-full cursor-pointer gap-3 sm:gap-10 py-2 grid-cols-1 sm:grid-cols-[8rem_auto_100px]"
          @click="handleSelectCompany(job.id)"
      >
        <div class="m-auto flex flex-col text-center">
          <img class="m-auto rounded-full p-1 size-20"
               :src="`${job.logo}`" :alt="job.company"/>
          <div class="text-lg">{{ job.dates }}</div>
        </div>
        <div class="flex flex-col justify-center">
          <div class="text-xl">{{ job.company }}</div>
          <div class="text-xl font-bold">{{ job.title }}</div>
        </div>
        <div class="m-auto size-12 cursor-pointer justify-center rounded-full p-2"
             :class="selectedCompany.includes(job.id) ?  'max-sm:hidden' : ''"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="transition-transform duration-500"
               :class="selectedCompany.includes(job.id) ?  'rotate-180' : ''"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"/>
          </svg>
        </div>
      </div>
      <XyzTransition
          class="job-transition"
          xyz="perspective-1 back-5 duration-6">
        <div
            v-if="selectedCompany.includes(job.id)"
            class="m-auto mt-5 flex flex-wrap place-content-center text-center font-bold pb-5 mx-14 gap-4"
        >
          <Responsibility
              v-for="(responsibility, index) in job.responsibilities"
              :key="index"
              :responsibility="responsibility"
              @selectResponsibility="handleSelectResponsibility"/>
        </div>
      </XyzTransition>
    </div>
  </div>
</template>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
.job-transition {
  --xyz-scale-x: 100%;
  --xyz-scale-y: 0;
}
</style>
```