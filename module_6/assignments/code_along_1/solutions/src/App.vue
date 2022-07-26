<script setup>
import { useUserStore } from "@/stores/users";
import { storeToRefs } from "pinia";

const users = storeToRefs(useUserStore());
</script>

<template>
  <div>{{ users }}</div>
</template>
