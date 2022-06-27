import { Menu } from './../../model/Menu';
import { Component } from '@angular/core';
//import {Menu} from "../../model/Menu";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
//properties
loginImg: string= "../../../assets/resume/anjana.jpg";
menuLogin: string = "Login";
home: string= "Home";
services: string= "Services";
report: string= "Report";
google: string= "google.com"
search: string="xyz";
servicesDropdown: string[]= ["e-Challan", "Check Status", "Make payment", "Downloads", "Bookings"];
menus:Menu[]= [];

object : any ={
  a: 3,
  b:7,
  c:8
}


menu: string[] = ["Login","Services"];
  constructor() { 
   // private menus : Menu
//second way dynamicallay intaialliztiob

this.services = "Services";


  }
//function
  getMenu(){
    return- this.menu;
  }

  onLogginClicked(event: Event){
    alert("Login Is not allowed");
  }

  // serachDataChange(event: Event){
  //   console.log(event);
  //   console.log(event.target);
  //   console.log();
  //   this.search = (event.target as HTMLInputElement).value
  //   console.log(this.search);
    
  //   //this.search =
  // }

  serachDataChange(event: Event){
    console.log(event);
    console.log(event.target);
    console.log();
    this.search = (event.target as HTMLInputElement).value
    console.log(this.search);
  }

  searchData(){
    console.log(this.search);
  }


}


/****Binding (Linking- nEstablishing link bwt .ts {componenet} and the .html file) */

/* sharing/exchange the data btw component and template
  text interpolation -- binding a text to html tag. done by {{}}
  property binding -- binding of the attribute of html tag [src]
  event binding === (click) just another html tag click the button
  one way binding=== event, property, text
  two way binding == 
  event.target as HTMLInputElement).value  === typecastiong  as opertor
  */
