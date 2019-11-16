import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-global-presence-edit',
  templateUrl: './global-presence-edit.component.html',
  styleUrls: ['./global-presence-edit.component.css']
})
export class GlobalPresenceEditComponent implements OnInit {

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
	  
    }
  }
  
   saveProduct() {
	  
	  var obj2 = { 'productimage': this.selectedFile};
	 this.postdata = Object.assign( this.postdata, obj2);
	 console.log(this.postdata);
	 this.route.params.subscribe(params => {
            console.log(params);
			 console.log(params.id);
			 this.http.put('/globalpresencedata/'+params.id,this.postdata)
				  .subscribe(res => {
					  this.router.navigate(['admin/globalpresence']);
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
			 this.http.get('/globalpresencedata/'+params.id).subscribe(data => {
				this.postdata = data;
				console.log(this.postdata);
			  }); 
        });
		
	
  }
}
