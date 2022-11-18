<script setup>
defineProps(["links"]);

function flattenLinks(links) {
  const TocLinks = links
    .map((link) => {
      let _link = [link];
      if (link.children) {
        let flattened = flattenLinks(link.children);
        _link = [link, ...flattened];
      }
      return _link;
    })
    .flat(1);
  return TocLinks;
}
</script>

<template>
  <nav class="toc">
    <header class="toc-header">
      <h3 class="text-xl font-bold">Table of contents</h3>
    </header>
    <ul class="toc-links">
      <li
        v-for="link of flattenLinks(links)"
        :key="link.id"
        class="text-base"
        :class="`toc-link _${link.depth}`"
      >
        <a :href="`#${link.id}`"> - {{ link.text }} </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.toc {
  @apply p-4 bg-slate-50 border border-slate-200 rounded-lg;
  @apply max-h-[calc(100vh-6rem)] overflow-auto;
}
.toc-header {
  @apply pb-2 mb-2 border-b border-slate-200;
}
.toc-links {
  @apply flex flex-col gap-2 px-2;
}
.toc-link {
  @apply text-slate-500;
}
.toc-link._3 {
  @apply pl-3;
}
.toc-link._4 {
  @apply pl-6;
}
.toc-link._undefined {
  @apply pl-8;
}
</style>
