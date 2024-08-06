import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDataService } from '../service/login-data.service';
import { MessageSvcService } from 'src/app/common-svc/message-svc.service';
import { LoginModelService } from '../service/login-model.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit{
  userForm!: FormGroup;
  constructor(
    private modelSvc: LoginModelService,
    private dataSvc: LoginDataService,
    private fb: FormBuilder,
    private msg: MessageSvcService,
    private router: Router,
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
        userContactAddresses:this.fb.array([
          this.createContactAddress()
        ])
      });
      
    } catch (error) {
      this.msg.systemErrorMsg(error);
    }
  }
  createContactAddress(): FormGroup {
    return this.fb.group({
      id: [0],
      userId: [0],
      contactNo: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  get userContactAddresses(): FormArray {
    return this.userForm.get('userContactAddresses') as FormArray;
  }

  addContactAddress() {
    this.userContactAddresses.push(this.createContactAddress());
  }

  removeContactAddress(index: number) {
    this.userContactAddresses.removeAt(index);
  }
  
  save() {
    try {
      if (this.userForm.valid) {
        const userData = this.modelSvc.prepareData(this.userForm.value);
        this.dataSvc.save(userData).subscribe((res) => {
          if (res.id) {
            this.msg.successMsg('User is created Successfully', 'Success!');
            this.router.navigate(['/login']);
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
