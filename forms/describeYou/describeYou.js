





Button1.onclick=function(){
  ChangeForm(favExercises)
}

rdbPersonality.onchange=function(){
   if (rdbPersonality.value == 0)   // picked the first choice
      lblPersonality.text = `I would agree that you are an 'optimistic' person too!`
   else if (rdbPersonality.value == 1)
      lblPersonality.text = `I would agree that you are an 'pessimistic' person too!`
   else if (rdbPersonality.value == 2)
      lblPersonality.text = `I would agree that you are an 'trusting' person too!`
    else if (rdbPersonality.value == 3)
      lblPersonality.text = `I would agree that you are an 'envious' person too!`
     else 
      console.log(`This is not a choice`)
}
