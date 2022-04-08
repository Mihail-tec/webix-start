webix.ready(function () {
  webix.ui(popupConfig);
  webix.ui({
    rows: [
      toolbar,
      {
        type: "clean",
        cols: [
          list,
          { view: "resizer" },
          {
            view: "multiview",
            animate: false,
            cells: [
              {
                id: "dashboard",
                cols: [datatable, form],
              },
              {id:"users", ...listUser},
              {id:"products", rows:[products, ]},
              {id:"location", template: "location"}
            ],
          },
        ],
      },
      footer,
    ],
  });
});
