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
  rules: {
    title: (value) => {
      const checkTitle = webix.rules.isNotEmpty(value);
      if (!checkTitle) {
        webix.message("field title must be fill");
      }
      return checkTitle;
    },
    price: (value, data) => {
      if (data?.$count !== 0 ) {
       
         webix.message("price:it's not problem");
         return true;
      }
      return webix.rules.isNumber(value);
    },
  },
  ready: function(){ 
      this.openAll()
    }
};
