const chart = {
  view: "chart",
  id: "chart",
  type: "bar",
  data: usersCollection,
  value: "#country#",
  label: "#country#",
  tooltip: {
    template: "#value#",
  },
  xAxis: {
    template: "#value#",
    title: "Country",
  },
};
