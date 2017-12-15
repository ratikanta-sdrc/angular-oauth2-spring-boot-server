import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient){}

  ngOnInit(){
    
        const httpOptions = {
          headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa("ClientId:secret"), 
          'Content-type': 'application/x-www-form-urlencoded; charset=utf-8' }, )
        };
    
        let params = new URLSearchParams();
        params.append('username','rk');
        params.append('password','rk');    
        params.append('grant_type','password');
        params.append('client_id','ClientId');
    
        this.http.post('/oauth/token', params.toString(), httpOptions).subscribe(
          data=>{
             console.log(data) 
          },
    
          err=>{
            console.log(err)
          }
        )
      }
}
