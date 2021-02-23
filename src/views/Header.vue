<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link"
              >Multiple image</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'blog' }" class="nav-link">
              Blog</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'light' }" class="nav-link">
              LightBox</router-link
            >
          </li>
        </ul>
  
        <exdata name="Share"  />
        <span class="navbar-text">
          <slot name="firstSlot"></slot>
        </span>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import exdata from "./ex-data.vue";

export default {
  name: "Header",
  components: {
    exdata,
  },methods:{
     shareMe: function() {
      console.log("share");
    }

  }
};
</script>

<style scoped>
</style>