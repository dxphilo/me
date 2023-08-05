<template>
  <div class="sticky top-0 z-20 bg-gray-50">
    <!-- Text shadow utilities will be cool -->
    <nav class="flex justify-around items-center font-medium text-base py-5">
        <a href="/">
          John Philip
        </a>
      <ul class="flex item-center gap-x-4">
        <li>
          <nuxt-link to="/" class=""> Home </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/articles" class=""> Blog </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
