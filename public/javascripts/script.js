function toggleSignup(){
    document.getElementById("login-toggle").style.backgroundColor="#fff";
     document.getElementById("login-toggle").style.color="#222";
     document.getElementById("signup-toggle").style.backgroundColor="#57b846";
     document.getElementById("signup-toggle").style.color="#fff";
     document.getElementById("login-form").style.display="none";
     document.getElementById("signup-form").style.display="block";
 }
 
 function toggleLogin(){
     document.getElementById("login-toggle").style.backgroundColor="#57B846";
     document.getElementById("login-toggle").style.color="#fff";
     document.getElementById("signup-toggle").style.backgroundColor="#fff";
     document.getElementById("signup-toggle").style.color="#222";
     document.getElementById("signup-form").style.display="none";
     document.getElementById("login-form").style.display="block";
 }
 
 
  


$(document).ready(function () {
  $("#loginbtn").click(function () {
      var contact = $("#contact").val();
    var password=$("#password").val();
      var data = {
          contact: contact
      };

      $.ajax({
          url: "http://127.0.0.1:8009/Employee",
          type: "GET",
          data: data,
          success: function (employee) {
              if (employee) {
                  console.log(employee);
                if(password===employee.password){
                  alert("login success")
                }else{
                  alert("incorrect pass")
                }
              } else {
                  console.log("Employee not found.");
              }
          },
          error: function (error) {
              console.error(error);
          }
      });
  });
});

$(document).ready(function () {
  $("#signup").click(function () {
    var email = $("#email").val();
    var mobile_number = $("#mobile_number").val();
    var password_crt = $("#password_crt").val();
    var data = {
      email: email,
      contact: mobile_number,
      password: password_crt
    };

    $.ajax({
      url: "http://127.0.0.1:8009/Employee/add",
      type: "POST",
      data: data,
      
      success: function (employee) {
        console.log(data);
        if (employee) {
          console.log("Employee successfully created");
          // You can handle success, e.g., redirect to a new page or show a message.
        } else {
          console.log("Employee not found.");
          // Handle the case where the employee was not created.
        }
      },
      error: function (error) {
        console.error(error);
        // Handle AJAX error.
      }
    });
  });
});



  