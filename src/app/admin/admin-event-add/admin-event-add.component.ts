import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-event-add',
  templateUrl: './admin-event-add.component.html',
  styleUrls: ['./admin-event-add.component.css']
})
export class AdminEventAddComponent implements OnInit {

 postdata = {};
  selectedFile: File;
  constructor(private http: HttpClient, private router: Router) { }
  


  ngOnInit() {
  }
  myFiles:string [] = [];
  sMsg:string = '';

  getFileDetails (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      //this.myFiles.push(e.target.files[i]);
	  this.readThis2(e.target,i);
    }
  }

  readThis2(inputValue: any,i): void {
  var file:File = inputValue.files[i];
  var myReader:FileReader = new FileReader();

  myReader.onloadend = (e) => {
    this.selectedFile = myReader.result;
	this.myFiles.push(myReader.result);
  }
  myReader.readAsDataURL(file);
}
  
  
  
  
  
  
  
  
  
  changeListener($event) : void {
  this.readThis($event.target);
}

readThis(inputValue: any): void {
  var file:File = inputValue.files[0];
  var myReader:FileReader = new FileReader();

  myReader.onloadend = (e) => {
    this.selectedFile = myReader.result;
	this.myFiles.push(myReader.result);
  }
  myReader.readAsDataURL(file);
}
 onFileChanged(event) {
   // this.selectedFile = event.target.files[0]
	//console.log(this.selectedFile);
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
	  for (var i = 0; i < this.myFiles.length; i++) { 
      //frmData.append("fileUpload", this.myFiles[i]);
	  console.log(this.myFiles[i]);
	 
	 var obj2 = { 'productimage': this.myFiles[i]};
	 this.postdata = Object.assign( this.postdata, obj2);
	 //console.log(this.postdata);
	 
		 this.http.post('/eventdata',this.postdata)
		  .subscribe(res => {
			  let id = res['_id'];
			  this.router.navigate(['admin/event']);
			  //console.log(this.postdata);
			}, (err) => {
			  console.log(err);
			}
		  );   
		  
				  
	  
    }
	 
	// var obj2 = { 'productimage': this.selectedFile};
	 //this.postdata = Object.assign( this.postdata, obj2);
	 //console.log(this.postdata);
	 
		 /* this.http.post('/eventdata',this.postdata)
		  .subscribe(res => {
			  let id = res['_id'];
			  this.router.navigate(['admin/event']);
			  //console.log(this.postdata);
			}, (err) => {
			  console.log(err);
			}
		  ); */  
		  
		  
		  
		  
		  
		  
		  
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
