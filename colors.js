var Body = {
    setColor:function(color){
        //document.querySelector('body').style.color=color;
        $('body').css('color', color);
    },
    setBackgroundColor:function(color){
        //document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor', color);
    }
}
var Link = {
    setColor:function(color){
    //     var alist = document.querySelectorAll('a');
    //         var i=0;
    //         while(i<alist.length){
    //             alist[i].style.color=color;
    //             i+=1;
    //         }    
    //     }
    $('a').css('color', color);
    }
}

function day_night_handler(self){
    var target = document.querySelector('body');
    if(self.value==='night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value='day';

        Link.setColor('green');
    }else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value='night';

        Link.setColor('blue');
    }
}