

document.getElementById('td-id1').innerHTML




$('#myForm').submit(function() {
    // Get all the forms elements and their values in one step
    var values = $(this).serialize();

});

Cannot use form within a tr

The problem with wrapping a FORM tag around a TR tag (or TR around a FORM) is that it's invalid HTML. 




/*




/a study of Dave Anderson's solutions; for attempted other solutions, see below.


(function() {
'use strict';

//=============================================================================

displayAllInputValues( );

$('input, textarea, select').on( 'change', displayNewValue );

//=============================================================================

function displayAllInputValues( ) {
    $('input, textarea, select').each( function( ) {
        displayValue( $( this ) );
    } );
}

//-----------------------------------------------------------------------------

function displayNewValue( evt ) {
    var input = $(evt.target);
    displayValue( input );
}

//-----------------------------------------------------------------------------

function displayValue( input ) {
    var type = input.attr( 'type' );
    var name = input.attr( 'name' );
    var value;

    if ( type === 'checkbox' ) {
        value = input.prop( 'checked' );
    } else {
        value = input.val( );
    }

    $( '#' + name + '-value' ).text( value );
}


//=============================================================================
})();





























//other attempts - entire days




function myFunction() {
    var x = document.getElementById("text").value;
    document.getElementById("text").innerHTML = x;
}


var selected_index = oForm.elements["veglist"].selectedIndex;
 
if(selected_index > 0)
{
   var selected_option_value = oForm.elements["veglist"].options[selected_index].value;
   var selected_option_text = oForm.elements["veglist"].options[selected_index].text;
}
else
{
   alert('Please select a veg from the drop down list');
}var selected_index = oForm.elements["veglist"].selectedIndex;
 
 
 
 //Clearing form
 function clearForm(oForm) {
    
  var elements = oForm.elements; 
    
  oForm.reset();

  for(i=0; i<elements.length; i++) {
      
	field_type = elements[i].type.toLowerCase();
	
	switch(field_type) {
	
		case "text": 
		case "password": 
		case "textarea":
	        case "hidden":	
			
			elements[i].value = ""; 
			break;
        
		case "radio":
		case "checkbox":
  			if (elements[i].checked) {
   				elements[i].checked = false; 
			}
			break;

		case "select-one":
		case "select-multi":
            		elements[i].selectedIndex = -1;
			break;

		default: 
			break;
	}
    }
}*/

