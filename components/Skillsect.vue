<
<template>
  <!-- about me component -->
  <div class="about-me">
    <div class="text-center py-10">
      <h1 class="font-medium text-5xl font-semibold">About Me</h1>
    </div>

    <div class="w-1/3 m-auto dwabout">
      <!-- Developer -->
      <div>
        <p class="text-xl leading-9 tracking-wide">
          I enjoy crafting projects that mean a great deal to the users, I enjoy
          working with people in ensuring we produce the next best project ever
        </p>
        <br />
        <br />
        <p class="text-xl leading-9 tracking-wide">
          I am an open-source enthusiast and a community organizer at Vue.js
          Kenya. We hold meetups and speaker talks on Vue.js and topics around
          this framework. Check some of the amazing work we do
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/kenyavue"
            class="border px-2 shadow-xl"
            >here.</a
          >
        </p>
      </div>
      <!-- writing -->
      <div>
        <h3 class="text-3xl py-6 font-semibold text-center">
          Technical Writing
        </h3>
        <p class="text-xl leading-9 tracking-wide">
          Aside from coding, I enjoy writing blog articles and tutorials that
          mean value to the readers. Please check some of my work
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://amjohnphilip.medium.com"
            class="border px-2 shadow-xl"
            >here.</a
          >
        </p>
        <br />
        <p class="text-xl leading-9 tracking-wide">
          I am currently working on my first ever book that I hope will be
          availabe soon on all the major platforms. <br />
          <br />
          If you want to be notified about this please don't hesitate to shoot
          me an e-mail on
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:developerphilo@gmail.com"
            class="border px-2 shadow-xl"
            >developerphilo@gmail.com</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Skillsect',
}
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
  background-color: rgba(79, 192, 141, 0.5);
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
