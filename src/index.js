import fs from 'fs';
import { getEmployees } from '../employees.js';

const employees = getEmployees();
const employeeList = getEmployeeList(employees);

fs.writeFileSync("employeeList.txt", employeeList);

function getEmployeeList(emps) {
	let r = '';
	r += `There are ${emps.length} employees:`;
	return r;
}
