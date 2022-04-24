<script setup>
import { ref, onMounted } from 'vue';

const circlesCnt = ref(5);
const activeCircle = ref(1);
const activeWidth = ref(0);
const intervalPercent = ref(0);

const onNext = () => {
  if (activeCircle.value === circlesCnt.value) {
    return;
  }

  if (activeWidth.value === 100) {
    return;
  }

  activeCircle.value += 1;
  activeWidth.value += intervalPercent.value;
};

const onPrev = () => {
  if (activeCircle.value === 1) {
    return;
  }

  if (activeWidth.value === 0) {
    return;
  }

  activeCircle.value -= 1;
  activeWidth.value -= intervalPercent.value;
};

onMounted(() => {
  intervalPercent.value = Math.floor(100 / (circlesCnt.value - 1));
});
</script>

<template>
  <div
    class="bg-gray-50 flex flex-col justify-center items-center
           h-screen m-0
          "
  >
    <h1 class="mb-20 text-2xl font-bold">Progress Steps</h1>
    <div class="container text-center max-w-xs">
      <div
        class="progress-container
               flex justify-between items-center relative mb-6 z-10
               before:content-[''] before:absolute before:w-full
               before:h-1 before:bg-gray-200 before:top-1/2 before:left-0
               before:translate-y-[-50%] before:z-[-1]
              "
      >
        <div id="progress"
             class="absolute h-1 bg-blue-400 top-1/2 left-0
                    translate-y-[-50%] z-[-1] ease duration-300
                   "
             :style="{width: `${activeWidth}%`}"
        ></div>
        <div v-for="cnt in circlesCnt"
             class="circle"
             :class="cnt === activeCircle? 'active' : ''"
        >{{ cnt }}
        </div>
      </div>
      <button class="progress-btn" id="prev-btn" @click="onPrev"
              :disabled="activeCircle === 1">Prev
      </button>
      <button class="progress-btn" id="next-btn" @click="onNext"
              :disabled="activeCircle === circlesCnt">Next
      </button>
    </div>
  </div>
</template>

<style scoped>
:root {
  --active-color: #3498db;
}

* {
  box-sizing: border-box;
}

.circle {
  @apply
  flex justify-center items-center
  bg-white text-gray-500 rounded-full
  border-2 w-7 h-7 ease-in duration-300
}

.circle.active {
  @apply border-2 border-blue-500 text-blue-500
}

.progress-btn {
  @apply
  bg-blue-400 text-white cursor-pointer pt-1 pb-1 pl-4 pr-4
  rounded-md m-1 active:scale-95 disabled:scale-100 disabled:bg-gray-300
}
</style>