<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Tester Sender</title>
<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<style>
	body{
		font-family: 'Roboto Slab', serif;
	display: block;
	height: 100%;
    padding: 0;
    margin: 0 auto;
    overflow-y: hidden;
    overflow-x: hidden;
	}
.wrapper{
	display: block;
	width: 100%;
    height: 100%;
    padding: 0;
    position: absolute;
background: #141E30;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


}
	.labelcss{
		color: #ffffff;
	
	}
	.boxcss{
		width: 100%;
		max-width: 500px;
		height: 25px;
		background-color: rgba(240, 248, 255, 0);
		color: #d2d2d2;
		font-size:20px;
		border: 1px solid #d2d2d2;
		padding: 3px;
		margin-bottom: 10px;
	}
	.message{width: 100%;
		max-width: 500px;
		height: 25px;
		background-color: rgba(240, 248, 255, 0);
		color: #d2d2d2;
		font-size:20px;
		padding:0px;}
	.my_form{
		width: 500px;
		height: auto;
		padding: 4px 10px;
		margin: 10px auto;
		
		
	}
	.send{
		width: 100px;
		height: 35px;
		font-weight: 500;
		font-size:18px;
		color: #2A2A2A;
		background-color:#fff;
		text-align: center;
		cursor: pointer;
		-webkit-transition: .3s; /* Safari */
	    transition: .35s;
		padding: 10px 0px 0px 0px;
		font-weight: 900;
		
		
	}
	.send:hover{
		background-color:#ebebeb;
		/*background-color:#ebebeb;
	*/}
	h1{font-size:30px;color:#fff;}
	.all_inputs{
		width: 100%;
		margin: 0 auto;
		
	}
	.line_one{
		background-color: #fff;
		width: 100%;
		height:1px;
		margin-bottom: 7px;
		padding: 0px 3px;
	}
	
	.line_two{
		background-color: #fff;
		width: 100%;
		height:4px;
		margin-bottom: 35px;
		padding: 0px 3px;
		
	}
	.line_three{
		background-color: #fff;
		width: 100%;
		height:4px;
		padding: 0px 3px;
		margin-bottom: 7px;
		margin-top: 70px;
		
	}
	.line_four{
		background-color: #fff;
		width: 100%;
		height:1px;
		margin-bottom: 4px;
		padding: 0px 3px;
	}
	
	.example{font-size:14px;}
	.error{color:red;}
	.confirmed{    line-height: 5px;}
</style>
<body>
<div class="wrapper">
	<div class="my_form">
		<h1 align="right">Tester Sender</h1>
		<div class="lines">
			<div class="line_one"></div>
			<div class="line_two"></div>
		</div>
		<div class="confirmed"></div>
		<div class="all_inputs">
		<label for="to" class="message">To<span class="example">   (example@abc.com, test@test.com)</span></label>
			<input type="text" class="boxcss" id="pros"/><br/>
			<label for="subject" class="message">Subject</label>
			<input type="text" class="boxcss" id="subject"/><br/>	
			<label for="Message" class="message">Message</label>	
			<textarea class="boxcss"  value="Content" style="padding-right:-1px;height:100px;" id="newsletter_code"></textarea><br/>
			<p class="send" id="submit">send</p>
		</div>	
		
		<div class="lines">
		<div class="line_three"></div>
		<div class="line_four"></div>
			
		</div>
		<div id="results"></div>
	</div>
</div>
<script>
         $(document).ready(function() {
		
			 
			 
            $("#submit").on("click",function(event){
					check_running();					
            });
			 
			
			 
		function check_running(){
				event.preventDefault();
			$("#submit").off("click",function(event){
			});	
	  			$("#results").html("");
			if ($("#pros").val().length < 1) {
	  				$("#results").html("<span class='error'>Ooops!! The receiver is empty!</span>");
	  				$("#pros").focus();
	  				return;
	  			}
			if ($("#subject").val().length < 1) {
	  				$("#results").html("<span class='error'>Ooops!! The subject is empty!</span>");
	  				$("#subject").focus();
	  				return;
	  			}
			if ($("#newsletter_code").val().length < 1) {
	  				$("#results").html("<span class='error'>Ooops!! The message is empty!</span>");
	  				$("#newsletter_code").focus();
	  				return;
	  			}
			running();
			
			}
	
		function running(){
			$("#submit").off("click",function(event){
			});	
			 
			var subject= "";
			subject = $("#subject").val();
			var pros= "";
			pros = $("#pros").val();
			var nsl_code= "";
			nsl_code = $("#newsletter_code").val();
			var dataString = 'nsl_code1=' + encodeURIComponent(nsl_code) + '&pros1=' + pros + '&subject1=' + subject;
			$.ajax({
				type: "POST",
				url: "ajax_call_nsl.php",
				data: dataString,
				cache: false,
				timeout: 3000,
				success: function(result){
					 $("#submit").on("click",function(event){
								
					 });					
					$(".all_inputs").hide();
					$(".confirmed").html("<p style='color:#00ff90;'>Your message has been sent with success.</p><p style='color:#fff;'>Click <span style='text-decoration:underline;cursor:pointer;' class='send_again'>here</span> in order to send another message</p>");	 $(".send_again").on("click",function(event){
						   $('input:text').each(function(){
							   var txtval = $(this).val('');
						   });
						   $(".confirmed").html("");
						   $(".all_inputs").show();
							});	
				},
				 error: function(jqXHR, textStatus, errorThrown) {
				if(textStatus==="timeout") {  
					alert("Call has timed out"); //Handle the timeout
				} else {
					alert("Another error was returned"); //Handle other error type
				}
    }
				/*timeout*/
				});
			
			
			return;
		}
			 
			
			 
			  });/*kleinei to document*/

</script>
	
</body>
</html>
