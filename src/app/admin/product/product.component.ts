import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
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
	  /* reader.onload = () => {
		  this.selectedFile:reader.result.split(',')[1]
      }; */
      /* reader.onload = () => {
        this.form.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      }; */
    }
  }
  saveProduct() {
	  
	 // console.log(this.selectedFile);
	  //console.log(this.postdata);
	  //const uploadData = new FormData();
	 // this.postdata.append('myFile', this.selectedFile, this.selectedFile.name);
	 //this.postdata.push({'imagedata':this.selectedFile,"imagename":this.selectedFile});
	 var obj2 = { 'productimage': this.selectedFile};
	 this.postdata = Object.assign( this.postdata, obj2);
	 //console.log(this.postdata);
	 
		 this.http.post('/product',this.postdata)
		  .subscribe(res => {
			  let id = res['_id'];
			  this.router.navigate(['admin/all_product']);
			  //console.log(this.postdata);
			}, (err) => {
			  console.log(err);
			}
		  );  
	  }
	

}
