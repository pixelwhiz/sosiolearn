<template>
  <button @click="resetInput(inputId)" type="button" class="btn btn-outline-secondary"><span><i class="bi-arrow-clockwise"></i></span> Reset</button>
</template>

<script>
export default {
  props: ['inputId'],

  methods: {
    resetInput(id) {
      const inputElement = document.getElementById(id);
      inputElement.value = '';
    }
  }
};
</script>

<style scoped>
</style>
