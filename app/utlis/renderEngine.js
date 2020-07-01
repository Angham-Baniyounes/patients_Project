class RenderEngine { 
    renderTemplate(i, templateText, obj) {
        var str = templateText, pos1 = 0, pos2 = 0;
        var formatter = new Intl.DateTimeFormat("en-GB");
        while (pos1 != -1 && pos2 != -1) {
            pos1 = str.indexOf("{{");
            pos2 = str.indexOf("}}");
            var result = (str.substring((pos1 + 2), pos2));
            var textObj = obj[result];
            var orderNum = "{{i}}";
            if (result == "gender") {
                if (textObj == "1") {
                    textObj = "Male";
                } else if (textObj == "2") {
                    textObj = "Female";
                }
            } else if (result == "DOB" || result == "creationDate") {
                textObj = formatter.format(textObj);
            } else if (result == "CreatedBy" && textObj == "1") {
                textObj = obj.fname;
            }
            str = str.replace(orderNum, i + 1);
            str = str.replace(("{{" + result + "}}"), textObj);
        }
        return str;
    }
    getDate(dateValue) {
        var day = ("0" + dateValue.getDate()).slice(-2);
        var month = ("0" + (dateValue.getMonth() + 1)).slice(-2);
        var dateOfDay = dateValue.getFullYear() + "/" + (month) + "/" + (day);
        return dateOfDay;
    }
    renderDataInForm(btn) { 
        var id = $(btn).parent().parent().attr("data-id");
        var obj = dataSVC.getObject(id);
        var DOB = this.getDate(obj.DOB);
        var lastCheck = this.getDate(obj.lastCheck);
        $("#fname").val(obj.fname);
        $("#email").val(obj.email);
        $("#mname").val(obj.mname);
        $('#DOB').val(DOB);
        $("#lname").val(obj.lname);
        $("#lastCheck").val(lastCheck);
        $("#status").val(obj.status);
        if (obj.gender == 1) {
            $("#male").attr("checked", "checked");
        } else {
            $("#female").attr("checked", "checked");
        }
        if (obj.Active == true) {
            $("#activeP").prop("checked", true);
        }
        $("#savePatientBtn").click(function () {
            newPatientData.editPatientData(id);
            newPatientData.setDataToUI(obj, id);
        });
    }
}
var renderer = new RenderEngine();