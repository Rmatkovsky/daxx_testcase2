<template>
  <div class="echarts">
    <IEcharts
      :option="bar"
      :loading="loading"
    />
  </div>
</template>

<script>
import { getByProperty } from '../utils/helpers'
import IEcharts from 'vue-echarts-v3/src/lite.js'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'

export default {
  name: 'BarChart',
  props: ['series', 'title'],
  components: {
    IEcharts
  },
  data: function () {
    return {
      loading: false,
      bar: {
        title: {
          text: this.title
        },
        xAxis: {
          name: 'Valve position',
          data: getByProperty(this.series, 'Position'),
          axisLabel: {
            inside: false,
            textStyle: {
              color: '#000'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          name: 'Required torque (%)',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#999'
            }
          }
        },
        series: [
          { // For shadow
            type: 'bar',
            itemStyle: {
              normal: {color: 'rgba(0,0,0,0.5)'}
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: getByProperty(this.series, 'AverageTorque'),
            animation: false
          },
          {
            type: 'bar',
            data: getByProperty(this.series, 'LastTorque')
          }
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.echarts {
  height: 500px;
}
h1, h2 {
  font-weight: normal;
}
</style>
