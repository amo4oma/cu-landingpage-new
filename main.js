gsap.registerPlugin(ScrollTrigger,TextPlugin);
 
$('#home').mousemove(function(event){
    var moveX = (($(window).width() / 50) - event.pageX) * 0.01;
    var moveY = (($(window).height() / 50) - event.pageY) * 0.02;
    $('.unicorn').css('margin-left', moveX + 'px');
    $('.unicorn').css('margin-top', -moveY + 'px');
 
  }); 
 



let secF = gsap.timeline({
    scrollTrigger :{
        trigger : ".section-4",
        pin: true, 
        scrub: 1.5,
        markers:true,
        start : "top top",
        end: '+=1500',
      }
        });

  secF.to('.why-important',5,{y:'-35%'})
  secF.to('.bulding-blocks',5,{y:'-10%', opacity:1})

   secF.fromTo('.text-one',5,{opacity:1,y:'0%'},{y:'-20%',opacity: 0.1, scale:0.5,rotateX:"60deg"},'first')

   secF.to('.bulding-blocks-div',5,{top:20},'first')

   secF.to('.text-two',5,{opacity:1, scale:1,rotateX:"0deg"},'first')
   
  //  secF.to('.text-one',5,{opacity:1, y:'-50%',opacity: 0.1, scale:0.8}, 'second')
   
   secF.fromTo('.text-two',5,{y:'0%'},{y:'-80%',opacity:0.4,scale:0.6,rotateX:"50deg"},'second-2')
   secF.to('.bulding-blocks-div',5,{top:-40},'second-2')

  //  secF.to('.text-two',5,{opacity:1, y:'-300%'}, 'third')


   secF.fromTo('.text-three',5,{y:'0%'},{y:'-10%',opacity: 1, scale:1.1 , rotateX:"0deg"},'second-2')

   secF.to('.text-three',5,{y:'-120%',opacity:0.5, scale:0.69,rotateX:"50deg" },'third-3')
   secF.to('.bulding-blocks-div',5,{top:-50},'third-3')
   secF.to('.bulding-blocks-div',5,{top:-70},'third-3')
  

   secF.to('.text-four',5,{y:'-120%',opacity: 1, scale:1.2, rotateX:"0deg"},'third-3')

   secF.to('.text-four',5,{y:'-140%',opacity:0.5, scale:0.79,rotateX:"50deg"},'fifth-3')

   secF.to('.bulding-blocks-div',5,{top:-80},'fifth-3')
  
   secF.fromTo('.text-five',5,{y:'0%'},{y:'-110%',opacity: 1, scale:1.2 , rotateX:"0deg"},'fifth-3')
 

   secF.to('.text-five',5,{y:'-180%',opacity:0.5, scale:0.89,rotateX:"50deg"}, 'fifth-2')
   
   secF.to('.bulding-blocks-div',5,{top:-110},'fifth-2')

   secF.fromTo('.text-six',5,{y:'0%'},{y:'-150%',opacity: 1, scale:1 , rotateX:"0deg"},'fifth-2')



   let projects = gsap.timeline({
    scrollTrigger:{
      trigger: '.section-3',
      pin:true,
      marker:true,
      scrub:true,
      start:"top top",
      end:'+=1200',
    }
  })
  projects.to('.one',5,{x:0,scale:1.1},'one')
  projects.to('.one',5,{x:'-150%',scale:0.8},'f')
  projects.to('.second',5,{x:'-30%',scale:1.1},'f')
  projects.to('.second',5,{x:'-100%',scale:1.6, opacity:1},'s')
  projects.to('.second',5,{scale:1.7},'second')
  projects.to('.third',5,{x:'-50%',scale:0.9},"s")
  projects.to('.third',5,{x:'-300%',scale:1.6,opacity:1},"t")
  projects.to('.second',5,{x:'-350%',scale:0.8},"t")
  projects.to('.third',5,{scale:1.9},'third')
  


  
let secTen= gsap.timeline({
    scrollTrigger:{
      trigger: '.sec-10-extntion',
      scrub: 2,
      // markers:true,
      start : "bottom bottom ",
      end: '+=500',
     
  
   
    }
  })
  
  
  secTen.from('.sec-10-text',15,{opacity:0, scale:-0.5 ,y :'100%'},'animation')
  secTen.from('.sec-10-text-2',15,{opacity:0, scale:-0.5,y :'100%'},'animation-2')
  secTen.from('.sec-10-titel',15,{opacity:0, scale:-0.5,y :'100%'},'animation-3')
  secTen.from('.joyce',15,{opacity:0, scale:-0.5,y :'100%'},'animation-3')
  
  