<template>
  <div>
    <TitleBar />
    <GoogleMap />
  </div>
</template>

<script>
import GoogleMap from "@/components/GoogleMap.vue";
import TitleBar from "@/components/TitleBar.vue";

export default {
  name: "App",
  components: {
    GoogleMap,
    TitleBar
},
};
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
}
</style>
