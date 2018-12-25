import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formUI') NgFormUI: NgForm;
  defaultQuestion = 'pet';
  givenAnswer = '';
  genders = ['male', 'female']
  defaultGender ='male'
  objUser = {
    username: '',
    email: '',
    question: '',
    answer: '',
    gender: ''
  }
  isFormSubbmited = false;
  suggestUserName() {
    const suggestedName = 'TestUserName';
    
    this.NgFormUI.form.patchValue({
      userInfo: {
        userName: suggestedName
      }
    })
  }

  //onFormSubmit(form: NgForm) {
  //  console.log(NgForm);
  //}

  onFormSubmit() {
    this.isFormSubbmited = true;
    console.log(this.NgFormUI);
    this.objUser.username = this.NgFormUI.value.userInfo.userName;
    this.objUser.email = this.NgFormUI.value.userInfo.email;
    this.objUser.question = this.NgFormUI.value.secretQuestion;
    this.objUser.answer = this.NgFormUI.value.givenAnswer;
    this.objUser.gender = this.NgFormUI.value.gender;
    
    this.NgFormUI.reset();
  }
}
