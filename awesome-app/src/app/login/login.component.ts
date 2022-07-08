
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  public message: string= "";

  constructor(private httpClient: HttpClient, private router: Router, private store: Store) { 

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
              .post<any>(environment.baseurl + "/login", {name, password})
              .subscribe({
                next: (result) => {
                   console.log("result", result);
                   //sessionStorage.setItem("isAuthenticated", "true");
                  this.store.dispatch({type: "SET_AUTH", payload: {
                    isAuthenticated: true,
                    userName: name,
                    accessToken: result.accessToken,
                    refreshToken: result.refreshToken
                  }});

                   this.router.navigateByUrl("/home");
                },
                error: (err) => {
                  console.log("err", err);
                  this.message = "Invalid credentials";
                  //sessionStorage.setItem("isAuthenticated", "false");
                  this.store.dispatch({type: "SET_AUTH", payload: {
                    isAuthenticated: false,
                    userName: "",
                    accessToken: "",
                    refreshToken: ""
                  }});
                },
                complete: () => {}
              })

    }
    else{
      this.message = "Please provide the inputs.";

    }
    



  }

}
