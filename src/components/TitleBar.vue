<template>
  <div class="titleWrapper">
    <div class="logoWrapper">
      <div class="circle">
        <img id="car" src="/car.png">
      </div>
      <span class="title">ResponSight ML</span>
    </div>
  </div>
</template>

<style scoped>
.titleWrapper {
  align-items: center;
  color: white;
  text-align: center;
  padding: 14px 16px;
  border-radius: 15px;
  margin: 15px;
  position: absolute;
  z-index: 9999;
  overflow: hidden;
  background-color: #333;
  right: 0;
}

.logoWrapper {
  display: flex;
  align-items: center;
}

.circle {
  background-color: #bbb;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  padding: 10px;
}

#car {
  width: 50px;
  height: 50px;
  padding: 0;
  margin: 0;
}

.title {
  margin-left: 5px;
  font-size: 1.5rem;
}
</style>