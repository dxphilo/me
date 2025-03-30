<script setup>
const { data: articles } = await useAsyncData("blog", () =>
  queryCollection("blog").order("createdAt", "DESC").all()
);
</script>
<template>
  <section>
    <div class="w-full my-4 mx-auto">
      <ArticleShowcase
        v-for="article in articles.splice(0, 4)"
        :key="article.path"
        :path="article.meta.path"
        :img="article.meta.imgurl"
        :title="article.meta.subtitle"
        :tags="article.meta.tags"
        :date="article.meta.createdAt"
      />
    </div>
  </section>
</template>
