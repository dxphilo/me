<template>
  <!-- component -->
  <div class="header sticky top-0 z-20">
    <!-- Text shadow utilities will be cool -->
    <nav class="flex justify-around pt-4 items-center mb-1 font-medium">
      <div>
        <a href="/" class="flex text-normal pl-10">
          <span class="text-2xl pl-3">John Philip</span>
        </a>
      </div>

      <ul class="flex text-xl">
        <li>
          <nuxt-link to="/" class="p-2 md:p-4"> Home </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/articles" class="p-2 md:p-4"> Blog </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup></script>

<style>
.header {
  height: 70px;
  letter-spacing: 0.25px;
  background-color: whitesmoke;
}
ul li {
  padding-top: 5px;
  text-decoration: none;
}
</style>
