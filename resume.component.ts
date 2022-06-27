import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResumeFormData } from '../model/ResumeFormData';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent  {


  @Input()
  formData!: ResumeFormData;

  @Output()
  editInfoEvent: any;


  constructor() { 
    //let data = (localStorage.getItem("formData") ? localStorage.getItem("formData") : "{}") as string;
    //this.formData = JSON.parse(data);
    this.editInfoEvent = new EventEmitter<void>();
  }

  editinfo(): void {
    alert("please wait");
    this.editInfoEvent.emit(true);
  }

  // onDocLoad() {
  //   var fdata = JSON.parse(window.localStorage.getItem("formDate"));

  //   // for (var key in fdata) {
  //   //   document.getElementById(key).innerHTML = fdata[key];
  //   // }

  //   for (var key in fdata) {
  //     try {
  //       document.getElementById(key).innerHTML = fdata[key];
  //     } catch (e) {
  //       console.log("errorwithfields " + key);
  //     }
  //   }
  // }

//   demoFromHTML() {
//     var pdf = new jsPDF('p', 'pt', 'letter');
    
//     source = $('#customers')[0];

    
//     specialElementHandlers = {
        
//         '#bypassme': function (element, renderer) {
            
//             return true
//         }
//     };
//     margins = {
//         top: 80,
//         bottom: 60,
//         left: 40,
//         width: 522
//     };
    
//     pdf.fromHTML(
//     source, // HTML string or DOM elem ref.
//     margins.left, // x coord
//     margins.top, { // y coord
//         'width': margins.width, // max width of content on PDF
//         'elementHandlers': specialElementHandlers
//     },

//     function (dispose) {
        
//         pdf.save('CV.pdf');
//     }, margins);
// }

}
