    <script>
        $(document).ready(function () {
            function kiemtraTen() {
                var regT = /^([A-Z][A-Za-z]+\s*)+$/; 
                var ten = $("#txtName").val();
                if (ten == "") {
                    $("#erT").html("(*) Không được để trống!");
                }
                else {

                    if (regT.test(ten)) {
                        $("#erT").html("");
                        return true;
                    } else {
                        $("#erT").html("(*)Aaa Aaa");
                        return false;
                    }
                }
            };
            function kiemtraMail(){
                var regM= /^[A-Za-z0-9_\.-]+@([a-z]+)\.(com)$/;
                var mail= $("#txtMail").val();
                if (mail=="") {
                    $("#erE").html("(*) Không được để trống!");
                }
                else
                {
                    if (regM.test(mail)) {
                        $("#erE").html("");
                        return true;
                    }
                    else
                    {
                        $("#erE").html("(*)abc@xyz.com");
                        return false;
                    }
                }
            };
       
             function kiemtraPass(){
                var regS= /^([A-Z]){1}([\w_\.!@#$%^&*()]+){5,31}$/;
                var pass= $("#txtPass").val();
                if (pass=="") {
                    $("#erP").html("(*) Không được để trống!");
                }
                else
                {
                    if (regS.test(pass)) {
                        $("#erP").html("");
                        return true;
                    }
                    else
                    {
                        $("#erP").html("(*) Abc12312!");
                        return false;
                    }
                }
            };
            function kiemtraPassCo()
            {
                var pass= $("#txtPass").val();
                var passc=$("#txtPassTest").val();
                if (passc=="") {
                    $("#erPC").html("(*) Không được để trống!");
                    return false;
                }
                else
                {
                    if (pass==passc) {
                     $("#erPC").html("");
                     return true;
                }
                else
                {
                   $("#erPC").html("(*) Khong khop pass");
                        return false; 
                }
                }
            }
       
            $("#txtTen").blur(kiemtraTen());

              $("#txtMail").blur(kiemtraMail());
              $("#txtPass").blur(kiemtraPass());
              $("#txtPassTest").blur(kiemtraPassCo());
              $("#btnSignin").click(function(){
                if (kiemtraTen()&&kiemtraPass()) {
                     $(this).prop('href', '../HTML/index.html');
                }
              });
              $("#btnSignup").click(function(){
                if (kiemtraTen()&&kiemtraPass()&&kiemtraMail()%%kiemtraPassCo()) {
                     $(this).prop('href', '../HTML/index.html');
                }
              });
           
        });
    </script>