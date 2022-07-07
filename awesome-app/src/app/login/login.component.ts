import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  public message: string= "";

  constructor(private httpClient: HttpClient) { 

    this.formGroup = new FormGroup({
      name: new FormControl("", [Validators.required], []),
      pwd: new FormControl("", [Validators.required], [])
    })

  }

  ngOnInit(): void {
  }

  login(){

    if(this.formGroup.valid){

      const name = this.formGroup.get("name")?.value;
      const password = this.formGroup.get("pwd")?.value;

      this.httpClient
              .post(environment.baseurl + "/login", {name, password})
              //.subscribe(() => {}, () => {})
              .subscribe({
                next: (result) => { console.log("result", result)},
                error: (err) => {console.log("err", err)},
                complete: () => {}
              })

    }
    else{
      this.message = "Please provide the inputs.";

    }
    



  }

}
