import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subject, ReplaySubject, BehaviorSubject } from 'rxjs';
import {take, tap, map, filter, debounceTime} from 'rxjs/operators';

import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchFormGroup: FormGroup;
  public data: Array<string> = new Array<string>();

  public results$: Observable<Array<string>> = new Observable<Array<string>>();

  constructor(private httpClient: HttpClient) { 

        //  const obs = interval(1000)
        //        .pipe(
        //          take(10),
        //          tap(x => console.log("in tap", x)),
        //          filter(x => x % 2 === 0),
        //          map(x => x * x),
                 
        //        )

        //   obs.subscribe(result => console.log("in subscriber #1", result));
        //   obs.subscribe(result => console.log("in subscriber #2", result));

        //const subject = new Subject<Number>();
        //const subject = new ReplaySubject<Number>();
        const subject = new BehaviorSubject<Number>(100);

        let num = 0

        const handle = setInterval(() => {

          subject.next(num++);
          
          if(num === 5){
            subject.subscribe(r => console.log("subscriber2", r));
          }

          if(num === 15){
            clearInterval(handle);
          }

        }, 500);

        subject.subscribe(r => console.log("subscriber1", r));

       

      this.searchFormGroup = new FormGroup({
            searchCtrl: new FormControl("", [Validators.required, Validators.minLength(3)], [])
      });
  }

  ngOnInit(): void {

       const searchCtrl = this.searchFormGroup.get("searchCtrl");
       this.searchFormGroup
                .get("searchCtrl")
                ?.valueChanges
                .pipe(
                  filter(v => searchCtrl?.valid === true),
                  debounceTime(1000)
                )
                .subscribe(value => {
                    console.log(value);
                    //https://en.wikipedia.org/w/api.php?action=opensearch&search=angular
                    const url = "https://en.wikipedia.org/w/api.php";
                    var params = new HttpParams()
                                        .set("action", "opensearch")
                                        .set("search", value)
                                        .set("limit", 20)
                                        .set("origin", "*")
                    
                    // Get the body
                    this.httpClient
                            .get(url, {params})
                            .pipe(
                              map((data: any) => data[1])
                            )
                            .subscribe((data) => {
                              console.log(data);
                              this.data = data;
                            });

                    this.results$ = this.httpClient
                            .get<Array<string>>(url, {params})
                            .pipe(
                              map((data: any) => data[1])
                            );
                            


                    // Get the complete response
                    // this.httpClient.get(url, {params, observe: 'response'})
                    //                           .subscribe(resp => console.log(resp));

                    

                });


  }

}
