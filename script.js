$(function() {

    $("#live").on("click",function(e){
  
      if (!$("main").hasClass("learn-selected")) {
  
        $("main").toggleClass("live-selected");
  
        var $this = $("#live a"),
            href = $this.attr("href"),
            topY = $(href).offset().top;
         
        TweenMax.to($(window), 1, {
          scrollTo:{
            y: topY, 
            autoKill: true
          }, 
          ease:Power3.easeOut 
        });
  
        return false;
  
      }
      
    });
  
    $("#learn").on("click",function(e){
      
      if (!$("main").hasClass("live-selected")) {
  
        $("main").toggleClass("learn-selected");
        
        var $this = $("#learn a"),
            href = $this.attr("href"),
            topY = $(href).offset().top;
         
        TweenMax.to($(window), 1, {
          scrollTo:{
            y: topY, 
            autoKill: true
          }, 
          ease:Power3.easeOut 
        });
  
        return false;
  
      }
  
    });
  
    $("#door-left, #door-right").on("click",function(e){
      //console.log("clicked");
      TweenLite.set(".door", {perspective:"400vw"});
      TimelineMax.add(getTL1());
      //TimelineMax.add(getTL2());
    });
  
  });
  
  //TweenLite.set(".door", {perspective:"400vw"});
  //TimelineMax.add(getTL());
  //TimelineMax.add(getTL2());
  TimelineMax.add(getTL3());
  
  function getTL1() {
    var tl = new TimelineMax({yoyo:true, repeat:0})
    .add("startTL")
    
    .fromTo("#card-left", 4, {x:0, rotationX:0, rotationY:0, skewX:0, skewY:0}, {rotationY:85, skewX:0, skewY:0, opacity:0, transformOrigin:"0", ease: Sine.easeInOut}, "startTL")
    
    .fromTo("#card-right", 4, {x:0, rotationX:0, rotationY:0, skewX:0, skewY:0}, {rotationY:-85, skewX:0, skewY:0, opacity:0, transformOrigin:"100%", ease: Sine.easeInOut}, "startTL")
    
    .fromTo("#body", 12, {opacity:0}, {opacity:1, ease: Sine.easeInOut}, "startTL")
  
    return tl;
  }
  
  function getTL2() {
    var tl = new TimelineMax({yoyo:true, repeat:0})
    .add("startTL")
    
    .fromTo("#rhomb1", 2.5, {}, {rotationY:80, transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
    
    .fromTo("#hockey1", 2.5, {}, {rotationY:80, transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
    
    .fromTo("#hockey2", 2.5, {}, {rotationY:80, transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
    
    .fromTo("#tri1", 2.5, {}, {rotationY:60, transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
    
    .fromTo("#tri2", 2.5, {}, {rotationY:120, transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
    
    .fromTo("#hockey3", 2.5, {}, {rotationY:260, transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
    
    .fromTo("#hockey4", 2.5, {}, {rotationY:260, transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
    
    .fromTo("#rhomb2", 2.5, {}, {rotationY:80, transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
    
    return tl;
  }
  
  function getTL3() {
    var tl = new TimelineMax({yoyo:true, repeat:0})
    .add("startTL")
    
    .fromTo("#rhomb1", 2.5, {x:-10}, {}, "startTL")
    
    .fromTo("#hockey1", 2.5, {x:-10}, {}, "startTL")
    
    .fromTo("#hockey2", 2.5, {x:-10}, {}, "startTL")
    
    .fromTo("#tri1", 2.5, {x:-10}, {}, "startTL")
    
    .fromTo("#tri2", 2.5, {x:-160, rotationX:0, rotationY:180}, {transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
    
    .fromTo("#hockey3", 2.5, {x:0, rotationX:0, rotationY:180}, {transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
    
    .fromTo("#hockey4", 2.5, {x:0, rotationX:0, rotationY:180}, {transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
    
    .fromTo("#rhomb2", 2.5, {x:-200, rotationX:0, rotationY:0}, {transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
    
    return tl;
  }