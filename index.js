// Write your code here!
// From this point forward, many of the labs will work a little differently from ones you've done before. Specifically, the tests will mock the process of 1) running JavaScript code in the browser and 2) seeing the results of that code represented in the DOM. Take a look at test/indexTest.js to see the tests' descriptions of the changes your code should be making to the DOM elements.

// Note that you do not need to create functions for this lab. Just create the line or lines of JavaScript necessary to pass each test. As usual, you will write your code in the index.js file.


// One final note: the last test in the test/indexTest.js file is looking for the text "YOUR-NAME is the champion" inside your newly created DOM node. While there are a number of ways you could accomplish this, you should use either the textContent Links to an external site.or innerHTML Links to an external site.property to set the text inside your DOM node. The innerText property would technically work as well; however, the tests won't pass if you use this approach, and generally it's not a good practice to use innerText when setting the contents of an element.



var newDiv = document.createElement('div');
newDiv.innerHTML = 'Am a student at Moringa school';
document.body.appendChild(newDiv);


var newDiv = document.createElement('div');
newDiv.innerHTML = 'Yes me Maureen ';
document.body.appendChild(newDiv);


var newDiv = document.createElement('div');
newDiv.innerHTML = 'Full remote student';
document.body.appendChild(newDiv);


var newDiv = document.createElement('div');
newDiv.innerHTML = 'Things are tough on this side';
newDiv.style.color = 'black';
document.body.appendChild(newDiv);


var newDiv = document.createElement('div');
newDiv.innerHTML = 'The deadlnes are messing me up and scary';
newDiv.style.color = 'yellow';
document.body.appendChild(newDiv);
document.body.removeChild(newDiv);

var newNode = document.createElement('div');
newNode.innerHTML = 'New Node';
document.body.appendChild(newNode);

        var Chaotic = document.createElement('div');
        Chaotic.innerHTML = 'Assessments';
        document.body.appendChild(Chaotic);
        Chaotic.innerHTML = 'Walk in the park';
        document.body.removeChild(Chaotic);