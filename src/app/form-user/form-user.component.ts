
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Adresse } from '../../model/Adresse';
import { User } from '../../model/user';

@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [CommonModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {

  constructor(private formBuilder: FormBuilder) { }

  formUser = this.formBuilder.group({
    name: [''],
    address: this.formBuilder.group({
      streetName: [''],
      city: [''],
      zipCode: [''],
      number: [''],

    }),
    credentials: this.formBuilder.group({
      email: [''],
      password: [''],
    })
  });



  createUser() {

    const adresse: Adresse = {
      number: this.formUser.value.address?.number ?? "",
      streetName:  this.formUser.value.address?.streetName ?? "",
      zipCode:  this.formUser.value.address?.zipCode ?? "",
      city:  this.formUser.value.address?.city ?? "",
    };
    const user: User = new User(
      this.formUser.value.name ?? "",
      this.formUser.value.credentials?.email ?? "",
      this.formUser.value.credentials?.password ?? "",
      adresse
    );


    console.log(this.formUser.value)

  }




}
