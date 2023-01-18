import { Component, Injectable, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class LoginComponent implements OnInit {

  
  constructor(
    private myservice: MyServiceService
  ) { }

  ngOnInit() {}
  getLogin() {
    let pass = document.getElementById('pass') as HTMLInputElement;
    var a = this.myservice.checkPass(pass.value)
    if (a)
    alert("simon")
    else
    alert("nomis")
  }
}
