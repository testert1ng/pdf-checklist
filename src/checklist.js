$(document).ready(function(){
  
  $("input:radio").change(function(){
    if($(this).val() == "OTHER"){
      $(this).parent().find(".imgs").show();
    }else{
			$(this).parents(".question").find(".imgs").hide();
			$(this).parents(".question").find(".other-textarea").val("");
		}
	});
	
	$(".other-textarea").click(function(){
		$(this).parents("#other-input").find("input").prop("checked", true);
		$(this).parents("#other-input").find(".imgs").show();
	});
	
	$(".other-textarea").bind("input propertychange", function(){
      $(this).parents("#other-input").find("input").val($(this).val());
	});
	
	$("#submit").click(function(){
    var doc = new jsPDF("p", "pt", "letter"),
        source = $(".pdf-body")[0],
        margins = {
          top: 40,
          bottom: 60,
          left: 40,
          width: 522
        };
    doc.fromHTML(
      source, // HTML string or DOM elem ref.
      margins.left, // x coord
      margins.top,
      {
        // y coord
        width: margins.width // max width of content on PDF
      },
      function(dispose) {
        // dispose: object with X, Y of the last line add to the PDF
        //          this allow the insertion of new lines after html
        doc.save("Test.pdf");
      },
      margins
    );
  });
});