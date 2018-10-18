$(function(){
  //je determine la hauteur de ma fenetre
  heightWindow=$(window).height();
  //je determine la largeur de ma fenetre
  widthWindow=$(window).width();
  // permet de lancer une action lorsqu'on appuie sur une touche et qu'on est sur l'élement #champ
  $('#controler').keydown(function(event) {
    //determine la position horizontal de notre div
    positionX=$('#square').offset().left;
    //vertical la position vertical de notre div
    positionY=$('#square').offset().top;
    switch(event.keyCode){
      case 38:
      if(positionY <= 0){
        $('#square').css('margin-top',heightWindow -55);
      } else {
        $('#square').css('margin-top','-=10px');
      }
      break;
      case 40:
      if(positionY >= heightWindow -55){
        $('#square').css('margin-top',0);
      } else {
        $('#square').css('margin-top','+=10px');
      }
      break;
      case 37:
      if(positionX <= 0){
        $('#square').css('margin-left',widthWindow -55);
      } else {
        $('#square').css('margin-left','-=10px');
      }
      break;
      case 39:
      if(positionX >= widthWindow -55){
        $('#square').css('margin-left',0);
      } else {
        $('#square').css('margin-left','+=10px');
      }
      $('#square').css('margin-left','+=10px');
      break;
    }
  });
});
