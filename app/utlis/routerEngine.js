class RoutingEngine {
    init() {
        $(".navigation").click(function () {
            router.displayScr(this);
        });
    }
    navigate(panel) {
        router.hideAll();
        $("." + panel).show();
    }
    displayScr(scrName) {
        var panel = scrName.dataset.panel;
        router.navigate(panel);
    }
    hideAll() {
        $(".screen").removeClass("hidden");
        $(".screen").hide();
    }
}
var router = new RoutingEngine();