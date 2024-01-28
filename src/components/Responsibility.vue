<script setup>
import {computed} from 'vue'
import {getImage} from "../globals.js";

const props = defineProps({
  responsibility: {
    type: Object,
    required: true
  }
})

const bgColor = computed(() => {
  if ((Array.isArray(props.responsibility.type) && props.responsibility.type.includes('success')) || props.responsibility.type === 'success') {
    return 'bg-yellow-600';
  } else if (props.responsibility.type === 'business') {
    return 'bg-purple-700';
  } else if (props.responsibility.type === 'tech') {
    return 'bg-blue-700';
  } else {
    return '';
  }
})

const emit = defineEmits(['selectResponsibility']);

</script>

<template>
  <div
      :class="bgColor"
      class="rounded-2xl py-1 px-3 cursor-pointer bg-opacity-55 backdrop-blur-xl hover:bg-green-600 inline-flex gap-4 items-center"
      @click="emit('selectResponsibility', responsibility)">
    <template v-if="Array.isArray(responsibility.type)">
      <img
          v-for="(type, index) in responsibility.type"
          :key="index"
          :alt="type"
          :src="getImage(`/${type}.webp`)" class="h-8"/>
    </template>
    <img
        v-else
        :alt="responsibility.type"
        :src="getImage(`/${type}.webp`)" class="h-8"/>
    <p>{{ responsibility.name }}</p>
  </div>
</template>

<style scoped>

</style>