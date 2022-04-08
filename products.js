const products = {
  view: "treetable",
  id:"treetable",
  select: "cell",
  url: "data/products.js",
  columns: [
    { id: "id", header: "id",width: 80 },
    {
      id: "title",
      header: "Title",
      fillspace: true,
      template: "{common.treetable()} #title#",
    },
    { id: "price", header: "Price", fillspace: true },
  ],
  ready: function(){ 
      $$("treetable").openAll()
    }
};
