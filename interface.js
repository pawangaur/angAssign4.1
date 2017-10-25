var Studentlister;
(function (Studentlister) {
    function printd(student) {
        console.log(" Student details are : " + student.name + " from " + student.college);
    }
    Studentlister.printd = printd;
})(Studentlister || (Studentlister = {}));
;
var me = { name: "Pawan", college: "NITUK" };
Studentlister.printd(me);
