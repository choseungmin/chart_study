const areaChartUp = {
  chart: {
    type: 'area',
  },
  title: {
    text: '',
  },
  xAxis: {
    gridLineWidth: 0,
    labels: {
      enabled: false,
    },
    lineWidth: 0,
    lineColor: 'transparent',
    tickLength: 0
  },
  yAxis: {
    title: '',
    gridLineWidth: 0,
    labels: {
      enabled: false,
    }
  },
  plotOptions: {
    area: {
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, '#f0acb9'],
          [1, '#fdf4f5']
        ]
      }
    }
  },
  legend: {
    enabled: false,
  },
  series: [{
    name: 'Tokyo',
    marker: {
      enabled: false,
    },
    color: '#d82f4b',
    data: [0,0,0,0,0, 2,4,5,4,5,7,8,9,5,4,6,7]
  }],
  credits: {
    enabled: false,
  }
};

const areaChartDown = {
  chart: {
    type: 'area',
  },
  title: {
    text: '',
  },
  xAxis: {
    gridLineWidth: 0,
    labels: {
      enabled: false,
    },
    lineWidth: 0,
    lineColor: 'transparent',
    tickLength: 0
  },
  yAxis: {
    title: '',
    gridLineWidth: 0,
    labels: {
      enabled: false,
    }
  },
  plotOptions: {
    area: {
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, '#f3f6fc'],
          [1, '#b0c7ec']
        ]
      }
    }
  },
  legend: {
    enabled: false,
  },
  series: [{
    name: 'Tokyo',
    marker: {
      enabled: false,
    },
    color: '#9fb7e2',
    data: [0,0,0,3,4,5,6,7,9,4,5,6,9,7,6,4]
  }],
  credits: {
    enabled: false,
  }
};

export {
  areaChartUp,
  areaChartDown,
}
