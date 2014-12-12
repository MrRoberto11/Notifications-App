var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});


});



function createMessage(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'An example message.', duration: 1000}); 	
}
        	

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'Are you Hungry',  // message
        dialogDismissed,         // callback
        'PICK ONE!!',            // title
        ['YES', 'NO',' MAYBE']                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1){ new Toast({content: "Eat you fool", duration: 3000}); createNotification();}
   	else if(buttonIndex==2) new Toast({content: 'One does not simply stop for food', duration: 3000});
	else if(buttonIndex==3) new Toast({content: 'Make your mind up ', duration: 3000});
	else if(buttonIndex==0) new Toast({content: 'Dont you ignore me' , duration: 3000}) ;

}

   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 10000); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
	window.plugin.notification.local.add({ 
    	id: 		1,
        title: 		"Hey you",
        message: 	"Lunch is over get back to work",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    window.plugin.notification.local.onclick = function (id, state, json){createDialog();};
}

