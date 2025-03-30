<template>
  <nuxt-link :to="path" class="w-[340px] h-[380px]">
    <img
      :src="img"
      :alt="title"
      class="object-cover w-full img h-[180px] border border-gray-300"
    />

    <div class="pt-3">
      <div class="">
        <div class="flex items-center gap-x-3">
          <ul class="flex items-baseline py-2 gap-x-2">
            <li
              v-for="tag in tags"
              :key="tag"
              class="inline-block bg-gray-200 font-normal text-xs border px-3 py-0.5 uppercase leading-relaxed"
            >
              {{ tag }}
            </li>
          </ul>
          <p class="text-sm text-gray-500 uppercase font-light">
            {{ convertDate(date) }}
          </p>
        </div>

        <h4
          class="font-semibold leading-loose leading-tight text-lg break-words overflow-hidden"
        >
          {{ title }}
        </h4>
        <p
          class="leading-relaxed tracking-wide text-gray-500 font-light text-base break-words overflow-hidden"
        >
          {{ description }}
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup>
defineProps({
  path: String,
  img: String,
  title: String,
  tags: Object,
  date: String,
  description: String,
});

function convertDate(date) {
  const da = new Date(date);
  return da.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>
<style></style>
