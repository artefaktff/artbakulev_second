$(document).ready(function(){
   let jumbotron_text_block =  $('#jumbotron-text-block'),
       h1 = jumbotron_text_block.find(".title")[0],
       max_width = getComputedStyle(h1).width;
   jumbotron_text_block.css('max-width', max_width);

   $(document).on('scroll', function(e){
       let navbar = $('#navbar');
       if (window.pageYOffset > $('#jumbotron').innerHeight()){
           navbar.fadeIn();
       }
       else if (navbar.css('display') === 'block'){
           navbar.fadeOut();
       }
   });
    });

