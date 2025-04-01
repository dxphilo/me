<script setup>
defineProps(["prev", "next"]);
</script>

<template>
  <ul class="prev-next-cont my-5">
    <li class="link-item prev">
      <NuxtLink v-if="prev" :to="prev.path">
        <IconsArrowLeft class="icon stroke" />
        <span class="text-lg"> {{ prev.title }} </span>
      </NuxtLink>
    </li>
    <li class="link-item next">
      <NuxtLink v-if="next" :to="next.path">
        <span class="text-lg"> {{ next.title }} </span>
        <IconsArrowRight class="icon stroke" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.prev-next-cont {
  @apply flex gap-4 justify-between p-4 border border-slate-200 rounded-lg;
}

.link-item a {
  @apply flex gap-2;
}
</style>
