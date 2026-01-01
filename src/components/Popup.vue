<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  content: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['closePopup'])

</script>

<template>
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-pretty sm:block sm:p-0 cursor-pointer"
         @click="emit('closePopup')">
      <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg transition-opacity" aria-hidden="true"></div>

      <span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

      <div
          class="absolute w-[90%] left-1/2 -translate-x-1/2 top-36 sm:top-1/4 backdrop-blur-3xl bg-[rgba(255,255,255,0.85)] rounded-lg px-4 py-5 overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6">
        <div>
          <div class="text-center font-semibold text-gray-900">
            <h3 class="mb-10 text-2xl">
              {{ props.title }}
            </h3>
            <h4 v-if="props.subtitle"
                class="-mt-8 mb-10 text-xl">
              {{ props.subtitle }}
            </h4>
            <div class="mt-2 flex flex-col gap-6 text-justify text-lg">
              <template v-for="item in props.content">
                <div class="flex gap-3" v-if="item.icon !== 'sublist'">
                  <img
                      v-if="item.icon"
                      :src="`/${item.icon}.webp`"
                      class="h-5 sm:h-8 place-self-start shadow-xl"
                      :alt="item.icon"/>
                  <p>{{ item.content }}</p>
                </div>
                <ul class="list-disc pl-16" v-else v-html="item.content"></ul>
              </template>
            </div>
            <slot>

            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>