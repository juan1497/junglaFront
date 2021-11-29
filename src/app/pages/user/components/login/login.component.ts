import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/shared/models/auth';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  registerForm!:FormGroup
  constructor(private builder:FormBuilder,private api:AuthService,private router:Router) {
    this.loginForm=this.builder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
    this.registerForm=builder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      repeatPassword:['',[Validators.required]]
    })
   }

  ngOnInit(): void {}
  login(){
    if(this.loginForm.valid){
      const user:Auth={
        email:this.loginForm.get('email')?.value,
        password:this.loginForm.get('password')?.value
      }
      console.log(user)
      this.api.login(user).subscribe((response:any)=>{
        switch(response.status){
          case 201:
            localStorage.setItem("token",response.data.token)
            localStorage.setItem("user",response.data.user.name)
            localStorage.setItem("email",response.data.user.email)
            localStorage.setItem("role",response.data.user.role)
            window.location.replace("")
            this.loginForm.reset();
           break;
          default:
            alert("ha ocurrido un error");
          break;
       }
        
      })
    }
  }
  register(){
    if(this.registerForm.valid){
      const user:Auth={
        name:this.registerForm.get('name')?.value,
        email:this.registerForm.get('email')?.value,
        password:this.registerForm.get('password')?.value
      }
      this.api.register(user).subscribe((response:any)=>{
        console.log(response)
        if(response.status==201){
          alert("Registro Completado");
          this.registerForm.reset();
        }else{
          alert("Algo a fallado");
        }
        
      })
    }
  }

}
