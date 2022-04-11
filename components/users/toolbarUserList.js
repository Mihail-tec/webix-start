const toolbarUserList = {
  view: "toolbar",
  elements: [
    {
      view: "text",
      id: "list_input",
      gravity: 3,
      on: {
        onTimedKeyPress: function () {
          const value = this.getValue().toLowerCase();
          $$("list_user").filter(function (obj) {
            return obj.name.toLowerCase().includes(value);
          });
        },
      },
    },
    { view: "button", value: "sort asc", css: "webix_primary", click: asc },
    { view: "button", value: "sort desc", css: "webix_primary", click: desc },
    {
      view: "button",
      value: "add new",
      css: "webix_primary",
      click: addNewUser,
    },
  ],
};
