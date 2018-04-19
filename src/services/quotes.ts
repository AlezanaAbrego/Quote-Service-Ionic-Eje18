import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()

export class QuoteService{
   
    public data:any;

    constructor(private http:Http){
        
    }

    getFavoriteSports(){
        this.http.get("http://localhost:8080/test.json")
        .subscribe(
            res=> {
                this.data = res.json();
                console.log(this.data);
              // console.log("QuoteService "+this.data);
            },
            error=>{
                console.log(error);
            }
        );
    }
}