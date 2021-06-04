<template>
  <div class="footer font-semibold  text-center mt-8 text-xl leading-9 tracking-wide ">
   <div class="coded text-xl"> </> with
      <span><span class="sr-only">love</span> 
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="animate-ping heart-background text-red-300 z-10 svg-inline--fa fa-heart fa-w-16">
      <path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
        </path>
      </svg> 
        
        
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="text-red-600 svg-inline--fa fa-heart fa-w-16">
      
      
      <path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
        </path>
        
        </svg>
        
        </span>
        
          by John Philip &copy Terms {{date}}
          
        
        
    </div>
    <Socialmedia />
    <p class="text-lg py-4">Happy {{day}} &#128526;</p>
  </div>
</template>
<script>
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
const Socialmedia = () =>
  import(/*WebpackChunkName: "Socialmedia"*/ "@/components/Socialmedia");
export default {
  name: "Footer",
  components: {
    Socialmedia,
  },
  data() {
    return {
      date: new Date().getFullYear(),
      day: weekday[new Date().getDay()],
    };
  },
};
</script>
<style scoped>
.footer {
  font-size: 1rem;
  letter-spacing: 1px;
  padding-bottom: 80px;
  padding-top: 30px;
}
svg {
  display: inline;
  height: inherit;
  width: 9px;
}
.svg-inline--fa,
svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.heart-background {
  min-width: 1em;
  min-height: 1em;
  position: absolute;
  margin-top: 4px;
  opacity: 0.2;
}
.animate-ping {
  -webkit-animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}
.z-10 {
  z-index: 10;
}
.text-red-300 {
  opacity: 1;
  color: rgba(254, 178, 178, 1);
}
.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  vertical-align: -0.125em;
}
.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  vertical-align: -0.125em;
}
</style>