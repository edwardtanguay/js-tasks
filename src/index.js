import fs from 'fs';
import { getEmployees } from './employees.js';

const employees = getEmployees();
const employeeList = getEmployeeList(employees);

fs.writeFileSync("src/output/employeeList.txt", employeeList);

function getEmployeeList(emps) {
	let r = '';
	r += `There are ${emps.length} employees:\n\n`;
	for (const emp of emps) {
		const birthday = emp.birthDate;
		r += `${emp.firstName} ${emp.lastName} - ${emp.address.country} - ${birthday}\n`;
	}
	return r;
}

function getEmployeeList2(emps) {
	let r = '';
	r += `There are ${emps.length} employees:\n\n`;
	for (let i = 0; i < emps.length - 1; i++) {
		const emp = emps[i];
		r += `${emp.firstName} ${emp.lastName}\n`;
	}
	return r;
}
