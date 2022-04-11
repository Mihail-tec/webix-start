const categories = new webix.DataCollection({
  url: "data/categories.js",
});

const datatable = {
  view: "datatable",
  id: "datatable",
  url: "data/data.js",
  hover: "myhover",
  select: true,
  columns: [
    { id: "rank", header: "", width: "40", css: "rank" },
    {
      id: "title",
      header: ["Title", { content: "textFilter" }],
      sort: "text",
      fillspace: true,
    },
    {
      id: "categoryId",
      collection: categories,
      header: ["Category", { content: "selectFilter" }],
    },
    { id: "year", header: "Year", sort: "int", width: 100 },
    {
      id: "votes",
      header: ["Votes", { content: "textFilter" }],
      sort: "int",
      width: 100,
    },
    {
      id: "rating",
      header: ["Rating", { content: "textFilter" }],
      sort: "text",
      width: 100,
    },
    {
      template: "<span class='webix_icon wxi-trash delete_icon'></span>",
      width: 80,
    },
  ],
  scheme: {
    $init: (obj) => {
      obj.categoryId = random(1, 4);
      obj.votes = webix.Number.parse(obj.votes, {
        decimalSize: 2,
        groupSize: 3,
        decimalDelimiter: ".",
        groupDelimiter: "'",
      });
      obj.rating = webix.Number.parse(obj.rating, {
        decimalSize: 2,
        groupSize: 3,
        decimalDelimiter: ",",
        groupDelimiter: "'",
      });
    },
  },
  ready: () => {
    $$("form").bind($$("datatable"));
  },
  onClick: {
    delete_icon(e, id) {
      this.remove(id);
      return false;
    },
  },
  on: {
    onAfterSelect(id) {
      const values = this.getItem(id);
      $$("save").setValue("Save")
    },
  },
};
