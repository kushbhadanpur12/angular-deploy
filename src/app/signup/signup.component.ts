
import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule ,Form, FormGroup, Validators ,FormControl,Validator } from '@angular/forms';
import {AbstractControl} from '@angular/forms';
import { SignupService } from './../services/signup.service';
declare var $:any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public shouldShow :boolean  = false;
	public shouldShow1 :boolean = false;
	public shouldShow2 :boolean = false;
	public shouldShow3 :boolean = false;
  public shouldShow4 :boolean = false;
  public success 	   :boolean = false;

  msg:any;
	fname:any;
	lname:any;
	pwd:any;
	email:any;
	mobile:any;
	public duplicate_mobile :boolean = false;
	public duplicate_email :boolean = false;

	form: FormGroup;

  
  constructor(private signupservice:SignupService) { }

  ngOnInit() {
    this.form = new FormGroup({
			email: new FormControl('',[Validators.required,Validators.email]),
			fname: new FormControl('',Validators.required),
			lname: new FormControl('',Validators.required),
			pwd: new FormControl('',Validators.required),
			mobile: new FormControl('',Validators.required)
		});
  }

  onKey(evt){
    if(this.fname =='' || this.fname == undefined){ this.shouldShow = true; }else{ this.shouldShow = false; }
    if(this.lname =='' || this.lname == undefined){ this.shouldShow1 = true; }else{ this.shouldShow1 = false; }
    if(this.email =='' || this.email == undefined){ this.shouldShow2 = true; }else{ this.shouldShow2 = false; }
    if(this.pwd =='' || this.pwd == undefined){ this.shouldShow3 = true; }else{ this.shouldShow3 = false; }
    if(this.mobile =='' || this.mobile == undefined){ this.shouldShow4 = true; }else{ this.shouldShow4 = false; }  
  }
  customvalidation(form){
    this.onKey(form);
      if(this.form.valid){

         this.duplicate_email = false;
         this.duplicate_mobile = false;
         this.shouldShow2 = false;
         this.shouldShow4 = false;
  
      let fname = form.value.fname;
      let lname = form.value.lname;
      let email = form.value.email;
      let mobile = form.value.mobile;  
      let pass = form.value.pwd;

    const body = {
        fname:fname,
        lname:lname,
        email:email,
        mobile:parseInt(mobile),
        pass :pass
      };

      this.signupservice.postDataToService('signup', body)
      .subscribe(
        res => {
          try {
          if(res.status){
           this.msg = "Congratulation ! you have successfully registered.";
           this.success = true;
           this.form.reset();
           setTimeout(() => { this.success = false; }, 2500);
          }else{
            console.log('error to insert data');
          }
          } catch (e) {
            console.log('Success Exception signupComponent signupService' + e);
          }
        },
        err => {
          try {
            console.log('Error :' + err);
          } catch (e) {
            console.log('Error Exception signupComponent signupService ' + e);
          }
        }
      );
     }else{
         console.log('invalid form');
     }
  
    }

}
