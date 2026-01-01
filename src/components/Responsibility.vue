<script setup>
import {computed} from 'vue'

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
    return 'bg-gray-700';
  }
})

const emit = defineEmits(['selectResponsibility']);

</script>

<template>
  <div
      :class="bgColor"
      class=" grid grid-cols-1 rounded-2xl py-2 px-4 cursor-pointer bg-opacity-55 backdrop-blur-xl hover:bg-green-600 sm:inline-flex gap-4 items-center place-items-center"
      @click="emit('selectResponsibility', responsibility)">
    <div class="flex gap-4" v-if="Array.isArray(responsibility.type)">
      <img
          v-for="(type, index) in responsibility.type"
          :key="index"
          :alt="type"
          :src="`/${type}.webp`" class="h-8 mt-1 sm:mt-0"/>
    </div>
    <img
        v-if="typeof (responsibility.type) === 'string'"
        :alt="responsibility.type"
        :src="`/${responsibility.type}.webp`" class="h-8 mt-1 sm:mt-0"/>
    <p class="text-xl sm:text-base">{{ responsibility.name }}</p>
  </div>
</template>

<style scoped>

</style>