<script setup>
useHead({
  title: "John Philip - Blog",
  meta: [
    { name: "description", content: "Listicle of all the articles on my blog" },
  ],
});

const articles = await queryContent("articles").sort({ createdAt: 1 }).find();
</script>
<template>
  <div>
    <Btemplate />
    <section>
      <div class="w-4/5 my-4 mx-auto flex flex-wrap">
        <Article
          v-for="article in articles"
          :key="article._path"
          :path="article._path"
          :img="article.imgurl"
          :title="article.subtitle"
          :tags="article.tags"
          :date="article.createdAt"
        />
      </div>
    </section>
    <div>
      <Hr />
    </div>
  </div>
</template>
