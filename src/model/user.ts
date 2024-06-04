import { Adresse } from "./Adresse";

export class User{
    name:string;
   email:string;
   password:string;
   adresse:Adresse;
   constructor(name:string,email:string,password:string,adresse:Adresse){
    this.name = name;
    this.email = email;
    this.password = password;
    this.adresse = adresse;
   }
}