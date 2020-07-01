class DataService {
    getAll() {
        return patientsData;
    }
    getById(id) {
        for(var i = 0; i < patientsData.length; i++) {
            if (patientsData[i].ID == id) {
                return patientsData[i];
            }
        }
    }
    getMaxId() {
        var maxId = Math.max.apply(Math, patientsData.map(function (o) { return o.ID; }));
        return maxId;
    }
    add(newPatient) {
        newPatient.ID = dataSVC.maxId + 1;
        patientsData.push(newPatient);
        return patientsData;
    }
    edit(id, pData) {
        var objItems = this.getById(id);
        for (x in objItems) {
            for (x in pData) {
                objItems[x] = pData[x];
            }
        }
        return objItems;
    }
    deleteData(ID) {
        patientsData.splice(this.getIndexById(ID), 1);
        return patientsData;
    }
    getIndexById(Id) {
        var indexObj = patientsData.findIndex(obj => obj.ID == Id);
        return indexObj;
    }
    getObject(id) {
        var i = dataSVC.getIndexById(id);
        var obj = patientsData[i];
        return obj;
    }
}
var dataSVC = new DataService();