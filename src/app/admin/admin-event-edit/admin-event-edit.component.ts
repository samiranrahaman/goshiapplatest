import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-event-edit',
  templateUrl: './admin-event-edit.component.html',
  styleUrls: ['./admin-event-edit.component.css']
})
export class AdminEventEditComponent implements OnInit {

 postdata: any;
   selectedFile: File;
  // id: any;
  //  constructor(private http: HttpClient) { }
  param1: string;
constructor(private route: ActivatedRoute,private http: HttpClient,private router: Router) {}
 changeListener($event) : void {
  this.readThis($event.target);
}
readThis(inputValue: any): void {
  var file:File = inputValue.files[0];
  var myReader:FileReader = new FileReader();

  myReader.onloadend = (e) => {
    this.selectedFile = myReader.result;
  }
  myReader.readAsDataURL(file);
}

  onFileChanged(event) {
	let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
	   //console.log(file);
      reader.readAsDataURL(file);
	  console.log(reader);
	  console.log(reader.result);
	  
    }
  }
  
   saveProduct() {
	  
	  var obj2 = { 'productimage': this.selectedFile};
	 this.postdata = Object.assign( this.postdata, obj2);
	 console.log(this.postdata);
	 this.route.params.subscribe(params => {
            console.log(params);
			 console.log(params.id);
			 this.http.put('/eventdata/'+params.id,this.postdata)
				  .subscribe(res => {
					  this.router.navigate(['admin/event']);
					}, (err) => {
					  console.log(err);
					}
				  );  
 
        });
		 
	  }
  ngOnInit() {
	//this.id = this.getUrlParameter('id');
	
	 this.route.params.subscribe(params => {
            console.log(params);
			 console.log(params.id);
			 this.http.get('/eventdata/'+params.id).subscribe(data => {
				this.postdata = data;
				console.log(this.postdata);
			  }); 
        });
		

  }
  
  selectedOption: string;
  printedOption: string;

   options = [
    { name: "Diwali", value: 1 },
    { name: "Janmastmi", value: 2 },
	{ name: "Lohri", value: 3 },
	{ name: "Long Service Award", value: 4 },
	{ name: "Vishakarma", value: 5 },
	{ name: "Holi", value: 6 },
	{ name: "10th Anniversary", value: 7 }
  ]
   print() {
    this.printedOption = this.selectedOption;
  } 

}
