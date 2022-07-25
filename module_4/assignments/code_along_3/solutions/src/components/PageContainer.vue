<template>
  <div id="page-container">
    <ClientPage />
  </div>
</template>

<script>
import ClientPage from "@/components/ClientPage.vue";
export default {
  components: { ClientPage },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("create()");
  },
};
</script>

<style scoped>
div#page-container {
  border: 2px solid green;
}
</style>
