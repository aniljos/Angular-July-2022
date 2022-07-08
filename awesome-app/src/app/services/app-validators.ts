import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { map, Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AppValidators{

    constructor(private httpClient: HttpClient){

    }

    static mobile(control: AbstractControl): ValidationErrors| null{

        const value = control.value;
        if(value){
                const regEx = /[789][0-9]{9}/;
                const isValid = regEx.test(value);
                return isValid ? null : {mobileNo: "invalid"}
        }
        return null;
    }

    static forbiddenValues(values: string []) : ValidatorFn{

        //return a ValidatorFn

        return (control: AbstractControl) : ValidationErrors | null=> {

            const value = control.value;
            if(value){
                    
                    const isValid = !values.includes(value);
                    return isValid ? null : {forbidden: "invalid"}
            }
            return null;
        }
    }

    unique = (control: AbstractControl): Observable<ValidationErrors | null> => {

        const value = control.value;
        //if(value){

            const url = "http://localhost:9000/unique/" + value;
            return this.httpClient
                            .get<{unique: boolean}>(url)
                            .pipe(
                                map(result => result.unique === true ? null : {unique: "none"} )
                            )


        //}
    }
}