import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-equipment-edit',
  templateUrl: './equipment-edit.component.html',
  styleUrls: ['./equipment-edit.component.css']
})
export class EquipmentEditComponent implements OnInit {

  postdata: any;
 param1: string;
 constructor(private route: ActivatedRoute,private http: HttpClient,private router: Router) {}


  
   saveProduct() {
	  
	
	 this.route.params.subscribe(params => {
            console.log(params);
			 console.log(params.id);
			 this.http.put('/equipmentdata/'+params.id,this.postdata)
				  .subscribe(res => {
					  this.router.navigate(['admin/technology/equipment']);
					}, (err) => {
					  console.log(err);
					}
				  );  
			 
        });
		 
	  }  

  ngOnInit() {
	  
	 this.route.params.subscribe(params => {
            console.log(params);
			 console.log(params.id);
			 this.http.get('/equipmentdata/'+params.id).subscribe(data => {
				this.postdata = data;
				console.log(this.postdata);
			  }); 
        });
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
  /* print() {
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
