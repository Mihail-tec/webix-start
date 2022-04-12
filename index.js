webix.ready(function () {
  webix.protoUI(
    {
      name: "editlist",
    },
    webix.EditAbility,
    webix.ui.list
  );
  
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
                cols: [{ rows: [dashBoard, datatable] }, form],
              },
              { id: "users", ...listUser },
              { id: "products", rows: [products] },
              { id: "admin", rows: [adminForm, adminDatatable]},
            ],
          },
        ],
      },
      footer,
    ],
  });

  $$("datatable").registerFilter(
    $$("filterYear"),
    {
      columnId: "year",
      compare: function (value, filter) {
        let year = new Date().getFullYear();
        switch (filter) {
          case "old":
            return value <= 1970;
          case "modern":
            return value >= 2010;
          case "new":
            return value == year;
          default:
            return true;
        }
      },
    },
    {
      getValue: function (node) {
        return node?.getValue();
      },
      setValue: function (node, value) {
        node?.setValue(value);
      },
    }
  );
});
