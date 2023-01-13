import fs from 'fs';
import { getEmployees } from './employees.js';

const employees = getEmployees();
const employeeList = getEmployeeList(employees);

fs.writeFileSync("src/output/employeeList.txt", employeeList);

function getEmployeeList(emps) {
	let r = '';
	r += `There are ${emps.length} employees:`;
	for (const emp of emps) {
		console.log(emp.firstName);
	}

	return r;
}
