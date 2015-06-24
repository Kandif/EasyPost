/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    
    $( "#window" ).draggable();
    
    $('logout').click(function() {
        
    });
    
    /*$('span').click(function() {
        var id = $(this).attr('id');
        var str = id.slice(0, 3);
        //$("#id1").animate({'font-size': "+=50px"},500,"linear");
        var span = $("span[id^='" + str + "']");
        var utop = 0;
        for (var i = 0; i < span.length; i++) {
            var fontsize = parseInt(span.eq(i).css("font-size"));
            fontsize += fontsize;
            if (fontsize > 160 && fontsize < 321) {
                utop += 1;
                span.eq(i).animate({'font-size': fontsize, opacity: 0}, {duration: 500, queue: false});
                //span.eq(i).fadeOut({queue:false,duration:500});
            } else if(fontsize ==0){
                span.eq(i).animate({'font-size': 5}, 500, "linear");
            }
                if(fontsize <= 160 && fontsize>0){
                span.eq(i).animate({'font-size': fontsize}, 500, "linear");
            }
        }
        if (utop > 0) {
            utop*=390;
            $("#id1c").animate({'top': '-='+utop}, 500);
            utop=0;
        }

    });*/
});

function hideform(){
    $('#window').fadeOut(2000);
}

function showform(){
    $('#window').fadeIn(1000);
}
