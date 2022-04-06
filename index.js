webix.ready(function () {
  webix.ui({
    rows: [
      {
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
      },
      {
        type: "clean",
        cols: [
          {
            css: "colorBack",
            width: 200,
            rows: [
              {
                view: "list",
                scroll: false,
                data: [
                  { value: "Dashboard" },
                  { value: "Users" },
                  { value: "Products" },
                  { value: "Location" },
                ],
              },
              {
                type: "clean",
                view: "template",
                autoheight: true,
                template:
                  '<span class="webix_icon wxi-check " > </span>Connected',
                css: "text_decor",
              },
            ],
          },
          { view: "resizer" },
          {
            view: "datatable",
            id: "datatable",
            autoConfig: true,
            data: small_film_set,
            template: "#title# #year# #rating# #votes#",
          },
          {
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
                    value: "add new",
                    css: "webix_primary",
                    click: save,
                  },
                  { width: 50 },
                  {
                    view: "button",
                    value: "clear",
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
              rating: function (value) {
                if (webix.rules.isNumber(value)) {
                  return true;
                }
              },
              votes: function (value) {
                return value <= 100000 && value > 0;
              },
            },
          },
        ],
      },
      {
        view: "template",
        css: "centerText",
        autoheight: true,
        template:
          "The software is provided by <a href='https://ru.webix.com'>https://ru.webix.com/</a>. All right reserved (c)",
      },
    ],
  });
});
