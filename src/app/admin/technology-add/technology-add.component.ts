import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-technology-add',
  templateUrl: './technology-add.component.html',
  styleUrls: ['./technology-add.component.css']
})
export class TechnologyAddComponent implements OnInit {

 postdata = {};
  selectedFile: File;
  constructor(private http: HttpClient, private router: Router) { }
  


  ngOnInit() {
  }
  
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
	  
	 var obj2 = { 'productimage': this.selectedFile};
	 this.postdata = Object.assign( this.postdata, obj2);
	 //console.log(this.postdata);
	 
		 this.http.post('/technologydata',this.postdata)
		  .subscribe(res => {
			  let id = res['_id'];
			  this.router.navigate(['admin/technology']);
			  //console.log(this.postdata);
			}, (err) => {
			  console.log(err);
			}
		  );  
	  }

}
