# Stock Chart

<ve-line :data="chartData" :extend="extend" :settings="chartSettings"></ve-line>


- 初： 61335
- 现： 62554（12-26）  63457(12-30)

<script>
    export default {
    data () {
      this.chartSettings = {
        axisSite: { right: ['涨幅'] },
        yAxisType: ['KMB', 'percent'],
        yAxisName: ['数值', '比率']
      }
      this.extend = {
        series: {
          label: {
            normal: {
              show: true
            }
          }
        }
      }
      return {
        chartData: {
          columns: ['日期', '总', '涨幅'],
          rows: [
            { '日期': '12/16（周一）', '总': 63412.92, '涨幅': 0.0462 },
            { '日期': '12/17（周二）', '总': 63412.92, '涨幅': 0.034 },
            { '日期': '12/18（周三）', '总': 63412.92, '涨幅': -0.0046 },
            { '日期': '12/19（周四）', '总': 63412.92, '涨幅': 0.0238 },
            { '日期': '12/20（周五）', '总': 63412.92, '涨幅': 0.0209 },
            { '日期': '12/23（周一）', '总': 62144.67, '涨幅': -0.0211 },
            { '日期': '12/24（周二）', '总': 60883.13, '涨幅': -0.0203 },
          ]
        }
      }
    }
  }
</script>

<style lang="scss">
  .el-calendar {
    th, td {
      padding:0;
    }
    .el-calendar-day {
      height: 60px;
      text-align: center;
    }
    .el-calendar-table {
      display: table;
    }
  }
  
</style>
