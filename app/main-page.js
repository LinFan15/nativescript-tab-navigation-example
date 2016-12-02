function onNavigatingTo(args) {
   const page = args.object
    page.bindingContext = {
        tabItems: [
            { path: "tabs/tab1", iconCode: "\uf005", label: "Tab1" },
            { path: "tabs/tab2", iconCode: "\uf041", label: "Tab2" },
            { path: "tabs/tab3", iconCode: "\uf002", label: "Tab3" }
        ]
    }
}


exports.onNavigatingTo = onNavigatingTo