<script setup>
import {useTranslation} from "i18next-vue";
import {computed} from "vue";

const {i18next, t} = useTranslation();

const diplomas = computed(() => t('diplomas', {returnObjects: true}));
const lifelong = computed(() => t('lifelong', {returnObjects: true}));

</script>

<template>
  <div>
    <div
         class="mb-5 grid w-full grid-cols-1 blurbox font-bold">
      <p class="text-2xl font-bold my-5 px-5">{{ t('courses') }}</p>
      <div
          class="m-auto max-[822px]:grid max-[822px]:grid-cols-2 min-[822px]:flex min-[822px]:flex-wrap w-full gap-3 py-2 grid-cols-2  max-w-[90%] mb-5"
      >
        <div v-for="(course, index) in lifelong" :key="index"
            class="m-auto flex place-content-center text-center font-bold">
          <div class="grid grid-cols-[5rem_6rem] gap-2">
            <img :alt="course.name"
                 :src="course.logo" class="m-auto rounded-full p-1 size-20"/>
            <p class="place-self-center text-xl">{{ course.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div v-for="(diploma, index) in diplomas" :key="index"
         class="mb-5 grid w-full grid-cols-1 blurbox font-bold">
      <p class="text-2xl font-bold my-5 px-5">{{ diploma.title }} ({{ diploma.date }})</p>
      <div class="mb-6 text-lg px-5"
           v-if="diploma.comment"
           v-html="diploma.comment"
      />
      <div
          class="m-auto flex flex-wrap w-full gap-10 py-2 grid-cols-2"
      >
        <div v-for="school in diploma.school" class="m-auto flex place-content-center text-center font-bold">
          <div class="grid grid-cols-[5rem_12rem] gap-1 max-w-[90%]">
            <img :alt="school.name"
                 :src="`${school.logo}`" class="m-auto rounded-full p-1 size-20"/>
            <p class="place-self-center">{{ school.name }} ({{ school.city }})</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>