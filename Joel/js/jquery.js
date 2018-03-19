var alarm_counter = -1;
	

    // let it run
    (function update_time(){

        //call moment.js to format time
        var now = moment().format("HHmmss");

        digits.h1.attr('class', digit_to_name[now[0]]);
        digits.h2.attr('class', digit_to_name[now[1]]);
        digits.m1.attr('class', digit_to_name[now[2]]);
        digits.m2.attr('class', digit_to_name[now[3]]);
        digits.s1.attr('class', digit_to_name[now[4]]);
        digits.s2.attr('class', digit_to_name[now[5]]);

		var date = moment().format("MM-DD-YYYY");
		var week = weekday[moment().format('d')];
		$(".date").html(date + ' ' + week);
		
		//alarm
		var alarm = $(".alarm");
		if(alarm_counter > 0){
			alarm_counter--;
			alarm.addClass('active');
		}
		else if(alarm_counter == 0){

			$("#timeisup").fadeIn();
			//play sound on browser supporting html audio 
			try{
				$("#ring")[0].play();
			}
			catch(e){}
			
			alarm_counter--;
			alarm.removeClass('active');
		}
		else{
			alarm.removeClass('active');
		}

        // run per sec
        setTimeout(update_time, 1000);
    })();
	
	$('.alarm').click(function(){
		$("#settime").show();
	});

	$('a.close').click(function(){
		$("#settime").hide();
	});
	
	$("#alarm-set").click(function(){
		var valid = true, after = 0,
			to_seconds = [3600, 60, 1];
		
		$("#settime").find('input').each(function(i){
			if(this.validity && !this.validity.valid){

				valid = false;
				this.focus();

				return false;
			}
			after += to_seconds[i] * parseInt(parseInt(this.value));
		});

		if(!valid){
			alert('Please enter a valid number');
			return;
		}

		if(after < 1){
			alert('Please enter a valid time');
			return;	
		}

		alarm_counter = after;
		$("#settime").hide();
	});
	
	$("#timeisup").click(function(){
		$("#timeisup").fadeOut();
		$("#settime").find('input').attr('value','0');
	});
	$(function(){ 
    ... 
    // let alarm run 
    (function update_time(){ 
        ... 
        //alarm
        var alarm = $(".alarm"); 
        if(alarm_counter > 0){ 
            alarm_counter--; 
            alarm.addClass('active'); 
        } 
        else if(alarm_counter == 0){ 
 
            $("#timeisup").fadeIn(); 
            //play sounds in browser supporting html5
            try{ 
                $("#ring")[0].play(); 
            } 
            catch(e){} 
             
            alarm_counter--; 
            alarm.removeClass('active'); 
        } 
        else{ 
            alarm.removeClass('active'); 
        } 
        // run per seconds
        setTimeout(update_time, 1000); 
    })(); 
}); 