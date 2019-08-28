import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-snackbar';
  showError:boolean = false;
  userList: any = [];
  errorList: any = [];
  errorObj: any = {"heading":"Error Message Heading...","desc":"this error occured due to xyz reasons!!"}
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    console.log("main component ng on it");
    this.http.get("http://jsonplaceholder.typicode.com/users").
      subscribe(
        (data) => {
        console.log(data)
        this.userList = data;
        },
        (err) => {
          console.log(err);
          this.errorObj["heading"] = err.name;
          this.errorObj["desc"]= err.message;
          console.log(this.errorObj);
          this.errorList.push(this.errorObj);
          this.showError = true;
        }
    )
  }
  
  

  // getData(e) {
  //   console.log(e);
  //   this.showError = e["showError"];
  // }
}
