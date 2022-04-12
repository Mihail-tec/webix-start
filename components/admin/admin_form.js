const adminForm = {
  view: "form",
  id: "adminForm",
  elements: [
    {
      cols: [
        { view: "text", label: "Category", name: "value", gravity: 3 },
        {
          view: "button",
          value: "Add new",
          css: "webix_primary",
          click: () => {
            const adminForm = $$("adminForm");
            if (adminForm.validate()) {
              const newData = adminForm.getValues();
              categoriesCollection.add(newData);
              adminForm.clear();
            }
          },
        },
      ],
    },
  ],
  rules: {
    value: webix.rules.isNotEmpty,
  },
};
