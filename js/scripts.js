$(document).ready(function() {
  $("form#stressQ").submit(function(event){
    event.preventDefault();

    var userEmotionResults = [];
    $("input:checkbox[name=emotion]:checked").each(function() {
      var emotionResult = $(this).val();
      userEmotionResults.push(emotionResult);
      console.log(userEmotionResults);
    });

    var userPhysicalResult = [];
    $("input:checkbox[name=physical]:checked").each(function() {
      var physicalResult = $(this).val();
      userPhysicalResult.push(physicalResult);
      console.log(physicalResult);
    });

    var userMethodResults = [];
    $("input:checkbox[name=methods]:checked").each(function() {
      var methodsResult = $(this).val();
      userMethodResults.push(methodsResult);
      console.log(methodsResult);
    });

    if (userEmotionResults.length <= 2 && userPhysicalResult.length <= 2) {
      $("#stressA").append("No Stress");
    } else if (userEmotionResults.length ===3 || userPhysicalResult.length === 3){
      $("#stressA").append("getting stress");
    } else {
      $("#stressA").append("you are stressed");
    }

  });
});