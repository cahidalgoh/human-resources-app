import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';

export default function EmployeesList() {

    const baseUrl = "http://localhost:8080/hr-app/employees-all";
    

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        const results = await axios.get(baseUrl);
        console.log("Results load employees");
        console.log(results.data);
        setEmployees(results.data);
    }

    return (
        <div className="container">
            <div className="container text-center" style={{ margin: "30px" }}>
                <h3>Human Resources System</h3>
            </div>

            <table className="table table-striped table-hover align-middle">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Department</th>
                    </tr>
                </thead>
                <tbody>
                    { // Iteramos el listado de empleados
                    
                    employees.map((employee, index) => (
                    <tr key={index}>
                        <th scope="row">{employee.employeeId}</th>
                        <td>{employee.name}</td>
                        <td>{employee.lastName}</td>
                        <td>
                            <NumericFormat value={employee.salary}
                            displayType={'text'}
                            thousandSeparator="," prefix="$"
                            decimalScale={2} fixedDecimalScale/>
                        </td>
                        <td>{employee.department.name}</td>
                    </tr>
                    ))
                    }
                </tbody>
            </table>

        </div>
    )
}
