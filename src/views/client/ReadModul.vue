<template>
  <div>
    <PdfViewer :pdfSrc="pdfSrc" />
  </div>
</template>

<script>
import PdfViewer from '@/components/PdfViewer.vue';

export default {
  components: {
    PdfViewer
  },
  data() {
    return {
      pdfSrc: "http://localhost:3000/admin/modules/Kelas X1/asd.pdf"
    };
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      try {
        const response = await axios.get("")
      } catch (err) {
        console.log(`Internal Server Error: ${err.message}`);
      }
    },
  },
};
</script>
