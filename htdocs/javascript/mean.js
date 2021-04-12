let $carrousel = $('#testimonials'), 
        $div = $('.testimonials'), 
        indexDiv = $div.length - 1, 
        i = 0, 
        $currentDiv = $div.eq(i);
    
    $div.css('display', 'none'); 
    $currentDiv.css('display', 'block'); 
    
  
    
    $('.next').click(function(){ 
    
        i++;
    
        if( i <= indexDiv ){
            $div.css('display', 'none'); 
            $currentDiv = $div.eq(i); 
            $currentDiv.css('display', 'block');
        }
        else{
            i = indexDiv;
        }
    
    });
    
    $('.prev').click(function(){ 
    
        i--; 
    
        if( i >= 0 ){
            $div.css('display', 'none');
            $currentDiv = $div.eq(i);
            $currentDiv.css('display', 'block');
        }
        else{
            i = 0;
        }
    
    });

    function slideImg(){
        setTimeout(function(){ 
                            
            if(i < indexDiv){ 
            i++; 
        }
        else{ 
            i = 0;
        }
    
        $div.css('display', 'none');
    
        $currentDiv = $div.eq(i);
        $currentDiv.css('display', 'block');
    
        slideImg(); 
    
        }, 5000); 
    }
    
    slideImg();