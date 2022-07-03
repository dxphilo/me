<
<template>
  <!-- about me component -->
  <div class="mb-20">
    <div class="about">
      <Skillsect />
    </div>
    <div class="about-me">
      <div class="w-1/3 m-auto dwabout">
        <!-- More About Me -->
        <div>
          <h3 class="text-3xl py-6 font-semibold">Yes</h3>
          <ul class="text-xl leading-9 tracking-wide flex flex-wrap">
            <li
              class="border mx-1 px-1 shadow-xl py-2 px-3 my-2"
              v-for="yes in yesTo"
              :key="yes"
            >
              {{ yes }}
            </li>
          </ul>
        </div>
        <!-- my NO'S -->
        <div>
          <h3 class="text-3xl py-6 font-semibold">No</h3>
          <ul class="text-xl leading-9 tracking-wide flex flex-wrap">
            <li
              class="border mx-1 px-1 shadow-xl py-2 px-3 my-2"
              v-for="no in nOs"
              :key="no"
            >
              {{ no }}
            </li>
          </ul>
        </div>
        <!-- best TV Shows -->
        <div>
          <h3 class="text-3xl py-6 font-semibold">Tv Shows</h3>
          <ul class="text-xl leading-9 tracking-wide flex flex-wrap">
            <li
              class="border mx-1 px-1 shadow-xl py-2 px-3 my-2"
              v-for="tvshow in tvShows"
              :key="tvshow"
            >
              {{ tvshow }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'About',
  data() {
    return {
      yesTo: [
        'Learning',
        'Reading',
        'Motivation',
        'Positivity',
        'Twitter',
        'Pinterest',
        'JavaScript',
        'YouTube',
        'Spotify',
        'Testing',
        'Mentorship',
        'Watching',
        'Fifa',
      ],
      tvShows: [
        'Shameless Us',
        'Narcos',
        'Ozark',
        'Peaky Blinders',
        'Family Guy',
        'Dogs of Berlin',
        'Rise of Empires: Ottoman',
        'Mr Robot',
        'Startup',
        'Bulletproof',
        'Our Planet',
        'Lupin',
        'The Looney Tunes',
        'Hoops',
        'Game Of Thrones',
        'Cursed',
        'Tribes of Europa',
        'Vampire Diaries',
        'Rick and Morty',
      ],
      nOs: ['Spam', 'Hate', 'Gossip', 'Tribalism', 'Negativity', 'Scam'],
    }
  },
})
</script>
<style scoped>
a {
  text-decoration: none;
  position: relative;
}
a:after {
  content: '';
  position: absolute;
  z-index: -1;
  top: 60%;
  left: -0.1em;
  right: -0.1em;
  bottom: 0;
  transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
  background-color: rgba(55, 192, 85, 0.5);
}
a:hover:after {
  top: 0%;
}
@media (max-width: 900px) {
  .dwabout {
    width: 70%;
    margin: 0 auto;
  }

  .about-me {
    width: 100%;
    margin: 0 auto;
  }
}
.border {
  border-bottom: 3px solid green;
}
</style>
