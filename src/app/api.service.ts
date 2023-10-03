import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { datamodel } from './signup/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 


  private apiUrl = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
  
  createdetails(data:datamodel){
    return this.http.post<datamodel>("http://localhost:3000/posts",data)
  }


    changePassword(id:number,Email: string, Password:string,ConfirmPassword:string): Observable<any> {
      
     const requestBody = {
       Email:Email,
       Password:Password,
       ConfirmPassword:ConfirmPassword
     };
      return this.http.put("http://localhost:3000/posts/"+id, requestBody);
    }

    fetchData(id:number){
      return this.http.get("http://localhost:3000/posts/"+id)
    }
  }
  

  
  









  

 

  

