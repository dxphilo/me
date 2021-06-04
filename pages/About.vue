<<template>
  <!-- about me component -->
  <div class="about-me">

      <div class="w-1/3 m-auto dwabout">


        <!-- More About Me -->
        <div>
          <h3 class="text-3xl py-6 font-semibold">Yes</h3>
          <ul class="text-xl leading-9 tracking-wide flex flex-wrap
">
            <li class="border mx-1 px-1 shadow-xl">Learning</li>
            <li class="border mx-1 px-1 shadow-xl">Reading</li>
            <li class="border mx-1 px-1 shadow-xl">Motivation</li>
            <li class="border mx-1 px-1 shadow-xl">Positivity</li>
            <li class="border mx-1 px-1 shadow-xl">Vs Code</li>
            <li class="border mx-1 px-1 shadow-xl">GitHub</li>
            <li class="border mx-1 px-1 my-4 shadow-xl">Twitter</li>
            <li class="border mx-1 px-1 my-4 shadow-xl">Chocolate</li>
            <li class="border mx-1 px-1 my-4  shadow-xl">Node Js</li>
            <li class="border mx-1 px-1 my-4 shadow-xl">JavaScript</li>
            <li class="border mx-1 px-1 my-4 shadow-xl">YouTube</li>
            <li class="border mx-1 px-1 my-4 shadow-xl">Spotify</li>
            <li class="border mx-1 px-1 my-4 shadow-xl">Trello</li>
            <li class="border mx-1 px-1 my-4 shadow-xl">Testing</li>
            <li class="border mx-1 px-1 my-4 shadow-xl">Mentorship</li>
            <li class="border mx-1 px-1 my-4 shadow-xl">Watching</li>
          </ul>
        </div>
        <!-- my NO'S -->
                <div>
          <h3 class="text-3xl py-6 font-semibold">No</h3>
          <ul class="text-xl leading-9 tracking-wide flex flex-wrap
">
            <li class="border mx-1 px-1 shadow-xl">Spam</li>
            <li class="border mx-1 px-1 shadow-xl">Hate</li>
            <li class="border mx-1 px-1 shadow-xl">Gossip</li>
            <li class="border mx-1 px-1 shadow-xl">Tribalism</li>
            <li class="border mx-1 px-1 shadow-xl">Negativity</li>
            <li class="border mx-1 px-1 shadow-xl">Scam</li>
          </ul>
        </div>
                <!-- best TV Shows -->
                <div>
          <h3 class="text-3xl py-6 font-semibold">Tv Shows</h3>
          <ul class="text-xl leading-9 tracking-wide flex flex-wrap
">
            <li class="border mx-1 px-1 shadow-xl">Shameless Us</li>
            <li class="border mx-1 px-1 shadow-xl">Narcos</li>
            <li class="border mx-1 px-1 shadow-xl">Ozark</li>
            <li class="border mx-1 px-1 shadow-xl">Peaky Blinders</li>
            <li class="border mx-1 px-1 shadow-xl">Family Guy</li>
            <li class="border mx-1 px-1 my-4 shadow-xl">Dogs of Berlin</li>
            <li class="border mx-1 px-1 my-4 shadow-xl">Rise of Empires: Ottoman</li>
            <li class="border mx-1 px-1 my-4 shadow-xl">Mr Robot</li>
            <li class="border mx-1 px-1 my-4 shadow-xl">Startup</li>
            <li class="border mx-1 px-1 shadow-xl">Bulletproof</li>
            <li class="border mx-1 px-1 shadow-xl">Our Planet</li>
            <li class="border mx-1 px-1 shadow-xl">Lupin</li>
            <li class="border mx-1 px-1 shadow-xl">The Looney Tunes</li>
            <li class="border mx-1 px-1 shadow-xl">Hoops</li>
            <li class="border mx-1 px-1 my-4 shadow-xl">G.O.T</li>
            <li class="border mx-1 px-1 my-4 shadow-xl">Cursed</li>
            <li class="border mx-1 px-1 my-4 shadow-xl">Tribes of Europa</li>
            <li class="border mx-1 px-1 my-4 shadow-xl">Vampire Diaries</li>
            <li class="border mx-1 px-1 shadow-xl">Rick and Morty</li>
          </ul>
        </div>

      </div>
  </div>
 
</template>
 <script>
export default {
  name: "About",
};
</script>
<style scoped>
a {
  text-decoration: none;
  position: relative;
}
a:after {
  content: "";
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