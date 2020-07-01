class PatientsListScreen {
    init() {
        this.renderTable();
    }
    renderTable() {
        var text = $("#patientsTemplate").html();
        var dataTable = dataSVC.getAll();
        for (var i = 0; i < dataTable.length; i++) {
            var result = renderer.renderTemplate(i, text, dataTable[i]);
            $(".patientsTable tbody").append(result);
        }
    }
}
var patientScr = new PatientsListScreen();