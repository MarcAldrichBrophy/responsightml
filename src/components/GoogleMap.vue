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
      initMap(googleMap.value, () => {
        // Sample
        const data = [{
            position: {
              lat: 37.754938,
              lng: -122.412149
            }
          },
          {
            position: {
              lat: 37.772153,
              lng: -122.437827
            }
          }
        ]

        for (let marker of data) {
          window.addMarker(marker)
        }
      })
    });

    const initMap = (element, cb) => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=visualization&callback=initGoogleMap`
      script.defer = true
      script.async = true
      document.head.appendChild(script)
      window.initGoogleMap = () => {
        window.google = google
        window.map = new google.maps.Map(element, {
          center: {
            lat: 37.749385,
            lng: -122.435931
          },
          zoom: 13,
          fullscreenControl: false
        })

        function addMarker({
          position
        }) {
          return new google.maps.Marker({
            position,
            map: getMap()
          })
        }
        window.addMarker = addMarker
        setHeatMap([
            {lat: 37.782, lng: -122.441},
            {lat: 37.782, lng: -122.439},
            {lat: 37.782, lng: -122.435},
            {lat: 37.785, lng: -122.447},
            {lat: 37.785, lng: -122.445},
            {lat: 37.785, lng: -122.441},
            {lat: 37.785, lng: -122.437},
            {lat: 37.785, lng: -122.435}
          ])
        cb()
      }
    }
    return {
      googleMap
    }
  },
}

function getMap() {
  return window.map
}

function setHeatMap(data) {
  var heatmapData = data.map(item => new window.google.maps.LatLng(item.lat, item.lng))
  var heatmap = new window.google.maps.visualization.HeatmapLayer({
    data: heatmapData
  })
  heatmap.setOptions({ radius: 20 })
  heatmap.setMap(getMap())
}

</script>
<style scoped>
.googleMap {
  width: 100vw;
  height: 100vh;
}
</style>