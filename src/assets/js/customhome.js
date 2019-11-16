function test(){
	 $('#globalPresence').carousel({ interval: 3000 });
	 $('#ourProduct').carousel({ interval: 2500 });
	 /*Certifications*/
			$('#myCarousel').carousel()
	 
	 setTimeout(function(){
	  if($("#globalpresencedatadiv0").length >0) { $("#globalpresencedatadiv0").addClass('active'); }
		 if($("#productdiv0").length >0) { $("#productdiv0").addClass('active'); }
		 if($("#certificationsdiv0").length >0) {  $("#certificationsdiv0").addClass('active'); clearInterval(handle); handle = 0; }
		 
		 
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
		  
	  }, 3000);
		  
	
}