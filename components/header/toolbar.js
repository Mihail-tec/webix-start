const toolbar = {
  view: "toolbar",
  css: "webix_dark",
  elements: [
    { view: "label", label: "App" },
    {},
    {
      height: 40,
      type: "icon",
      icon: "wxi-user",
      view: "button",
      label: "Profile",
      width: 100,
      css: "webix_transparent",
      popup: "my_pop",
    },
  ],
};
