<template>
  <div ref="googleMap" class="googleMap"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import points from '@/assets/points.json'

const apiKey = 'AIzaSyDs_SM5TySlGu_UvaWIKEi3uVAwq2Pzn-I'
export default {
  name: 'googleMap',
  setup() {
    const googleMap = ref(null)
    onMounted(() => {
      initMap(googleMap.value, () => {
        getDangerousSlowdowns().then(data => {
          setHeatMap(data)
        })
      })
    })

    const initMap = (element, cb) => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=visualization&callback=initGoogleMap`
      script.defer = true
      script.async = true
      document.head.appendChild(script)
      window.initGoogleMap = () => {
        // eslint-disable-next-line no-undef
        window.google = google
        window.map = new window.google.maps.Map(element, {
          center: {
            lat: 37.749385,
            lng: -122.435931
          },
          zoom: 13,
          fullscreenControl: false
        })
        cb()
      }
    }
    return {
      googleMap
    }
  },
}

function setHeatMap(data) {
  const heatmapData = data.map(item => {
    return {
      location: new window.google.maps.LatLng(item.lat, item.lng),
      weight: item.weight
    }
  })
  const heatmap = new window.google.maps.visualization.HeatmapLayer({
    data: heatmapData
  })
  heatmap.setOptions({ radius: 20 })
  heatmap.setMap(window.map)
}

async function getDangerousSlowdowns() {
  // Our access to the INRIX API has been removed, so we'll use a local JSON file instead 
  // const request = await fetch('https://3qt2pgrotb.execute-api.us-west-2.amazonaws.com/clearway-prod/inrix?endpoint=dangerousSlowdowns')
  // return await request.json()
  return points
}

</script>
<style scoped>
.googleMap {
  width: 100vw;
  height: 100vh;
}
</style>