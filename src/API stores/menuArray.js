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
    { title: "Patient Care", path: myVariable.patientCarePageLink },
    { title: "Contact", path: myVariable.contact },
];

export default menuItems;