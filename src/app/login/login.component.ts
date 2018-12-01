import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule ,Form, FormGroup, Validators ,FormControl,Validator } from '@angular/forms';
import { SignupService } from './../services/signup.service';
import { RouterModule, Routes, Router, ActivatedRoute}  from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginname:any;
  password:any;
  className:any;
  msg:any;
  email:any;
  public shouldShow :boolean = false;
  public shouldShow1 :boolean = false;
  public loginStatus :boolean = false;

  constructor(private signupservice : SignupService,private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
			loginname: new FormControl('',[Validators.required]),
			password: new FormControl('',Validators.required)
		});
  }

  submitForm(form){
     
  	if(this.loginname =='' || this.loginname == undefined){ this.shouldShow = true; }else{ this.shouldShow = false; }
	  if(this.password =='' || this.password == undefined){ this.shouldShow1 = true; }else{ this.shouldShow1 = false; }

   if(this.form.valid){

		let loginname = form.value.loginname;
    let password = form.value.password;

    const body = {
        email:loginname,
        pass:password
      };

      this.signupservice.postDataToService('login', body)
      .subscribe(
        res => {
          try {
              if(res.status){
                this.loginStatus = true;
                this.form.reset();
                this.className = 'success';
                this.msg = res.msg;
                setTimeout(() => {  this.router.navigate(['/']); }, 2000);
              }else{
                this.className = 'danger';
                this.msg = res.msg;
              }
          } catch (e) {
            console.log('Success Exception LoginComponent signupService' + e);
          }
        },
        err => {
          try {
            console.log('Error :' + err);
          } catch (e) {
            console.log('Error Exception LoginComponent signupService ' + e);
            
          }
        }
      );

    }else{
      console.log('invalid input');
    }
    }

}
