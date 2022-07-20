$('.lname').blur(function(){
        var fname = $('.fname').val();
        var lname = $('.lname').val();
        $('.namee').append(fname + lname);
        $('.namee').show();
        $('#emailfield').val(fname + lname + "@gmail.com");
      });
function setBillingAddress(){
  if ($("#checkkbox").is(":checked")) {
    $('#permanentt').val($('#temporaryy').val());
    $('#permanentt').attr('disabled', 'disabled');
  } else {
    $('#permanentt').removeAttr('disabled');
  }
}

$('#checkkbox').click(function(){
  setBillingAddress();
})
$('.contact').blur(function(){
            var n = $(".contact").val().length;
            console.log(n);
            if (n < 10) {
                $('.contact').css("borderColor", "red");
            } else {
                $('.contact').css("borderColor", "green");
            }
        });
 $('#department').on('change', function() {
          $('#depart').text(this.value);
        });
        </script>  <input type="text" value=""><br><br>
        <input type="button" value="submit" class="submit" >
        <script>
        $('input[type="button"]').click(function(){
        $(this).css('background-color','green');
        });