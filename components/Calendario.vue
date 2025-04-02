<template>
  <VueDatePicker class="" v-model="date" inline auto-apply />
</template>

<script setup>
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const date = ref(new Date());
console.log(date.value);
</script>