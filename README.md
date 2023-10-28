# Project Title

This is a Rock, Paper and Scissors game scripted and designed with JavaScript and HTML/CSS repectively.

## Lessons Learned

I learnt how to work with DOM events, event listeners, function arguments and callback functions. I faced a challenge of my event listeners returning undefined for my button clicks whereas it was supposed to return the id of the target. I fixed this by using `event.currentTarget.id` instead of `event.target.id`. I also faced a challenge of my getComputerChoice function calls returning the same option instead of random options when it was passed into the playRound function as a parameter. I was able to solve this problem by redeclaring the argument to call the getComputerChoice function each time the playRound function was called.
