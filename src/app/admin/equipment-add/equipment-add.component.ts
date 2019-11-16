import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-equipment-add',
  templateUrl: './equipment-add.component.html',
  styleUrls: ['./equipment-add.component.css']
})
export class EquipmentAddComponent implements OnInit {

 postdata = {};
  
  constructor(private http: HttpClient, private router: Router) { }
  

  ngOnInit() {
  }
  
    saveProduct() {
	  
	 //var obj2 = { 'productimage': this.selectedFile};
	 //this.postdata = Object.assign( this.postdata, obj2);
	 console.log(this.postdata);
	 
		 this.http.post('/equipmentdata',this.postdata)
		  .subscribe(res => {
			  let id = res['_id'];
			  this.router.navigate(['admin/technology/equipment']);
			  //console.log(this.postdata);
			}, (err) => {
			  console.log(err);
			}
		  );  
	  }
	  
	  selectedOption: string;
  printedOption: string;

  options = [
    { name: "Honey Comb", value: 1 },
    { name: "Press / Bending", value: 2 },
	{ name: "Welding", value: 3 },
	{ name: "Machining Tools", value: 4 },
	{ name: "Quality assurance Equipment", value: 5 },
	{ name: "Accessory Equipment", value: 6 }
  ]
 /*  print() {
    this.printedOption = this.selectedOption;
  } */

  selectedOption2: string;
  printedOption2: string;
  options2 = [
    { name: "Honey Comb", value: 1 },
    { name: "Press / Bending", value: 2 },
	{ name: "Welding", value: 3 },
	{ name: "Machining Tools", value: 4 },
	{ name: "Quality assurance Equipment", value: 5 },
	{ name: "Accessory Equipment", value: 6 }
  ]
  print() {
	this.printedOption = this.selectedOption;
    this.printedOption2 = this.selectedOption2;
  }
}
