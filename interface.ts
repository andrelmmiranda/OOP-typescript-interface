// Crie, em TypeScript, uma interface chamada UserProps, que conterá as propriedades firtsName,lastName, username, email, password, cpf, contacto e isAdmin. Após criar a interface, crie uma classe User implementando essa interface. Faça os métodos getter e setter de cada propriedade.

interface UserProps{
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    cpf: string;
    contacto?: number;
    isAdmin: boolean;
}

class User implements UserProps{
    constructor(public firstName: string = '', public lastName: string = '', public userName: string = '', public email: string = '', public password: string = '', public cpf: string = '', public contacto?: number, public isAdmin: boolean = false){
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.cpf = cpf;
        this.contacto = contacto;
        this.isAdmin = isAdmin;
    }

    setFirstName(firstName: string): void{
        this.firstName = firstName;
    }

    getFirstName(){
        return this.firstName;
    }

    setLastName(lastName: string): void{
        this.lastName = lastName;
    }

    getLastName(){
        return this.firstName;
    }

    setUserName(userName: string): void{
        this.userName = userName;
    }

    getUserName(){
        return this.userName;
    }

    setEmail(email: string): void{
        this.email = email;
    }

    getEmail(){
        return this.email;
    }

    setPassword(password: string): void{
        this.password = password;
    }

    getPassword(){
        return this.password;
    }

    setCPF(cpf: string): void{
        this.cpf = cpf;
    }

    getCPF(){
        return this.password;
    }

    setContacto(contacto: number): void{
        this.contacto = contacto;
    }

    getContacto(){
        return this.contacto;
    }

    setIsAdmin(isAdmin: boolean): void{
        this.isAdmin = isAdmin;
    }

    getIsAdmin(){
        return this.isAdmin;
    }
}

const user1 = new User();
user1.setFirstName('Karl');
user1.setLastName('Marx');
user1.setUserName('DasKapital');
user1.setEmail('karlmarx@mail.com');
user1.setPassword('gundrisse');
user1.setCPF('00100200304');
user1.setIsAdmin(true);

console.log(user1);