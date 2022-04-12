const save = () => {
  const form = $$("form");
  if (form.isDirty()) {
    if (!form.validate()) return false;
    form.save();
  }
  clearInside();
};

const clearInside = () => {
  $$("form").clear();
  $$("form").clearValidation();
  $$("datatable").unselectAll();
  $$("save").setValue("Save");
};

const clear = () => {
  webix
    .confirm({ text: "Clear form", title: "Are you sure?" })
    .then(function () {
      clearInside();
    });
};

const asc = () => {
  usersCollection.sort("#name#", "asc");
};

const desc = () => {
  usersCollection.sort("#name#", "desc");
};

const users = [
  { name: "Kiril Tugoy", age: 42, country: "China" },
  { name: "Dima Otbity", age: 80, country: "Litva" },
  { name: "Nazar Hockey", age: 50, country: "Israile" },
  { name: "Anton Tolsty", age: 25, country: "USA" },
  { name: "Pasha Dym", age: 19, country: "Australia" },
];
const getRandom = (users) => {
  return users[random(0, users.length - 1)];
};

const addNewUser = () => {
  $$("list_user").add(webix.clone(getRandom(users)));
};

const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
