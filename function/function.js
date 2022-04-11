const save = () => {
  const form = $$("form");
  if (form.isDirty()) {
    if (!form.validate()) return false;
    form.save();
    clearInside();
  } else {
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

const addRandom = () => {
  const users = [
    { name: "Kiril Tugoy", age: 42, country: "China" },
    { name: "Dima Otbity", age: 80, country: "Litva" },
    { name: "Nazar Hockey", age: 50, country: "Israile" },
    { name: "Anton Tolsty", age: 25, country: "USA" },
    { name: "Pasha Dym", age: 19, country: "Australia" },
  ];
  return users[random(0, users.length - 1)];
};

const addNewUser = () => {
  $$("list_user").add(addRandom());
};

const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};