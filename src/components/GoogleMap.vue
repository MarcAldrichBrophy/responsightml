<template>
  <div ref="googleMap" class="googleMap"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import points from '@/assets/points.json'

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=visualization&callback=initGoogleMap`
const mapSettings = {
  center: {
    lat: parseFloat(import.meta.env.VITE_GOOGLE_MAPS_LAT),
    lng: parseFloat(import.meta.env.VITE_GOOGLE_MAPS_LNG)
  },
  zoom: parseInt(import.meta.env.VITE_GOOGLE_MAPS_ZOOM),
}

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
      script.src = googleMapsUrl
      script.defer = true
      script.async = true
      document.head.appendChild(script)
      window.initGoogleMap = () => {
        // eslint-disable-next-line no-undef
        window.google = google
        window.map = new window.google.maps.Map(element, {
          ...mapSettings,
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
  // const request = await fetch(import.meta.env.VITE_AWS_LAMBDA_URL)
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