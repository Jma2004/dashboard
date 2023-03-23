const chart1 = new Chart(document.getElementById('chart1'), {
  type: "bar", 
  options: {
    plugins: {
      legend: {
        display:false
      },
      tooltip: {
        enabled:false
      }
    }
  },
  data: {
    labels: ['1', '2', '3'],
    datasets:[{
      data: [24,45,36],
      backgroundColor: ['#FF0000', '#00c851','#ffc107']
    }]
  }
});

const chart2 = new Chart(document.getElementById('chart2'), {
  type: "doughnut", 
  options: {
    plugins: {
      legend: {
        display:false
      },
      tooltip: {
        enabled:false
      }
    }
  },
  data: {
    labels: ['1', '2', '3','4'],
    datasets:[{
      data: [24,40,36,20],
      backgroundColor: ['#FF0000', '#00c851','#ffc107', '#007bff']
    }]
  }
});

const chart3 = new Chart(document.getElementById('chart3'), {
  type: "line", 
  options: {
    plugins: {
      legend: {
        display:false
      },
      tooltip: {
        enabled:false
      }
    }
  },
  data: {
    labels: ['jan', 'feb', 'mar'],
    datasets:[{
      data: [24,45,36],
      backgroundColor: ['#007bff', '#007bff','#007bff']
    }]
  }
});
