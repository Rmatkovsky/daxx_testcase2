<template>
  <div id="app">
    <h1>Test case 2. Charts</h1>
    <BarChart :series="openValues" title="Open" />
    <BarChart :series="closeValues" title="Close" />
  </div>
</template>

<script>
import BarChart from './components/chart'
import remoteData from './api/TorqueValues';
import { filterByDirection, sortByPosition } from './utils/helpers';

const sortedData = sortByPosition(remoteData);
const openTorques = filterByDirection(sortedData, 'Open');
const closeTorques = filterByDirection(sortedData, 'Close');

export default {
  name: 'App',
  components: {
    BarChart
  },
  data: () => ({
    openValues: sortByPosition(openTorques),
    closeValues: sortByPosition(closeTorques),
  })
}
</script>

<style>
html {
  min-height: 100%;
}
html, body {
  height: 100%;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
