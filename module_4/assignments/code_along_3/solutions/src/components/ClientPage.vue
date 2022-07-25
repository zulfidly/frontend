<template>
  <div id="client-page">
    <ClientList />
  </div>
</template>

<script>
import ClientList from "@/components/ClientList.vue";
export default {
  components: { ClientList },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("create()");
  },
  mounted() {
    console.log("mounted()");
  },
};
</script>

<style scoped>
div#client-page {
  border: 2px solid blue;
}
</style>
