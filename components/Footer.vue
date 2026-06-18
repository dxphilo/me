<template>
  <footer class="footer pb-20 text-center font-semibold">
    <p class="text-sm font-light leading-normal pt-4">
      Have a productive {{ today }}
      <span class="inline-block animate-shake"> &#128075;</span>
    </p>

    <address class="contact not-italic text-sm font-light leading-relaxed pt-4 space-y-1">
      <p>{{ site.contact.address }}</p>
      <p>
        <a :href="`mailto:${site.contact.email}`" class="contact-link">
          {{ site.contact.email }}
        </a>
      </p>
      <p>
        <a :href="`tel:${phoneHref}`" class="contact-link">
          {{ site.contact.phone }}
        </a>
      </p>
    </address>

    <div class="py-4">
      <Social />
    </div>

    <div class="leading-normal text-base font-light leading-9 tracking-wide">
      Made with
      <span>
        <span class="sr-only">love</span>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="heart"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="animate-ping heart-background text-red-300 z-10 svg-inline--fa fa-heart fa-w-16"
        >
          <path
            fill="currentColor"
            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
          />
        </svg>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="heart"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="text-red-600 svg-inline--fa fa-heart fa-w-16"
        >
          <path
            fill="currentColor"
            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
          />
        </svg>
      </span>

      by {{ site.name }} &copy; {{ date }}
    </div>
  </footer>
</template>

<script setup>
import Social from "~~/components/Social.vue";

const { site } = useAppConfig();
const date = new Date().getFullYear();
const today = new Date().toLocaleDateString("default", {
  weekday: "long",
});

const phoneHref = computed(() => site.contact.phone.replace(/[^\d+]/g, ""));
</script>

<style scoped>
.footer {
  font-size: 1.22rem;
  letter-spacing: 1px;
}

.contact-link {
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-link:hover {
  color: rgb(51 65 85);
  text-decoration: underline;
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
</style>
