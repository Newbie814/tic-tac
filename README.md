��#� �t�i�c�-�t�a�c�
�
�

I want to design a tic tac toe game from scratch.

This is my initial thoughts on what i need to accomplish the task.

tic-tac-ui

tic-tac-user-func

I need player 1 and player 2.

I need variables that contain the cuurent user input data and location.

a function that, after every turn that checks to see if the conditions for winning are metm, and, if not, coninues to the next player's turn. If a win, add CSS class that declares winner'

a function that checks if all available moves are made, and no winner, changes heading to say It's a tie.

Bonus:

If I can develop a function to determine if there is any path to victory remaing, and, if not, end the game in a draw. even before all possible moves are made


![tic-tac-ui](https://user-images.githubusercontent.com/96838174/158891045-b88f2a57-b358-4f31-b424-c92e8718feb7.png)



![tic-tac-user-func](https://user-images.githubusercontent.com/96838174/158891105-ee2d09e0-ba5f-4909-b80d-c09508c38c45.png)


Finished initial styling prototype. Took about 30 minutes to figure out how to center drop down text, which is longer than I intended. Will start on game logic this evening.



Second addition:

I finished the bulk of logic. I had the logic right from the beginning. However, it took me a long time to finish. I wanted to use drop down for a more seamless user experience. I left the first option as an empty string, so the inital board would be empty. My conditionals were not working right. I tried a lot of solutions. Was DOM  wrong? Was I pulling the wrong element? Syntax? Was there a different event I needed to listen for?

Turns out, I simply forgot to account for the fact the that empty string actually had a value and was computing as a win under my condionals setup.

Here are screenshots pf where i am now. Will add issues for tomorrow's work.




![tic-tac-code](https://user-images.githubusercontent.com/96838174/158928668-0121f293-313b-40e9-8403-db17d3c94de5.png)







![tic-tac-code2](https://user-images.githubusercontent.com/96838174/158928681-d96c2d25-b806-4816-87af-afa92cbd6955.png)
