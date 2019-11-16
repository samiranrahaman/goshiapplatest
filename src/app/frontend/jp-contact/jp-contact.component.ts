import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
declare var test: any;
@Component({
  selector: 'app-jp-contact',
  templateUrl: './jp-contact.component.html',
  styleUrls: ['./jp-contact.component.css']
})
export class JpContactComponent implements OnInit {
selectedFile: File;
  postdata = {};
 about: any;
  home:any;
  success:any;
 constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
	  
  this.home={};
  this.http.get('/aboutdata').subscribe(data => {
    this.about = data;
	 var obj1 = { 'about': this.about};
	 this.home = Object.assign( this.home, obj1);
  });
 
  console.log(this.home)
   this.custom();
  
  }

  saveProduct() {
	  
	this.success={};
	  const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Basic loremlorem')
		.set('Access-Control-Allow-Origin', '*')
		.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
		
		
	console.log(this.postdata);
		/* this.http.post('/mail',this.postdata)
		  .subscribe(res => {
			  console.log(this.postdata);
			   let status = res['status'];
			   console.log(status);
			  //this.router.navigate(['/careers']);
			}, (err) => {
			  console.log(err);
			}
		  ); */ 
		  
		  
	 var obj3 = { 'type':'contact'};
	 this.postdata = Object.assign( this.postdata, obj3);
	 
        this.http.post('http://tubeaim.com/mailsent/sent',this.postdata, { headers: headers })
		  .subscribe(res => {
			  console.log(this.postdata);
			  console.log(res);
			   let status = res['status'];
			   console.log(status);
			   if(status=='success')
			   {
				   var obj7 = { 'error': "Message Sent Successfully!"};
                   this.success = Object.assign( this.success, obj7);
			       console.log(this.success); 
			  
			   }
			   else
			   {
				    var obj7 = { 'error': "Message Not Sent!"};
                   this.success = Object.assign( this.success, obj7);
			       console.log(this.success);
			   }
			  //this.router.navigate(['/careers']); 
			}, (err) => {
			  console.log(err);
			}
		  ); 
	  }
	  
		custom()
{
	console.log("custom");
	new test();
}

}
