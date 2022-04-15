<template>
  <div>
    <h3>world hello</h3>
    <h4>cnt: {{ cnt }}</h4>
    <button @click="add">add</button>
    <h3>{{ obj.name }}</h3>
    <h3>{{ obj.score }}</h3>
    <button @click="change">change</button>
    <br />
    <button @click="rollBack">rollback</button>
  </div>
</template>

<script setup>
  import { ref, reactive } from '@vue/reactivity';

  const cnt = ref(0);
  const add = () => cnt.value++;

  const obj = reactive({ name: 'sherlock', score: 90 });
  const change = () => {
    (obj.name = 'mina'), (obj.score = 80);
  };

  const rollBack = () => {
    (obj.name = 'sherlock'), (obj.score = 90);
  };
  console.log(obj);
</script>

<style></style>
