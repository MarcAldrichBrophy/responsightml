<template>
  <div ref="googleMap" class="googleMap"></div>
</template>

<script>
import { ref, onMounted } from 'vue';

const apiKey = 'AIzaSyDs_SM5TySlGu_UvaWIKEi3uVAwq2Pzn-I'
export default {
  name: 'googleMap',
  setup() {
    const googleMap = ref(null)
    onMounted(() => {
      initMap(googleMap.value)
    });

    const initMap = (element) => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initGoogleMap`
      script.defer = true
      script.async = true
      document.head.appendChild(script)
      window.initGoogleMap = () => {
        new google.maps.Map(element, {
          center: { lat: 37.749385, lng: -122.435931 },
          zoom: 13,
          fullscreenControl: false
        })
      }
    }

    return { googleMap }
  },
};
</script>
<style scoped>
.googleMap {
  width: 100vw;
  height: 100vh;
}
</style>