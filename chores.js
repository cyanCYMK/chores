var choreList = ['trash', 'trash', 'bathroom', 'bathroom', 'kitchen', 'kitchen', 'dishes', 'floors/carpet'];
var chores = choreList.slice();
var people = ['Adrian', 'Jackson', 'Devin', 'Bryan', 'Christine', 'Alex'];

var assigned = {};
var j = 0;

var getRandomOf = function(number){
  return Math.floor(Math.random()*number);
};

var assignChores = function(people, chores){
  for( var i=0, l=chores.length; i<l; i++, j++ ){
      if( j > people.length-1 ){ j = getRandomOf(people.length); }
      var ind = getRandomOf(chores.length);
      var person = people[j];
      if( assigned[person] !== undefined ){
        assigned[person].push(chores[ind]);
      } 
      else {
        assigned[person] = [chores[ind]];
      }
      chores.splice(ind, 1);
  }
  for( var k in assigned ){
    console.log(k, ": ", assigned[k]);
  }
}

assignChores(people, chores);

$(document).ready(function(){
  people.forEach(function(person){
    $(".people").append("<p>"+person+"</p>");
  });
  choreList.forEach(function(chore){
    $(".chores").append("<p>"+chore+"</p>");
  });

  var displayAssignments = function(assigned){
    for( var k in assigned ){
      var $assignment = $("<ul>"+ k + ": " +"</ul>");
      assigned[k].forEach(function(chore){
        $assignment.append("<li>" + chore + "</li>");
      });
      $(".assigned").append($assignment);
    }
  };

  displayAssignments(assigned);
});


//DONE: list of people to get 2 jobs should be different every time
  // although if one person gets it, next person gets it
//TODO: host on azure
//TODO: add button to generate new random list
//TODO: output to csv
//TODO: make less ugly