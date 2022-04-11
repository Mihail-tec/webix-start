const dashBoard = {
    view:"tabbar",
    id:"filterYear",
    value:"all",
    options:[
        {id:"all", value:"All"},
        {id:"old", value:"Old"},
        {id:"modern", value:"Modern"},
        {id:"new", value:"New"},
    ],
    on:{
        onChange: () => {
            $$("datatable").filterByAll();
        }
    }
}
