// ======Form validation script======
var sapientDomain = document.getElementById("useremail").value;
var pwd = document.getElementById("pwd").value;
var cpwd = document.getElementById("cpwd").value;
var statusMessage = document.getElementById("statusMessage");

var patt =new RegExp("sapient.com");
var pwdRegex = new RegExp("[A-Za-z0-9][~_&*%@$]");

function validateForm(){debugger

 	if(pwdRegex.test(document.getElementById("pwd").value)== true){
		alert("Ivalid password input\nPassword should be alfanumerics and special charector as ~_&*%@$");
		document.getElementById("pwd").focus() ;
	    return false;
	}
	
	if(document.getElementById("pwd").value != document.getElementById("cpwd").value){
		alert("password and conferm password is diffrent");
		document.getElementById("cpwd").focus() ;
        return false;
	}

 	if(patt.test(document.getElementById("useremail").value)== true){
		alert("invalid domain name");
		document.getElementById("useremail").focus() ;
	    return false;
	}

}

// ======mobile menue script======
$( document.body ).on( 'click', '.dropdown-menu li', function( event ) {

  var $target = $( event.currentTarget );

  $target.closest( '.btn-group' )
     .find( '[data-bind="label"]' ).text( $target.text() )
        .end()
     .children( '.dropdown-toggle' ).dropdown( 'toggle' );

  return false;

});
// =========general script=========
$(document).ready(function(){
	statusMessage.innerHTML = "Form submitted successfully....";
});
