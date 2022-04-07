function save() {
  if ($$("form").validate()) {
    const data = $$("form").getValues();
    $$("datatable").add(data);
    webix.message("Successfully added");
  }
}

function clear() {
  webix
    .confirm({ text: "Clear form", title: "Are you sure?" })
    .then(function () {
      $$("form").clear();
      $$("form").clearValidation();
      $$("datatable").unselectAll();
    });
}
