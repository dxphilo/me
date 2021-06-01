<template>
  <div class="font-serif">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
const Header = () =>
  import(/*webpackChunkName: "Header"*/ "@/components/Header");
const Footer = () =>
  import(/*webpackChunkName: "Footer"*/ "@/components/Footer");
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
html {
  font-family: Avenir, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1a6183;
  font-weight: 400;
  letter-spacing: 0.25px;
  line-height: 1.5;
  font-size: calc(10px + 0.35vw);
  scroll-behavior: smooth;
  background-color: #f1f4f6;
}

html:focus-within {
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
