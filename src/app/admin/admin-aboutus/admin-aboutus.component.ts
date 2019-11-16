import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-aboutus',
  templateUrl: './admin-aboutus.component.html',
  styleUrls: ['./admin-aboutus.component.css']
})
export class AdminAboutusComponent implements OnInit {
postdata = {};
  selectedFile: File;
  constructor(private http: HttpClient, private router: Router) { }
  

  ngOnInit() {
	  this.http.get('/aboutdata/5bd37f3a38dba40132cd32ca').subscribe(data => {
				this.postdata = data;
				console.log(this.postdata);
			  }); 
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
	  
	 /* var obj2 = { 'productimage': this.selectedFile};
	 this.postdata = Object.assign( this.postdata, obj2);
	 console.log(this.postdata);
	 
		 this.http.post('/aboutdata',this.postdata)
		  .subscribe(res => {
			  //let id = res['_id'];
			 // this.router.navigate(['admin/all_product']);
			  console.log(this.postdata);
			}, (err) => {
			  console.log(err);
			}
		  );   */
		  
		  
	  var obj2 = { 'productimage': this.selectedFile};
	 this.postdata = Object.assign( this.postdata, obj2);
	 console.log(this.postdata);
	 
			 this.http.put('/aboutdata/5bd37f3a38dba40132cd32ca',this.postdata)
				  .subscribe(res => {
					  location.reload();
					}, (err) => {
					  console.log(err);
					}
				  );  
			
		  
		  
	  }

}
