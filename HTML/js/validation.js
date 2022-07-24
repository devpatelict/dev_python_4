		function checkFname() 
		{
			var f=document.frm.fname.value;
			var reg=/^[A-Za-z]+$/;
			if(f=="")
			{
				document.getElementById("fname").innerHTML="Please Enter First name";
			}
			else if(!reg.test(f))
			{
				document.getElementById("fname").innerHTML="Please Enter only alphabets";

			}
			else
			{
				document.getElementById("fname").innerHTML="";
			}

			// body...
		}

		function checkLname() 
		{
			var f=document.frm.lname.value;
			var reg=/^[A-Za-z]+$/;
			if(f=="")
			{
				document.getElementById("lname").innerHTML="Please Enter Last name";
			}
			else if(!reg.test(f))
			{
				document.getElementById("lname").innerHTML="Please Enter only alphabets";

			}
			else
			{
				document.getElementById("lname").innerHTML="";
			}

			// body...
		}
		function checkEmail() 
		{
			var f=document.frm.email.value;
			var reg=/^[A-Za-z0-9-._]+@[A-Za-z]+\.[A-Za-z]{2,4}$/;
			if(f=="")
			{
				document.getElementById("email").innerHTML="Please Enter Email";
			}
			else if(!reg.test(f))
			{
				document.getElementById("email").innerHTML="Please Enter valid Email";

			}
			else
			{
				document.getElementById("email").innerHTML="";
			}

			// body...
		}

		function checkMobile() 
		{
			var f=document.frm.mobile.value;
			var reg=/^\d{10}$/;
			if(f=="")
			{
				document.getElementById("mobile").innerHTML="Please Enter Mobile Number";
			}
			else if(!reg.test(f))
			{
				document.getElementById("mobile").innerHTML="Please Enter 10 digit Number only";

			}
			else
			{
				document.getElementById("mobile").innerHTML="";
			}

			// body...
		}

		function checkPassword() 
		{
			var f=document.frm.password.value;
			var reg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
			if(f=="")
			{
				document.getElementById("password").innerHTML="Please Enter password";
			}
			else if(!reg.test(f))
			{
				document.getElementById("password").innerHTML="Min 1 upper,lower,digit&special(8,15)";

			}
			else
			{
				document.getElementById("password").innerHTML="";
			}

			// body...
		}
		function checkCPassword() 
		{
			var p1=document.frm.password.value;
			var p2=document.frm.cpassword.value;

			if(p2=="")
			{
				document.getElementById("cpassword").innerHTML="Please Enter  Confirm password";
			}
			else if(p1!=p2)
			{
				document.getElementById("cpassword").innerHTML="password and confirm password does not matched";

			}
			else
			{
				document.getElementById("cpassword").innerHTML="";
			}

			// body...
		}
