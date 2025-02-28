import myVariable from "./myVariable.js";

const menuItems = [
    { title: "Home", path: "/" },
    {
        title: "About Us",
        path: "#",
        subMenu: [
            { title: "About our trust", path: myVariable.trust },
            { title: "Mission and Vision", path: myVariable.mission },
        ],
    },
    {
        title: "Find a Doctor",
        path: "#",
        subMenu: [
            { title: "Name wise", path: myVariable.nameWise },
            { title: "Department wise", path:  myVariable.departmentWise},
            { title: "Branch wise", path:  myVariable.branchWise},
        ],
    },
    {
        title: "Our Service",
        path: "#",
        subMenu: [
            { title: "Hospital Services", path: myVariable.hospitalService },
            { title: "Home Service in COVID-19 Situation", path: myVariable.homeServiceCovid },
            { title: "Diagnostic Services", path: myVariable.diagnosticService },
            // { title: "Diabetes Center", path: myVariable.diabetesCenter },
            // { title: "Pain & Physiotherapy", path: myVariable.painPhysiotherapy },
            // { title: "Dental Center", path: myVariable.dentalCenter },
            // { title: "Corporate & Home Services", path: myVariable.corporateHome },
            { title: "Cardiac Service", path: myVariable.cardiacService },
            { title: "Health Check-up Package", path: myVariable.healthCheckupPackage },
            // { title: "Child Development Centre (CDC)", path: myVariable.childDevelopmentCenter },
            { title: "Surgery Packages", path: myVariable.surgeryPackage }
        ]
    },
    { title: "Patient Care", path: myVariable.patientCarePageLink },
    { title: "Contact", path: myVariable.contact },
];

export default menuItems;