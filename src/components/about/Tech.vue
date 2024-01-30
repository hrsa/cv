<script setup>
import {useTranslation} from "i18next-vue";
import {computed} from "vue";

const {i18next, t} = useTranslation();

const tech = computed(() => t('about.tech', {returnObjects: true}));

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
  <div class="mb-5 grid w-full grid-cols-1 blurbox font-bold pb-5">
    <p class="text-2xl font-bold my-5 px-5">{{ tech.title }}</p>
    <div class="m-auto flex flex-wrap w-4/5 gap-x-5 gap-y-3 my-2 place-content-center">
      <div
          v-for="(language, index) in tech.languages" :key="index"
          class="bg-red-600 rounded-full w-fit px-3 py-1 text-base"
      >
        {{ language }}
      </div>
    </div>

    <div class="m-auto flex flex-wrap w-4/5 gap-x-5 gap-y-3 my-2 place-content-center">
      <div
          v-for="(framework, index) in tech.frameworks" :key="index"
          class="bg-orange-600 rounded-full w-fit px-3 py-1 text-base"
      >
        {{ framework }}
      </div>
    </div>

    <div class="m-auto flex flex-wrap w-4/5 gap-x-5 gap-y-3 my-2 place-content-center">
      <div
          v-for="(love, index) in tech.love" :key="index"
          class="bg-yellow-600 rounded-full w-fit px-3 py-1 text-base"
      >
        {{ love }}
      </div>
    </div>

    <div class="m-auto flex flex-wrap w-3/5 gap-x-5 gap-y-3 my-2 place-content-center">
      <div
          v-for="(tool, index) in tech.tools" :key="index"
          class="bg-green-600 rounded-full w-fit px-3 py-1 text-base"
      >
        {{ tool }}
      </div>
    </div>

    <div class="m-auto flex flex-wrap w-4/5 gap-x-5 gap-y-3 my-2 place-content-center">
        <div
            v-for="(crm, index) in tech.crm" :key="index"
            class="bg-blue-600 rounded-full w-fit px-3 py-1 text-base"
        >
          {{ crm }}
        </div>
    </div>

    <div class="m-auto flex flex-wrap w-4/5 gap-x-5 gap-y-3 my-2 place-content-center">
        <div
            v-for="(sales, index) in tech.sales" :key="index"
            class="bg-blue-800 rounded-full w-fit px-3 py-1 text-base"
        >
          {{ sales }}
        </div>
    </div>

    <div class="m-auto flex flex-wrap w-3/5 gap-x-5 gap-y-3 my-2 place-content-center">
        <div
            v-for="(adobe, index) in tech.adobe" :key="index"
            class="bg-purple-700 rounded-full w-fit px-3 py-1 text-base"
        >
          Adobe {{ adobe }}
        </div>
    </div>

  </div>
</template>

<style scoped>

</style>