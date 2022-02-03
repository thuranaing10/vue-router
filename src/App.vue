<template>
  <div>
    <MenuBar></MenuBar>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuBar from "./assets/MenuBar.vue";
export default {
  components: { MenuBar },
  name: "App",
  data() {
    return {
      message: "Hello Vue",
    };
  },
};
</script>

<style scoped></style>
