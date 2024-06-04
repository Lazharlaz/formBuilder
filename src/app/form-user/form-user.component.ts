
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Adresse } from '../../model/Adresse';
import { User } from '../../model/user';

@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [CommonModule,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {

 
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    adresseNumber: new FormControl(''),
    adresseStreetName: new FormControl(''),
    adresseZipCode: new FormControl(''),
    adresseCity: new FormControl(''),
    })
  
    createUser(){
     
        const adresse: Adresse = {
          number: this.userForm.value.name ?? "",
         streetName: this.userForm.value.adresseStreetName ?? "",
         zipCode: this.userForm.value.adresseZipCode ?? "",
          city:this.userForm.value.adresseCity ?? "",
        };
        const user: User = new User(
          this.userForm.value.name ?? "",
          this.userForm.value.email ?? "",
          this.userForm.value.password ?? "",
          adresse
        );
      
     
     console.log(user)
  
    }
  
  
    

}
