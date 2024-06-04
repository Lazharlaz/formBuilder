import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { User } from '../model/user';
import { Adresse } from '../model/Adresse';
import { FormUserComponent } from './form-user/form-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormUserComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactiveForm';


  constructor(formBuilder:FormBuilder){


  }

}
