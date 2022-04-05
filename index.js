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
          },
        ],
      },
      {
        autoheight: true,
        height: 850,
        type: "clean",
        width: 200,
        css: { background: "#d6d2d2" },
        cols: [
          {
            rows: [
              {
                view: "list",
                id: "mylist",
                scroll: false,
                css: { background: "#d6d2d2" },
                data: [
                  { value: "Dashboard" },
                  { value: "Users" },
                  { value: "Products" },
                  { value: "Location" },
                ],
              },
              { css: { background: "#d6d2d2" } },
              {
                type: "clean",
                view: "template",
                template:'<span class="webix_icon wxi-check " > </span>Connected',
                css: "text_decor",
              },
            ],
          },
          { view: "resizer" },
          {
            view: "datatable",
            id: "small_film_set",
            autoConfig: true,
            data: small_film_set,
          },
          {
            view: "form",
            type: "section",
            elementsConfig: {
              labelWidth: 130,
            },
            elements: [
              { view: "template", template: "edit films", type: "section" },
              { view: "text", label: "title", required: true },
              { view: "text", label: "year" },
              { view: "text", label: "rating" },
              { view: "text", label: "votes" },
              {
                cols: [
                  { view: "button", value: "add new", css: "webix_primary" },
                  { width: 50 },
                  { view: "button", value: "clear", css: "webix_secondary" },
                ],
              },
            ],
          },
        ],
      },
      {
        view: "template",
        css: "centerText",
        height: 50,
        template:
          "The software is provided by <a href='https://ru.webix.com'>https://ru.webix.com/</a>. All right reserved (c)",
      },
    ],
  });
});
