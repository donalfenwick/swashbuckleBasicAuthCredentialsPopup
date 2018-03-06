$(function(){

    function displayBasicCredentialsPopup(){
        var $input = $(this);
        var username ='';
        var password ='';
        // try and parse the existing base64 encoded credentials from the textbox so 
        // we can edit them instead of retyping them every time
        var existingValue = $input.val();
        if(existingValue){
            if(existingValue.startsWith('Basic '))
            {
                existingValue = existingValue.replace('Basic ','').trim();
                existingValue = atob(existingValue);
                var credentials = existingValue.split(':');
                username = credentials[0];
                password = credentials[1];
            }
        }
        // HTML for popup window will be included in templates on the global socpe by the build
        var popupHtml = window.templates['template.html'];
        $(popupHtml).appendTo('body');
        
        $('#basicauthpopup-username-input').val(username);
        $('#basicauthpopup-password-input').val(password);

        var closeAuthPrompt = function(){ $('.basicauthpopup-element').remove(); };
        $('.close-basicauthpopup-button').click(function(){ closeAuthPrompt(); })

        $('#basicauthpopup-setauth-btn').click(function(){
          var username = $('#basicauthpopup-username-input').val();
          var password = $('#basicauthpopup-password-input').val();
          // repopulate the interfaces Auth input with the base64 encoded credentials
          $input.val('Basic '+btoa(username + ":" + password));
          closeAuthPrompt();
        });
    }

    $(document).on('click', 'input[name=Authorization]', displayBasicCredentialsPopup);
});