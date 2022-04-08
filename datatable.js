const datatable = {
    view: "datatable",
    id: "datatable",
    url:"data/data.js",
    hover:"myhover",
    select:true ,
    columns: [
      {id:"rank", header:"", width:"80", css:"rank" },
      {id:"title", header:[ "Title", {content:"textFilter"}], sort:"text", fillspace:true },
      {id:"year", header:["Year" , {content:"textFilter"}], sort:"int", width: 100},
      {id:"votes", header:["Votes", {content:"textFilter"}], sort:"string", width: 100},
      {id:"rating", header:[ "Rating", {content:"textFilter"}], sort:"text", width: 100},
      { template:"<span class='webix_icon wxi-trash delete_icon'></span>", width:80},
    ],
    onClick: {
      delete_icon(e, id){
        this.remove(id)
        return false;
      }
    },
    on:{
      onAfterSelect(id){
          const values = this.getItem(id);
          $$("form").setValues(values)
      }
  }
  }