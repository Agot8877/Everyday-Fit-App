function createReminder(){
	var time = document.getElementById('time');
	var date = document.getElementById('date');
	
	
	
	if(time.value && date.value){
			if (localStorage.remindercount) {
				localStorage.setItem('remindercount',Number(localStorage.remindercount))+1);
			} else {
				localStorage.setItem('remindercount',1);
			}
			localStorage.setItem('Time_'+ localStorage.remindercount, time.value);
			localStorage.setItem('Date_'+ localStorage.remindercount, date.value);
			alert('Successfully Saved')
			time.value = '';
			date.value ='';
	}else{
			alert('Please Enter A Valid Time and Date!');
	}
	
	
*/
	
}
