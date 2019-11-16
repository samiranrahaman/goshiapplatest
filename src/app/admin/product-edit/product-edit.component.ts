import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

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
	  
	  var obj2 = { 'productimage': this.selectedFile};
	 this.postdata = Object.assign( this.postdata, obj2);
	 console.log(this.postdata);
	 this.route.params.subscribe(params => {
            console.log(params);
			 console.log(params.id);
			 this.http.put('/product/'+params.id,this.postdata)
				  .subscribe(res => {
					  this.router.navigate(['admin/all_product']);
					}, (err) => {
					  console.log(err);
					}
				  );  
			 /* this.http.get('/product/'+params.id).subscribe(data => {
				this.postdata = data;
				console.log(this.postdata);
			  }); */ 
        });
		 
	  }
  ngOnInit() {
	//this.id = this.getUrlParameter('id');
	
	 this.route.params.subscribe(params => {
            console.log(params);
			 console.log(params.id);
			 this.http.get('/product/'+params.id).subscribe(data => {
				this.postdata = data;
				console.log(this.postdata);
			  }); 
        });
		
	/* const param1: string = this.route.snapshot.queryParamMap.get('id');
	console.log(param1)
 this.http.get('/product/'+param1).subscribe(data => {
    this.postdata = data;
	console.log(this.postdata);
  });  */
  }

}
