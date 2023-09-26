<template>
  <center>
    <iframe ref="pdfIframe"
            :src="pdfSrc"
            style="width: 100%; height: 100vh; border: none;">
    </iframe>
  </center>
</template>

<script>
export default {
  props: {
    pdfSrc: String
  },
  mounted() {
    this.resizeIframe();
    window.addEventListener("resize", this.resizeIframe);
  },
  methods: {
    resizeIframe() {
      const iframe = this.$refs.pdfIframe;
      const center = this.$el.querySelector("center");
      iframe.style.height = (window.innerHeight - center.offsetTop) + "px";
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeIframe);
  }
};
</script>

<style scoped>
</style>
