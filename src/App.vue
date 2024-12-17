<template>
  <bryntum-gantt v-bind="ganttConfig" />
</template>

<script>
import { BryntumGantt } from "@bryntum/gantt-vue";
import { ganttConfig } from "./AppConfig";

export default {
  name: "App",
  components: {
    BryntumGantt,
  },

  data() {
    return { ganttConfig };
  },
};
</script>

<style>
@import "./assets/App.css";
</style>
