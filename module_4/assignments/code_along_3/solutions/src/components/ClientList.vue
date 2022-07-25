<template>
  <div id="client-list">
    <table>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("create()");
  },
};
</script>

<style scoped>
div#client-list {
  border: 2px solid red;
}
</style>
