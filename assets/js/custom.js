/*var notes = [{x: "0.1", y:"0.650", note:'\<a href="http://sunrisedetox.info/ga/atlanta/" target="_blank">Atlanta</a>'}, 
			{x: "0.595", y:"0.805", note:'\<a href="http://sunrisedetox.info/fl/orlando/" target="_blank">Orlando</a>'},
			{x: "0.620", y:"0.880", note:'\<a href="http://sunrisedetox.info/fl/lake-worth/" target="_blank">Lake Worth</a>'},
			{x: "0.650", y:"0.930", note:'\<a href="http://sunrisedetox.info/fl/ft-lauderdale/" target="_blank">FT Lauderdale</a>'},
			{x: "0.860", y:"0.370", note:'\<a href="http://sunrisedetox.info/nj/morristown/" target="_blank">Morristown</a>'},
			{x: "0.890", y:"0.450", note:'\<a href="http://sunrisedetox.info/nj/toms-river/" target="_blank">Toms River</a>'},
			{x: "0.840", y:"0.500", note:'\<a href="http://sunrisedetox.info/nj/cherry-hill/" target="_blank">Cherry Hill</a>'}
			];*/
$( document ).ready(function() {
 $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth:120,
    itemMargin:5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
   
/*			
console.log(notes);
				
                    cust_onEdit = function( ev, elem) {
						var $elem = $(elem);
						$('#NoteDialog').remove();
						return $('<div id="NoteDialog"></div>').dialog({
							title: "Note Editor",
							resizable: false,
							modal: true,
                            height: "300",
							width: "450",
							position: { my: "left bottom", at: "right top", of: elem}
                        });
                    };
					var $img = $("#image").imgNotes({ onEdit: cust_onEdit });
					var widg = $img.data().wgmImgNotes;
					$img.imgNotes("import", notes);
			*/
		
});
