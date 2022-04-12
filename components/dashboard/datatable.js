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
      collection: categoriesCollection ,
      header: ["Category", { content: "selectFilter" }],
    },
    { id: "year", header: "Year", sort: "int", width: 100 },
    {
      id: "votes",
      header: ["Votes", { content: "textFilter" }],
      sort: "string",
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
      obj.categoryId = random(1, categoriesCollection.count() );
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
};
