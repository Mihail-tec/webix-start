const form = {
  view: "form",
  id: "form",
  elementsConfig: {
    labelWidth: 130,
  },
  elements: [
    { view: "template", template: "edit films", type: "section" },
    {
      view: "text",
      label: "Title",
      name: "title",
      invalidMessage: "Title must be filled",
    },
    {
      view: "text",
      label: "Year",
      name: "year",
      invalidMessage: "Year should be between 1970 and current",
    },
    {
      view: "text",
      label: "Rating",
      name: "rating",
      invalidMessage: "Rating cannot be empty or 0",
    },
    {
      view: "text",
      label: "Votes",
      name: "votes",
      invalidMessage: "Votes must be less than 100000",
    },
    {
      cols: [
        {
          view: "button",
          value: "save",
          id: "save",
          css: "webix_primary",
          click: save,
        },
        { width: 50 },
        {
          view: "button",
          value: "Clear",
          css: "webix_secondary",
          click: clear,
        },
      ],
    },
    {},
  ],
  rules: {
    title: webix.rules.isNotEmpty,
    year: function (value) {
      return value >= 1970 && value <= new Date().getFullYear();
    },
    rating: webix.rules.isNumber,
    votes: function (value) {
      return value <= 100000 && value > 0;
    },
  },
};
