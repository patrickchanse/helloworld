FOLLOW THESE STEPS TO SETUP THE PROJECT ON A NEW MACHINE
--------------------------------------------------------

First, ensure that the following applications are installed:
	ruby
	node
	npm
    sass
    compass

Next, follow these steps:
	- Open up terminal.
	- Navigate to the project's root folder (where this file is saved).
	- Run "npm install". This might take a while, since it should be installing all the dependencies of this project.




WHAT'S WHAT
--------------------------------------------------------

/dist/dev
	This folder contains the development version of the app, *after being built with gulp*. This folder is not present from the start, and must be created by running "gulp".

/dist/prod
	This folder contains the final version of the app, after *being built with gulp*. This folder is not present from the start, and must be created by running "gulp --production".

/src
	The folder containing the working files for the project, including raw, split up scss and js files. Through gulp, these will be concated and moved into the js/css folders within the app and deploy folders.
	*This folder is where you work.*





FOLLOW THESE STEPS WHEN MAINTAINING THE PROJECT
-----------------------------------------------

When building a new development version, run:
	gulp


When building a new production version to the server, run:
	gulp --prod


For a smooth experience when working with the files in the /source-folder, run:
	gulp watch