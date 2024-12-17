## Project setup

```
npm install
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Bryntum Gantt Setup

## Installation

Install the bryntum packages

```shell
npm install @bryntum/gantt @bryntum/gantt-vue
```

## Setting up structure

Import and use the `BryntumGantt` in the `App.vue` file:

```js
<template>
  <bryntum-gantt />
</template>

<script>
import { BryntumGantt } from "@bryntum/gantt-vue";

export default {
  name: "App",
  components: {
    BryntumGantt,
  },

};
</script>
```

## Configuration

Create a `src/AppConfig.js` file:

```js
import { StringHelper } from "@bryntum/gantt";

export const ganttConfig = {
  dependencyIdField: "sequenceNumber",
  rowHeight: 45,
  tickSize: 45,
  barMargin: 8,
  project: {
    autoSetConstraints: true, // automatically introduce `startnoearlier` constraint if tasks do not use constraints, dependencies, or manuallyScheduled
    autoLoad: true,
    loadUrl: "data/data.json",
  },

  columns: [{ type: "name", width: 250 }],

  // Custom task content, display task name on child tasks
  taskRenderer({ taskRecord }) {
    if (taskRecord.isLeaf && !taskRecord.isMilestone) {
      return StringHelper.encodeHtml(taskRecord.name);
    }
  },
};
```

## JSON data

Create a `public/data/data.json` file and populate it with the following:

<details>
<summary>Expand data</summary>
<br>
<code>
```json
data
```
</code>
</br>
</details>

Import it in `App.vue`:

```js
<template>
  <bryntum-gantt v-bind="ganttConfig" /> // 3. use it
</template>

<script>
import { BryntumGantt } from "@bryntum/gantt-vue";
import { ganttConfig } from "./AppConfig"; // 1. import here

export default {
  name: "App",
  components: {
    BryntumGantt,
  },

  data() {
    return { ganttConfig }; // 2. make sure to return it
  },
};
</script>
```

## Styling

Create a `src/assets/App.css`:

```css
@import "@bryntum/gantt/gantt.stockholm.css";
body,
html {
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: sans-serif;
  font-size: 14px;
}

#app {
  flex: 1 1 100%;
}
```

Import it in `App.vue`:

```css
<style>
@import "./assets/App.css";
</style>
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
