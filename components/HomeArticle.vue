<script setup></script>
<template>
  <section>
    <ContentList path="/articles" v-slot="{ list }">
      <div class="w-full my-4 mx-auto">
        <ArticleShowcase
          v-for="article in list.slice(Math.max(list.length - 3, 1))"
          :key="article._path"
          :path="article._path"
          :img="article.imgurl"
          :title="article.subtitle"
          :tags="article.tags"
          :date="article.createdAt"
        />
      </div>
    </ContentList>
  </section>
</template>
