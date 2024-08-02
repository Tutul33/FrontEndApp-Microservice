import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDataService } from '../service/login-data.service';
import { MessageSvcService } from 'src/app/common-svc/message-svc.service';
import { LoginModelService } from '../service/login-model.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  userForm!: FormGroup;
  constructor(
    private modelSvc: LoginModelService,
    private dataSvc: LoginDataService,
    private fb: FormBuilder,
    private msg: MessageSvcService
  ) {}
  ngOnInit(): void {
    localStorage.setItem('loggedIn', 'false');
    this.createForm();
  }
  createForm() {
    try {
      this.userForm = this.fb.group({
        fullName: ['', [Validators.required]],
        email: ['', [Validators.required]],
        userName: ['', [Validators.required]],
        password: ['', [Validators.required]],
        termsAndConditions:[false,[Validators.required]],
        age:[null],
        birthDate:[null],
        birthTime:[null],
        address:[null],
        country:[null],
      });
    } catch (error) {
      this.msg.systemErrorMsg(error);
    }
  }

  save() {
    try {
      if (this.userForm.valid) {
        const userData = this.modelSvc.prepareData(this.userForm.value);
        this.dataSvc.save(userData).subscribe((res) => {
          if (res.id) {
            this.msg.successMsg('User is created Successfully', 'Success!');
            this.userForm.markAsDirty();
          } else {
            this.msg.warningMsg('Failed.', 'Warning!');
          }
        });
      } else {
        this.msg.errorMsg('Failed.', 'Error!');
      }
    } catch (error) {
      this.msg.systemErrorMsg(error);
    }
  }
}
