export class Person{

    firstName!: string;
    middleName!: string;
    lastName!: string;

    constructor(data?:any){
        this.firstName = data.firstName || 'James';
        this.middleName = data.middleName || 'Michael';
        this.lastName = data.lastName || 'Morin';
        
    }

}