const listUser = {
  rows: [
    toolbarUserList,
    {
      view: "editlist",
      id: "list_user",
      select: true,
      data: usersCollection,
      editable: true,
      editor: "text",
      editValue: "name",
      template:
        "#name# from #country#, #age# <span class='webix_icon wxi-close remove right_position'></span> ",
      scheme: {
        $change: function (obj) {
          if (obj.age < 26) {
            obj.$css = "teenager";
          }
        },
      },
      rules: {
        name: webix.rules.isNotEmpty,
      },
      ready: () => {
        $$("chart").sync($$("list_user"), function () {
          this.group({
            by: "country",
            map: {
              country: ["country", "count"],
            },
          });
          this.sort("country", "desc");
        });
      },
      onClick: {
        remove(e, id) {
          this.remove(id);
          return false;
        },
      },
    },
    chart,
  ],
};
