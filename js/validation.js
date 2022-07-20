$(document).ready(function () {

   $('.lname').blur(function () {
      var fname = $('.fname').val();
      var lname = $('.lname').val();
      $('#namee').append(fname + lname);
      $('#namee').show();
      $('.emailfield').val(fname + lname + "@gmail.com");
   });


   $('.fname').blur(function () {
      var n = $(".fname").val().trim().length;
      console.log(n);
      if (n < 1) {
         $('.fname').css("borderColor", "red");
      } else {
         $('.fname').css("borderColor", "green");
      }
   });
   $('.lname').blur(function () {
      var n = $(".lname").val().trim().length;
      console.log(n);
      if (n < 1) {
         $('.lname').css("borderColor", "red");
      } else {
         $('.lname').css("borderColor", "green");
      }
   });

   $('.fname').keydown(function (e) {
      if (e.shiftKey || e.ctrlKey || e.altKey) {
         e.preventDefault();
      } else {
         var key = e.keyCode;
         if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
            e.preventDefault();
         }
      }
   });
   $('.lname').keydown(function (e) {
      if (e.shiftKey || e.ctrlKey || e.altKey) {
         e.preventDefault();
      } else {
         var key = e.keyCode;
         if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
            e.preventDefault();
         }
      }
   });

   $("#fname").focus();
   $("#fname").blur(function () {
      var name = $('#fname').val();
      if (name.length == 0 && $('.fname-err-msg').length == 0) {
         $('#fname').after('<div class="text-danger fname-err-msg">First Name is Required</div>');
      } else if (name.length != 0) {
         $('#fname').next(".text-danger").remove();
      }
   });


   $("#lname").focus();
   $("#lname").blur(function () {
      var name = $('#lname').val();
      if (name.length == 0 && $('.lname-err-msg').length == 0) {
         $('#lname').after('<div class="text-danger lname-err-msg">Last Name is Required</div>');
      } else if (name.length != 0) {
         $('#lname').next(".text-danger").remove();
      }
   });

   $('.emailfield').blur(function () {
      var tr = isEmail($(this).val().trim());

      var n = $(".emailfield").val().length;
      console.log(n);
      if (tr !== true) {
         $('.emailfield').css("borderColor", "red");
      } else {
         $('.emailfield').css("borderColor", "green");
      }
   });

   function isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
   }


   $("#email").focus();
   $("#email").blur(function () {
      var name = $('#email').val();
      if (name.length == 0 && $('.email-err-msg').length == 0) {
         $('#email').after('<div class="text-danger email-err-msg">Email is Required</div>');
      } else if (name.length != 0) {
         $('#email').next(".text-danger").remove();
      }
   });

   $('.contact').blur(function () {
      var n = $(".contact").val().trim().length;
      console.log(n);
      if (n < 10) {
         $('.contact').css("borderColor", "red");
      } else {
         $('.contact').css("borderColor", "green");
      }
   });
   $('.contact').keypress(function (e) {
      var arr = [];
      var kk = e.which;

      for (i = 48; i < 58; i++)
         arr.push(i);

      if (!(arr.indexOf(kk) >= 0))
         e.preventDefault();
   });


   $("#mob").focus();
   $("#mob").blur(function () {
      var name = $('#mob').val();
      if (name.length == 0 && $('.mob-err-msg').length == 0) {
         $('#mob').after('<div class="text-danger mob-err-msg">Phone Number is Required</div>');
      } else if (name.length != 0) {
         $('#mob').next(".text-danger").remove();
      }
   });

   $('#temporaryy').blur(function () {
      var n = $("#temporaryy").val().trim().length;
      console.log(n);
      if (n < 1) {
         $('#temporaryy').css("borderColor", "red");
      } else {
         $('#temporaryy').css("borderColor", "green");
      }
   });

   var maxLength = 250;
   $('#temporaryy').keyup(function () {
      var textlen = maxLength - $(this).val().trim().length;
      $('#rchars').text(textlen);
   });
   $("#temporaryy").focus();
   $("#temporaryy").blur(function () {
      var name = $('#temporaryy').val();
      if (name.length == 0 && $('.temporaryy-err-msg').length == 0) {
         $('#temporaryy').after('<div class="text-danger temporaryy-err-msg">Temporary Address is Required</div>');
      } else if (name.length != 0) {
         $('#temporaryy').next(".text-danger").remove();
      }
   });

   $('[type="checkbox"]').on('change', function () {
      if (!this.checked) {
         $('#permanentt').val('');
      }
   });

   $('#permanentt').blur(function () {
      var n = $("#permanentt").val().trim().length;
      console.log(n);
      if (n < 1) {
         $('#permanentt').css("borderColor", "red");
      } else {
         $('#permanentt').css("borderColor", "green");
      }
   });

   function countChar(val) {
      var len = val.value.length;
      if (len >= 250) {
         val.value = val.value.substring(0, 250);
      } else {
         $('#charNum').text(250 - len);
      }
   };


   $("#permanentt").focus();
   $("#permanentt").blur(function () {
      var name = $('#permanentt').val();
      if (name.length == 0 && $('.permanentt-err-msg').length == 0) {
         $('#permanentt').after('<div class="text-danger permanentt-err-msg">Permanent Address is Required</div>');
      } else if (name.length != 0) {
         $('#permanentt').next(".text-danger").remove();
      }
   });

   function setBillingAddress() {
      if ($("#checkkbox").is(":checked")) {
         $('#permanentt').val($('#temporaryy').val());
         $('#permanentt').attr('disabled', 'disabled');
      } else {
         $('#permanentt').removeAttr('disabled');
      }
   }

   $('#checkkbox').click(function () {
      setBillingAddress();
   })

   $("#genderr").focus();
   $("#genderr").blur(function () {
      var name = $('#genderr').val();
      if (name.length == 0) {
         $('#genderr').after('<div class="text-danger">Gender is Required</div>');
      } else {
         $('#genderr').next(".text-danger").remove();
         return true;
      }
   });

   $('#city').blur(function () {
      var n = $("#city").val().trim().length;
      console.log(n);
      if (n < 1) {
         $('#city').css("borderColor", "red");
      } else {
         $('#city').css("borderColor", "green");
      }
   });
   $('#city').keydown(function (e) {
      if (e.shiftKey || e.ctrlKey || e.altKey) {
         e.preventDefault();
      } else {
         var key = e.keyCode;
         if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
            e.preventDefault();
         }
      }
   });
   $("#city").focus();
   $("#city").blur(function () {
      var name = $('#city').val();
      if (name.length == 0 && $('.city-err-msg').length == 0) {
         $('#city').after('<div class="text-danger city-err-msg">City is Required</div>');
      } else if (name.length != 0) {
         $('#city').next(".text-danger").remove();
      }
   });

   $('#state').blur(function () {
      var n = $("#state").val().trim().length;
      console.log(n);
      if (n < 1) {
         $('#state').css("borderColor", "red");
      } else {
         $('#state').css("borderColor", "green");
      }
   });
   $('#state').keydown(function (e) {
      if (e.shiftKey || e.ctrlKey || e.altKey) {
         e.preventDefault();
      } else {
         var key = e.keyCode;
         if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
            e.preventDefault();
         }
      }
   });

   $("#state").focus();
   $("#state").blur(function () {
      var name = $('#state').val();
      if (name.length == 0 && $('.state-err-msg').length == 0) {
         $('#state').after('<div class="text-danger state-err-msg">State is Required</div>');
      } else if (name.length != 0) {
         $('#state').next(".text-danger").remove();
      }
   });


   $('#country').blur(function () {
      var n = $("#country").val().trim().length;
      console.log(n);
      if (n < 1) {
         $('#country').css("borderColor", "red");
      } else {
         $('#country').css("borderColor", "green");
      }
   });
   $('#country').keydown(function (e) {
      if (e.shiftKey || e.ctrlKey || e.altKey) {
         e.preventDefault();
      } else {
         var key = e.keyCode;
         if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
            e.preventDefault();
         }
      }
   });

   $("#country").focus();
   $("#country").blur(function () {
      var name = $('#country').val();
      if (name.length == 0 && $('.country-err-msg').length == 0) {
         $('#country').after('<div class="text-danger country-err-msg">Country is Required</div>');
      } else if (name.length != 0) {
         $('#country').next(".text-danger").remove();
      }
   });

   $('#zip').blur(function () {
      var n = $("#zip").val().trim().length;
      console.log(n);
      if (n < 1) {
         $('#zip').css("borderColor", "red");
      } else {
         $('#zip').css("borderColor", "green");
      }
   });
   $('#zip').keypress(function (e) {
      var arr = [];
      var kk = e.which;

      for (i = 48; i < 58; i++)
         arr.push(i);

      if (!(arr.indexOf(kk) >= 0))
         e.preventDefault();
   });

   $("#zip").focus();
   $("#zip").blur(function () {
      var name = $('#country').val();
      if (name.length == 0 && $('.zip-err-msg').length == 0) {
         $('#zip').after('<div class="text-danger zip-err-msg">Zip Code is Required</div>');
      } else if (name.length != 0) {
         $('#zip').next(".text-danger").remove();
      }
   });

   $(document).ready(function () {
      $('.v1').click(function () {
         var div = $('#imgg');
         div.animate({
            height: '300px',
            opacity: '1'
         }, "slow");
         div.animate({
            width: '400px',
            opacity: '1'
         }, "slow");
         div.animate({
            height: '200px',
            opacity: '1'
         }, "slow");
         div.animate({
            width: '300px',
            opacity: '1'
         }, "slow");
      });
   });
   $("#divv").click(function () {
      $(".forum").fadeIn("slow");
   });
   $(document).ready(function () {
      $(".scroll-top").click(function () {
         $("html, body").animate({
            scrollTop: 0
         }, "fast");
         return false;
      });
   });


   $('.user-form').click(function () {
      $('#staticBackdrop').modal('show');
      $('.fname-value').html($('#fname').val());
      $('.lname-value').html($('#lname').val());
      $('.email-value').html($('#email').val());
      $('.contact-value').html($('#mob').val());
      $('.temporaryy-value').html($('#temporaryy').val());
      $('.permanentt-value').html($('#permanentt').val());
      $('.genderr-value').html($('input[name="gender"]:checked').val());
      $('.city-value').html($('#city').val());
      $('.state-value').html($('#state').val());
      $('.country-value').html($('#country').val());
      $('.zip-value').html($('#zip').val());
   });

               $(document).ready(function(){
                 $("#buttonn").click(function(){
                   $.ajax({url: "throwball.html", success: function(result){
                     $("#p1").html(' Like volleyball, the games roots are linked with the YMCA (Young Mens Christian Association). Both volleyball and Newcomb ball, while older games, share many similarities with throwball. Throwball rules were first drafted in 1955 and Indias first national level championship was played in 1980. ');
                         $('#buttonn').hide();
                   }});
                 });
               });

$(document).ready(function() {
  $('#neww').click(function() {
    $.ajax({
      url: "news.html",

  beforeSend: function(){
  // alert("before");
       $('.loader').show()
   },
  complete: function(){
   // alert("after");
       $('.loader').hide();
  },
      success: function(result) {
         $('#hidden').hide();
      }
    });
  });
});

             $(document).ready(function(){
               $("#neww").click(function(){
               $.ajax({
                  url: "news.html", success: function(result){
                  $("#news").text('IIT Kanpur researchers have developed a bio-inspired artificial muscle for next-gen space robots and medical prostheses. It can be used to reinforce Indian space technology and also create adaptive robotic prostheses.');          
                  $('#hidden').hide();
                   }});
                 });
               });

});