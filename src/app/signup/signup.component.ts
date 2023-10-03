import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  createaccount!: FormGroup;
  constructor(private fb: FormBuilder, private api: ApiService, private http: HttpClient, private router: Router) { }
  ngOnInit() {
    this.createaccount = this.fb.group({
      Email: ['', [Validators.required, Validators.pattern("[a-z]+[0-9]+[@]+[a-z]+[.]+[a-z]+")]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]]
    })
  }

  addsignup(data: any) {
    //console.log(data)
    this.http.get<any>("http://localhost:3000/posts").subscribe(res => {
      const user = res.find((a: any) => {
        return a.Email === this.createaccount.value.Email;
      });

      if (user) {
        alert("Email already exists")
      } else {
        if (this.createaccount.valid && this.createaccount.value.Password === this.createaccount.value.ConfirmPassword) {
          this.api.createdetails(this.createaccount.value).subscribe((res) => {
            console.log(res);
            alert("successfully signed in..");
            this.router.navigate(['/signin'])
            this.createaccount.reset();
          })
        }
      }
    }



    )
  }
}