const popupConfig = {
    view: "popup",
    id: "my_pop",
    width: 200,
    body: {
      view: "list",
      data: [
        { id: "Settings", name: "Settings" },
        { id: "Log out", name: "Log out" },
      ],
      template: "#name#",
      autoheight: true,
      select: true,
      on: {
        onItemClick: function (id) {
          webix.message("Click on " + id);
        },
      },
    },
}
