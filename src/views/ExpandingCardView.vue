<template>
  <div class="wrapper">
    <div class="container">
      <div
        v-for="(panel, idx) in panels"
        :key="idx"
        :class="`panel card-${panel.className}
                 ${panel.isActive? 'active' : ''}`"
        @click="active(idx)"
      >
        <h3>{{ panel.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const panels = reactive([
  { title: 'Expanding Card', className: 'one', isActive: true },
  { title: 'Hello World', className: 'two', isActive: false },
  { title: 'Sunny Beach', className: 'three', isActive: false },
  { title: 'City on Winter', className: 'four', isActive: false },
  { title: 'Mountains Clouds', className: 'five', isActive: false },
]);

const active = (idx) => {
  panels.forEach(panel => {
    panel.isActive = false;
  });

  panels[idx].isActive = true;
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.container {
  display: flex;
  width: 90vw;
}

.panel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 10px;
  color: #FFFFFF;
  cursor: pointer;
  flex-grow: 0.5;
  margin: 10px;
  position: relative;
  transition: flex 0.6s ease-in;
}

.panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}

.panel.active {
  flex-grow: 5;
}

.panel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in;
}

@media screen and (max-width: 480px) {
  .container {
    width: 100vw;
  }

  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
}


.card-one {
  background-image: url('https://images.unsplash.com/photo-1605246811037-7a815fa646e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');
}

.card-two {
  background-image: url('https://images.unsplash.com/photo-1563827743410-14888b79810e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80');
}

.card-three {
  background-image: url('https://images.unsplash.com/photo-1613422795543-71e3aeac5b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');
}

.card-four {
  background-image: url('https://images.unsplash.com/photo-1612141705555-ff32157f0ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');
}

.card-five {
  background-image: url('https://images.unsplash.com/photo-1569397602933-67553601e7c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80');
}


</style>