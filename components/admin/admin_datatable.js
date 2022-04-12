const adminDatatable = {
  view: "datatable",
  id: "adminDatatable",
  select: true,
  editable: true,
  data: categoriesCollection,
  columns: [
    { id: "id", header: "", width: 50 },
    {
      id: "value",
      header: "Category",
      fillspace: true,
      sort: "text",
      editor: "text",
    },
    {
      header: "",
      template: "<span class='webix_icon wxi-trash remove'></span>",
      width: 50,
    },
  ],
  onClick: {
    remove: (e, id) => {
      if (categoriesCollection.count() < 2) {
        return webix.message("field have to have 1 position");
      }
      webix.confirm("Are you sure you want to delete?").then(() => {
        categoriesCollection.remove(id);
        $$("adminForm").clear();
      });
    },
  },
};
