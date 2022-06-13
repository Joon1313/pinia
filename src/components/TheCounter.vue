<template>
  <div class="hello">
    <h1>카운트: {{ count }}</h1>
    <h1>카운트x2: {{ doubleCount }}</h1>
    <button @click="increment">증가</button>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';

defineProps({
  count: Number,
  doubleCount:Number,
  increment:Function,
})
</script>

