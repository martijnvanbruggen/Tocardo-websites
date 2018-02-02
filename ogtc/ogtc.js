$(document).ready(function(){
  $('#energieopslag').on({
  'mouseover': function(){
      $('#energieopslag').attr('src','energieopslagd0-min.png');
  }
});

$('#energieopslag').on({
'mouseout': function(){
    $('#energieopslag').attr('src','energieopslagq-min.png');
}
});


$('#water').on({
'mouseover': function(){
    $('#water').attr('src','tocardowatero-min.png');
}
});

$('#water').on({
'mouseout': function(){
  $('#water').attr('src','tocardowater-min.png');
}
});


$('#wind').on({
'mouseover': function(){
    $('#wind').attr('src','windo-min.png');
}
});

$('#wind').on({
'mouseout': function(){
  $('#wind').attr('src','wind-min.png');
}
});


$('#zon').on({
'mouseover': function(){
    $('#zon').attr('src','zono-min.png');
}
});

$('#zon').on({
'mouseout': function(){
  $('#zon').attr('src','zon-min.png');
}
});


$('#stroomgebruiker').on({
'mouseover': function(){
    $('#stroomgebruiker').attr('src','elektrischeautoo-min.png');
}
});

$('#stroomgebruiker').on({
'mouseout': function(){
  $('#stroomgebruiker').attr('src','elektrischeauto-min.png');
}
});

});
