<script setup>
import Exclamation from "../icons/Exclamation.vue";
import Info from "../icons/Info.vue";
import BanIcon from "../icons/Ban.vue";

const props = defineProps(["type"]);
</script>

<template>
  <div class="info-box not-prose" :class="[type]">
    <Exclamation v-if="type == 'warning'" class="icon solid" />
    <BanIcon v-else-if="type == 'error'" class="icon solid" />
    <Info v-else class="icon solid" />

    <details>
      <summary>
        <slot />
      </summary>
      <div class="details pt-2">
        <Markdown :use="$slots.details" unwrap="p"></Markdown>
      </div>
    </details>
  </div>
</template>

<style scoped>
.info-box {
  @apply flex items-start gap-2 p-4 bg-slate-100 border border-slate-200 text-slate-500 rounded-lg;
}

details summary {
  @apply flex font-semibold leading-tight cursor-pointer;
}

details .details {
  @apply text-sm;
}

.info-box .icon {
  @apply shrink-0;
}

.info-box.warning {
  @apply bg-yellow-200 border-yellow-400 text-yellow-600;
}

.info-box.warning .icon.solid {
  @apply fill-yellow-600;
}

.info-box.error {
  @apply bg-red-200 border-red-400 text-red-600;
}

.info-box.error .icon.solid {
  @apply fill-red-600;
}
</style>
