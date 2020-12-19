<template>
  <Slide>
    <router-link to="/" class="flex items-center mb-10">
      <div>
        <img
          src="../../assets/logo.png"
          alt="logo"
          class="rounded-full w-12 h-9"
        />
      </div>
      <div class="text-gray-500 ml-8 hover:text-green-300">URECOMMEND</div>
    </router-link>

    <router-link to="/">
      <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
        <path
          class="heroicon-ui"
          d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
        ></path>
      </svg>
      <span>SEARCH</span>
    </router-link>
    <router-link to="/">
      <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
        <path
          class="primary"
          d="M9 22H5a1 1 0 0 1-1-1V11l8-8 8 8v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1zm3-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
        ></path>
        <path
          class="secondary"
          d="M12.01 4.42l-8.3 8.3a1 1 0 1 1-1.42-1.41l9.02-9.02a1 1 0 0 1 1.41 0l8.99 9.02a1 1 0 0 1-1.42 1.41l-8.28-8.3z"
        ></path>
      </svg>
      <span>HOME</span>
    </router-link>
    <router-link to="/about">
      <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
        <path
          class="secondary"
          fill-rule="evenodd"
          d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
        ></path>
      </svg>
      <span>YOUR LIST</span>
    </router-link>
    <a href="/platforms" class="mx-2">
      <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        ></path>
        <path d="M0 0h24v24H0z" fill="none"></path>
      </svg>
      <span>PLATFORMS</span>
    </a>
    <router-link to="/about">
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        class="icon-cog"
      >
        <path
          class="primary"
          d="M6.8 3.45c.87-.52 1.82-.92 2.83-1.17a2.5 2.5 0 0 0 4.74 0c1.01.25 1.96.65 2.82 1.17a2.5 2.5 0 0 0 3.36 3.36c.52.86.92 1.8 1.17 2.82a2.5 2.5 0 0 0 0 4.74c-.25 1.01-.65 1.96-1.17 2.82a2.5 2.5 0 0 0-3.36 3.36c-.86.52-1.8.92-2.82 1.17a2.5 2.5 0 0 0-4.74 0c-1.01-.25-1.96-.65-2.82-1.17a2.5 2.5 0 0 0-3.36-3.36 9.94 9.94 0 0 1-1.17-2.82 2.5 2.5 0 0 0 0-4.74c.25-1.01.65-1.96 1.17-2.82a2.5 2.5 0 0 0 3.36-3.36zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
        />
        <circle cx="12" cy="12" r="2" class="secondary" />
      </svg>
      <span>USER SETTINGS</span>
    </router-link>
  </Slide>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  components: {
    Slide
  }
};
</script>
