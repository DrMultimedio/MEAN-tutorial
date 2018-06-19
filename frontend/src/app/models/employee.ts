export class Employee {

    constructor(_id = '', name = '', position= '', office='', salary = 0){
        this._id = _id;
        this.name = name;
        this.poistion = position;
        this.office = office;
        this.salary = salary;
    }

    _id: string;
    name: string;
    poistion: string;
    office: string;
    salary: number;
}
