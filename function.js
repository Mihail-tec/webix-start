function save() {
  var validate = $$("form").validate();
  if (validate) {
    var data = $$("form").getValues();
    $$("datatable").add(data);
    webix.message("success added");
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
