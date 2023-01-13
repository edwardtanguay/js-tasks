import fs from 'fs';
import { getEmployees, getEmployeeList } from './employees.js';

const employees = getEmployees();
const employeeList = getEmployeeList(employees);
const employeeListUk = getEmployeeList(employees, 'UK');
const employeeListUsa = getEmployeeList(employees, 'USA');

fs.writeFileSync('src/output/employeeList.txt', employeeList);
fs.writeFileSync('src/output/employeeListUk.txt', employeeListUk);
fs.writeFileSync('src/output/employeeListUsa.txt', employeeListUsa);

