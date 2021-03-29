var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
 for (i = 0; i < exercises.length; i++) 
        selExercises.addItem(exercises[i])
        
 for (i = 0; i < coreExercises.length; i++) 
        selExercises.addItem(coreExercises[i])
}





btnExercises.onclick=function(){
    results = selExercises.text.includes("situps", "plank")
    if (results  == true)
  lblExercises.text = "You chose situps and planks - those are the two core exercises."
else 
    lblExercises.text = "You did not pick the two core exercises. "
}
