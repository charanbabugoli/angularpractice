import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
/*-------------- style binding -------------*/
export class StudentComponent {
  public greetings = "";
  public courseId ="123";
  public myColor = "orange";
  public required = false;
  public myStyles = {
    color: "gold",
    fontStyle:"italic",
    fontSize: "50px",
  }
  /*----------event binding --------------*/
  onclick(){
    this.greetings="welcome to ro-one";
  }
  /*------------template ref variables------------*/
  message(message: any){
    console.log(message);
  }
  /*-------------two-way data binding-------------*/
  public data="";
  /*-------------ngif directive----------------*/
  public status = true ;
  public name= "Ro-one";
}
