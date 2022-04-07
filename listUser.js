const listUser = {
  rows: [
    {
      cols: [
        {
          view: "text",
          id:"list_input",
          on:{
              onTimedKeyPress: function() {
                const value = $$("list_input").getValue().toLowerCase();
                $$("list_user").filter(function(obj){
                  return obj.name.toLowerCase().includes(value);
                })
              }
            },
        },
        { view: "button", value: "sort asc", css:"webix_primary", click:asc },
        { view: "button", value: "sort desc", css:"webix_primary", click:desc },
      ],
    },
    {
      view: "list",
      id: "list_user",
      select: true,
      url: "data/users.js",
      css: "first_five",
      template:
        "#name# from #country# <span class='webix_icon wxi-close'></span> ",
      onClick: {
        webix_icon(e, id) {
          this.remove(id);
          return false;
        },
      },
    },
    {
      view: "chart",
      id: "chart",
      type: "bar",
      url: "data/users.js",
      value: "#age#",
      label: "#age#",
      xAxis: {
        template: "#name#",
        title: "Age",
      },
    },
  ],
};

