function test(){
   
   //(function(){
		  $('#topBottom').carousel({ interval: 1000 });
	//	}());
	setTimeout(function(){
		
		if($("#technologydatadiv0").length >0) { 

		$("#technologydatadiv0").addClass('active');
		
		}
		(function(){
		  $('#topBottom').carousel({ interval: 3000 });
		}());
		
		(function(){
		  $('#topBottom .PIC').each(function(){
			var itemToClone = $(this);

			for (var i=1;i<6;i++) {
			  itemToClone = itemToClone.next();
			  if (!itemToClone.length) {
				itemToClone = $(this).siblings(':first');
			  }
			  itemToClone.children(':first-child').clone()
				.addClass("cloneditem-"+(i))
				.appendTo($(this));
			}
		  });
		}());
		
		
		
		if($("#0").length >0) { $('#0').addClass('active');  }
		if($("#li0").length >0) {  $("#li0").addClass('active');  }
		
		if($(".img0").length >0) {  $(".img0").css("style", "display: block !important");  
             $(".img0").html('<i class="fa fa-search"></i>');
					
     		   }
		 
		
		
		/* if($(".img0").length >0) {  $(".img0").css("style", "display: block !important");  
             $(".img0").html('<i class="fa fa-search"></i>');
					
     		   } */
		// if($("#globalpresencedatadiv0").length >0) { $("#globalpresencedatadiv0").addClass('active'); }
		// if($("#productdiv0").length >0) { $("#productdiv0").addClass('active'); }
		// if($("#certificationsdiv0").length >0) {  $("#certificationsdiv0").addClass('active');}
		
		
		/* 
		  $('#globalPresence .PIC').each(function(){
			var itemToClone = $(this);

			for (var i=1;i<6;i++) {
			  itemToClone = itemToClone.next();
			  if (!itemToClone.length) {
				itemToClone = $(this).siblings(':first');
			  }
			  itemToClone.children(':first-child').clone()
				.addClass("cloneditem-"+(i))
				.appendTo($(this));
			}
		  }); */
		
		
		 /* $('#ourProduct .PIC').each(function(){
			var itemToClone = $(this);

			for (var i=1;i<6;i++) {
			  itemToClone = itemToClone.next();
			  if (!itemToClone.length) {
				itemToClone = $(this).siblings(':first');
			  }
			  itemToClone.children(':first-child').clone()
				.addClass("cloneditem-"+(i))
				.appendTo($(this));
			}
		  }); */
		  
		 // $('#myCarousel').carousel()
		 
		 
		 
		 
		 
		 /* home*/
		 
		 
		   if($("#globalpresencedatadiv0").length >0) { $("#globalpresencedatadiv0").addClass('active'); }
			 if($("#productdiv0").length >0) { $("#productdiv0").addClass('active'); }
			 if($("#certificationsdiv0").length >0) {  $("#certificationsdiv0").addClass('active'); clearInterval(handle); handle = 0; }
			 if($("#editorcontentdatadiv0").length >0) {  $("#editorcontentdatadiv0").addClass('active'); clearInterval(handle); handle = 0; }
			
			 
		 $('#globalPresence .PIC').each(function(){
				var itemToClone = $(this);

				for (var i=1;i<6;i++) {
				  itemToClone = itemToClone.next();
				  if (!itemToClone.length) {
					itemToClone = $(this).siblings(':first');
				  }
				  itemToClone.children(':first-child').clone()
					.addClass("cloneditem-"+(i))
					.appendTo($(this));
				}
			  });
			  
			  
		 $('#ourProduct .PIC').each(function(){
				var itemToClone = $(this);

				for (var i=1;i<6;i++) {
				  itemToClone = itemToClone.next();
				  if (!itemToClone.length) {
					itemToClone = $(this).siblings(':first');
				  }
				  itemToClone.children(':first-child').clone()
					.addClass("cloneditem-"+(i))
					.appendTo($(this));
				}
			  }); 
		 
		 var isotopeContainer = $('.isotopeContainer');
		 $('.isotopeFilters').on( 'click', 'a', function(e) {
			   // alert();
				$('.isotopeFilters').find('.active').removeClass('active');
				$(this).parent().addClass('active');
				var filterValue = $(this).attr('data-filter');
				//alert(filterValue)
				
				//$('.isotopeSelector').find(active).css('display',"block");
				
				isotopeContainer.isotope({ filter: filterValue });
				e.preventDefault();
			});
		 
		 
		 
		
        }, 1000);
		
		
		$('#globalPresence').carousel({ interval: 3000 });
	    $('#ourProduct').carousel({ interval: 2500 });
	    /*Certifications*/
		$('#myCarousel').carousel()
		$('#editorcontentdata').carousel()
	 
	     
		/*  setTimeout(function(){

			  
		  }, 3000); */
		
		
   
		
		
   
 
}