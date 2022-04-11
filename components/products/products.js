const products = {
  view: "treetable",
  id:"treetable",
  select: "cell",
  editable:true,
  url: "data/products.js",
  columns: [
    { id: "id", header: "id",width: 80 },
    {
      id: "title",
      header: "Title",
      fillspace: true,
      editor:"text",
      template: "{common.treetable()} #title#",
    },
    { id: "price", header: "Price", fillspace: true, editor:"text" },
  ],
  rules:{
    title: webix.rules.isNotEmpty,
    price: webix.rules.isNumber
  },
  ready: function(){ 
      this.openAll()
    }
};
