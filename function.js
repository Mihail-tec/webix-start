const save = () => {
  const form = $$("form");
  const datatable = $$("datatable");
  const item_data = form.getValues();
  if ($$("form").validate()) {
    if (item_data.id) {
      datatable.updateItem(item_data.id, item_data);
    } else {
      datatable.add(item_data);
    }
  }
}

const clear = () => {
  webix
    .confirm({ text: "Clear form", title: "Are you sure?" })
    .then(function () {
      $$("form").clear();
      $$("form").clearValidation();
      $$("datatable").unselectAll();
    });
}

const asc = () => {
  $$("list_user").sort("#name#", "asc")
}

const desc = () => {
$$("list_user").sort("#name#", "desc")
}
