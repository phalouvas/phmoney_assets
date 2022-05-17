<script lang="ts">
export default {
  mounted() {
    this.drawChart();
  },

  methods: {
    drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn("string", "Date");
      data.addColumn("number", "Amount");
      data.addRows(this.store.props.rows);

      var options = {
        height: 500,
        vAxis: {
          minValue: 0,
        },
      };

      var chart = new google.visualization.PieChart(
        document.getElementById("chart_div")
      );
      chart.draw(data, options);
    },
  },
};
</script>

<template>
  <div class="p-6">
    <h2 class="text-center">
      {{ store.props.company }} {{ store.props.title }}
    </h2>
    <h3 class="text-center">
      From {{ store.convert_date(store.props.date_start) }} to
      {{ store.convert_date(store.props.date_end) }}
    </h3>
    <div class="border-b">
      <div id="chart_div"></div>
    </div>
  </div>
</template>
