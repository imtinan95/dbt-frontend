export default [
    { key: 'candidates', structure: ['RollNo', 'CandidateName', 'CNIC', 'DOB', 'Contact', 'Degree'] },
    {
        key: 'divisions',
        structure: ['DivisionID', 'DivisionName', 'Contact', 'DivisionManager', 'ParentMinistry', 'MinistryID'],
    },
    { key: 'employees', structure: ['EmployeeID', 'EmployeeName', 'CNIC', 'DOB', 'Contact'] },
    {
        key: 'ministries',
        structure: ['MinistryID', 'MinistryName', 'MinistryDivisions', 'MinistryHQ', 'MinisterResponsible'],
    },
    { key: 'positions', structure: ['PosID', 'PositionName', 'Desgination', 'Pay', 'PostingCity'] },
];
