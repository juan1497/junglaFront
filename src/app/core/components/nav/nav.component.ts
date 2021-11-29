import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  sesion:boolean = false;

  constructor(private router:Router, private api:AuthService) { }

  ngOnInit(): void {
    this.sesion=localStorage.getItem("user")?true:false;
  }
  logout(){
    const token=localStorage.getItem("token")
    this.api.logout(token)
    .subscribe((response:any) => {
      switch(response.status){
        case 202: 
          localStorage.clear()
          window.location.replace("/");
          break;
        default:
          alert(" hubo un error")
          break;
      }
    })
  }

}
