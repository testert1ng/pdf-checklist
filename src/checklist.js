$(document).ready(function(){
  // selection control
  $("input:radio").change(function(){
    if($(this).val() == "OTHER"){
      $(this).parent().find(".imgs-row").show();
    }else{
      $(this).closest(".question").find(".imgs-row").hide();
      $(this).closest(".question").find(".other-textarea").val("");
      $(this).closest(".question").find(".other-textarea").height("1.5rem");
    }
  });
  
  // text input control
  $(".other-textarea").click(function(){
    $(this).closest("#other-input").find("input").prop("checked", true);
    $(this).closest("#other-input").find(".imgs-row").show();
  });
  
  $(".other-textarea").bind("input propertychange", function(){
      $(this).closest("#other-input").find("input").val($(this).val());
  });
  
  // upload image
  $(".img").click(function(){
    $(this).closest("div").find(".img-input").trigger("click");
  });
  
  $(document).on("change",".img-input", function(e){
    var img = e.target.files[0];
    if(img){
      $(this).closest("div").find(".img").attr('src', window.URL.createObjectURL(img));
    }
  });
  
  $(document).on("click",".img", function(){
    $(this).closest("div").find(".img-input").trigger("click");
  });
    
  
  $(".img-add").click(function(){
    $(this).closest(".row").find("div.add").before('<div class="col s4 img-col"><img class="img" src="./img/no-img.png"><input type="file" name="file" class="img-input" accept="image/*;capture=camera" capture="camera" /><i class="fa fa-times del"></i></div>');
  });
  
  $(document).on("click", "i.del" , function() {
    $(this).parent().remove();
  });
  
  
  // generate pdf
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

