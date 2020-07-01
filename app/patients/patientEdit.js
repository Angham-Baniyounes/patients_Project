class PatientEditScreen {
    init() {
        $("#savePatientData").click(function () {debugger;
            if ($(this).hasClass("update")) { 
                var id = renderer.renderDataInForm();
                patientEditScr.editPatient(id);
                
                $("#savePatientData").removeClass("update");
            } else {
                patientEditScr.addPatient();
            }
        });
        $(".editBtn").click(function () { debugger;
            $("#savePatientData").addClass("update");
            renderer.renderDataInForm(this);
        });
    }
    addPatient() {debugger;
        var newObj = this.getDataFromUI();
        dataSVC.add(newObj);
        router.navigate("patientsList");
    }
    editPatient(id) {debugger;
        var obj = dataSVC.getById(id);
        var newData = newPatient.fromObject(obj);
        return newData;
    }
    getDataFromUI() {
        var newP = {
            fname: $("#fname").val(),
            mname: $("#mname").val(),
            lname: $("#lname").val(),
            DOB: $('#DOB').val(),
            email: $("#email").val(),
            lastCheck: $("#lastCheck").val(),
            gender: this.getGender(),
            status: this.getStatus(),
            Active: $("#activeP").val(),
        };
        return newP;
    }
    getGender() {
        if ($("input[name = gender]:checked").val() == 1) {
            return "Male";
        } else {
            return "Female";
        }
    }
    getStatus() {
        switch ($("#status option:selected").val()) {
            case '0':
                return "Draft";
            case '1':
                return "Saved";
            case '2':
                return "Deleted";
        }
    }
    checkActive() {
        if ($("#activeP:checked").val()) {
            return true;
        } else {
            return false;
        }
    }
    setDataToUI(obj, data) {
        var newObj = dataSVC.getById(obj.ID);
        var i = dataSVC.getIndexById(obj.ID);
        obj.fname = $("#fname").val();
        obj.mname = $("#mname").val();
        obj.lname = $("#lname").val();
        obj.DOB = $('#DOB').val();
        obj.email = $("#email").val();
        obj.lastCheck = $("#lastCheck").val();
        obj.gender = this.getGender();
        obj.status = this.getStatus();
        obj.Active = this.checkActive();
        newObj = obj;
        data[i] = newObj;
        patientsData = data;
        return patientsData;
    }
}
var patientEditScr = new PatientEditScreen();