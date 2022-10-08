# The Plant Collective
The Plant Collective will be my SPA that users can like, add images, and create plant information cards. Each card will contain a list of facts and a brief body summary of the plant. Other users will be able to like these cards. Users filling out a form for a plant card will also have the option to paste a image URL for other users to see and delete their own cards also.  

### Starting up the website 
I have plant data stored in the db.json file so you will need to access this by running `json-server --watch db.json` to start the server. 

This will show a server that stores all of my plant data at `http://localhost:3000/plants/:id`. The `:id` is a variable that goes to a specific path. If you're looking for a specific id you would put the id number in place of `:id`. 
For example: `http://localhost:3000/plants/1`

If you notice my project has various files like: index.js, index.html, and stylesheets. The index.html file has the basic layout of my form that I would like users to submit plant information on. My index.js file basically executes the efficiency of the form. 

I added some fun plants already to the webpage, but you can add more by simply filling out the form and inputing the required plant information. I love how smooth the page runs and am very pleased with my project. There were some minor bumps such as the values not being added properly to the cards, but I fixed those by changing sunlight to select options through the HTML file and also chnaging the color option to text instead to give users free range to type specific colors of plants. 


### Requirements

You will need to run a JSON server to run my project. 