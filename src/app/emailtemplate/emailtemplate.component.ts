import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { SignupService } from './../services/signup.service';
declare var $:any;
@Component({
  selector: 'app-emailtemplate',
  templateUrl: './emailtemplate.component.html',
  styleUrls: ['./emailtemplate.component.css']
})
export class EmailtemplateComponent implements OnInit {
    form: FormGroup;
    submitted = false;
    msg: any;
    success: any;
    constructor(private signupservice:SignupService) { }

    ngOnInit() {

        this.form = new FormGroup({
            name: new FormControl('',Validators.required),
            email: new FormControl('',[Validators.required,Validators.email]),
            mobile: new FormControl('',Validators.required),
            subject: new FormControl('',Validators.required),
            message: new FormControl('',Validators.required),
            attachment: new FormControl(''),
		});

    $('#characterLeft').text('200 characters left');
        $('#message').keydown(function () {
            var max = 200;
            var len = $(this).val().length;
            if (len >= max) {
                $('#characterLeft').text('You have reached the limit');
                $('#characterLeft').addClass('red');
                $('#btnSubmit').addClass('disabled');            
            } 
            else {
                var ch = max - len;
                $('#characterLeft').text(ch + ' characters left');
                $('#btnSubmit').removeClass('disabled');
                $('#characterLeft').removeClass('red');            
            }
        });    
    
  }
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

   onSubmit(form) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }else{
        this.submitted =false;
        const body = {
            name: form.value.name,
            email: form.value.email,
            mobile: parseInt(form.value.mobile),
            subject: form.value.subject,
            message: form.value.message,
            attachment: form.value.attachment
          };
        this.signupservice.postDataToService('contactus', body)
          .subscribe(
            res => {
              try {
              if(res.status){
               this.msg = "Thank you! your query have submitted.";
               this.success = true;
               this.form.reset();
               setTimeout(() => { this.success = false; }, 2500);
              }else{
                  console.log(res.status);
              }
              } catch (e) {
                console.log('Success Exception emailComponent signupService' + e);
              }
            },
            err => {
              try {
                console.log('Error :' + err);
              } catch (e) {
                console.log('Error Exception emailComponent signupService ' + e);
              }
            }
          );
    }
}
 
}
