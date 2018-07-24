# Code-Louisville-Capstone

Description
This project is a simple "click-it" page designed to fill time. It gives the user a potential character name as an excuse to enjoy letting the inner child free for a few moments.

Custom CSS Classes

1. .namebutton - This class sets the main design elements of the button that calls all of the functions on the page. This class is there to make the button text bold, set the text and background colors of the button, and to give it margins to offset it from the rest of the content. I tweaked the settings in this class more than the rest.

2. .output - This class sets the pics and the randomly generated names in an inline-block display.

3. #funnypic - This class sets the max sizes for the randomly generated photos so that they don't take up too much of the screen. It also gives them a little shape.

The rest of the CSS is just minor tweaking that I did as I watched the videos.

Custom JavaScript Functions
The javascript functions I created are:

1. firstName() calls Math.floor in Math.random for two separate arrays full of strings. The strings are then concatenated here to form a complete "name." 

2. trollFace() does much the same as the firstName() function, but is written in jquery and randomly draws an image to go with the generated name. 

