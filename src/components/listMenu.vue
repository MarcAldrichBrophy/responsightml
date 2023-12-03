<template>
  <button>➤</button>
  <!-- <ul>
    <li v-for="item in items" :key="item.id">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </li>
  </ul> -->
</template>

<script>
// import {reactive} from 'vue'
// const items = reactive({
//   items: [
//     { id: 1, name: 'Home', path: '/' },
//     { id: 2, name: 'About', path: '/about' },
//     { id: 3, name: 'Contact', path: '/contact' },
//   ]
// })
</script>

<style scoped>
button {
  transform: rotate(-90deg);
  background: transparent;
  color: white;
  border: none;
}

button:hover {
  cursor: pointer;
  transform: rotate(90deg);
}


</style>