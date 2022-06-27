import { Component, OnInit } from '@angular/core';
import { ResumeFormData } from '../model/ResumeFormData';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css'],
})
export class FormSectionComponent {
  formData: ResumeFormData;
  showResume: boolean = false;
  editinfoEvent: any;

  
  constructor() {
    this.formData = {
      fname: '',
      lname: '',
      email: '',
      mobile: '',
      dob: '',
      gender: '',
      occupation: '',
      type: '',
      langauge: '',
      hobbies: '',
      address: '',
      objective: '',
      university1: '',
      yearofpassing1: '',
      percentage1: '',

      university2: '',
      yearofpassing2: '',
      percentage2: '',

      university3: '',
      yearofpassing3: '',
      percentage3: '',

      university4: '',
      yearofpassing4: '',
      percentage4: '',

      organization1: '',
      doj1: '',
      dor1: '',

      organization2: '',
      doj2: '',
      dor2: '',

      organization3: '',
      doj3: '',
      dor3: '',

      tech1: '',
      version1: '',
      lastworkedon1: '',
      rate1: '',

      tech2: '',
      version2: '',
      lastworkedon2: '',
      rate2: '',

      tech3: '',
      version3: '',
      lastworkedon3: '',
      rate3: '',

      project: '',
      describe: '',
      declare: '',
      //pic:''
    };

  }

  saveFormData() {
    console.log(this.formData);
    //localStorage.setItem("formData", JSON.stringify(this.formData));
    this.showResume = true;
  }

  editinfo(editInfo: string) {
    //alert(editInfo)
    this.showResume = false; //form secton in ts
  }
}
