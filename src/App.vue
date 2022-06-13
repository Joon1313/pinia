<template>
<div class="container">
  <TheCounter :count="count" :doubleCount="doubleCount" :increment="increment" />
  <div>
    <h1>나는 플러그인에 제공/주입 된 객체에요</h1>
    <h2>이름: {{joon.name}}</h2>
    <h2>나이: {{joon.age}}</h2>
  </div>
</div>
</template>

<script setup>

import TheCounter from './components/TheCounter.vue'
import { storeToRefs } from 'pinia';
import { useCounterStore } from './store/counterStore';
import { inject } from 'vue';
// import { useBoardStore } from './store/boardStore';

// counterStore
const counterStore = useCounterStore();
const { count, doubleCount } = storeToRefs(counterStore);
const { increment } = counterStore;

// boardStore
// const boardStore = useBoardStore();
// console.log(boardStore)

// Plugin

const joon = inject('joon');
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  color:#fff
}
.container {
  display: flex;
  justify-content: space-around;
}
body {
  background-color: #111;
}
</style>
