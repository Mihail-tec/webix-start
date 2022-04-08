const save = () => {
  const form = $$("form");
  const datatable = $$("datatable");
  const item_data = form.getValues();
  const save = $$("save");
  if ($$("form").validate()) {
    if (item_data.id) {
      datatable.updateItem(item_data.id, item_data);
    } else {
      datatable.add(item_data);
    }
    clearInside();
  }
};

const clearInside = () => {
  $$("form").clear();
  $$("form").clearValidation();
  $$("datatable").unselectAll();
  $$("save").setValue("Add new");
};

const clear = () => {
  webix
    .confirm({ text: "Clear form", title: "Are you sure?" })
    .then(function () {
      clearInside();
    });
};

const asc = () => {
  $$("list_user").sort("#name#", "asc");
};

const desc = () => {
  $$("list_user").sort("#name#", "desc");
};
