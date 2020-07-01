class PatientModel {
    constructor() {
        this.ID = 0;
        this.fname = "";
        this.mname = "";
        this.lname = "";
        this.email = "";
        this.DOB = new Date();
        this.gender = 1;
        this.lastCheck = new Date();
        this.status = 0;
        this.Active = true;
        this.CreatedBy = 1;
        this.creationDate = new Date();
    }
    fromObject(obj) { 
        var newObj = new Object();
        for (var x in obj) {
            this.x = obj[x];
            newObj[x] = this.x;
        }
        return newObj;
    }
    setGender(gender) {
        if (gender == 1) {
            return 1;
        } else {
            return 2;
        }
    }
    setStatus(status) {
        switch (status) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 2;
        }
    }
}
var newPatient = new PatientModel();