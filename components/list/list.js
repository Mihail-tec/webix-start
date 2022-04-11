const list = {
    css: "colorBack",
    width: 200,
    rows: [
      {
        view: "list",
        scroll: false,
        select:true,
        data: [
          { value: "Dashboard", id: "dashboard"},
          { value: "Users", id: "users" },
          { value: "Products", id: "products" },
          { value: "Location", id: "location" },
        ],
        on:{
          onAfterSelect: function(id){
            $$(id).show()
          }
        },
      },
      {
        type: "clean",
        view: "template",
        autoheight: true,
        template:
          '<span class="webix_icon wxi-check " > </span>Connected',
        css: "text_decor",
      },
    ],
  }