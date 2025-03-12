const company = {
    sales: [
        { name: "John", salary: 1000 },
        { name: "Alice", salary: 600 },
    ],
    development: {
        web: [
            { name: "Peter", salary: 2000 },
            { name: "Alex", salary: 1800 },
        ],
        internals: [{ name: "Jack", salary: 1300 }],
    },
};

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((acc, employee) => acc + employee.salary, 0);
    }
    return Object.values(department).reduce(
        (acc, subDep) => acc + sumSalaries(subDep),
        0
    );
}

console.log(sumSalaries(company));
