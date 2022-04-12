const listUser = {
  rows: [
    toolbarUserList,
    {
      view: "editlist",
      id: "list_user",
      select: true,
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
