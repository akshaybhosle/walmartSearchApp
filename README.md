# walmartSearchApp

In your local directory, create a new folder. 

Step 1:
Download and install NodeJS
https://nodejs.org/en/download/

Step 2:
Install angular CLI

npm install -g @angular/cli

Step 3:
Clone the repository

https://github.com/akshaybhosle/walmartSearchApp.git

Step 4:
In your git bash or cmd prompt, go to the root directory of the project and run:
npm install
Example:
Root =>C:\Users\{user}\dev\walmartSearchApp>

This downloads all the required dependencies.

Step 5:
I found out in the documents of https://developer.walmartlabs.com/io-docs that the Product Recommendation API does not support JSONP response.

Due to this a CORS error is encountered which is a browser check for some APIs that do not support CORS
(More information on CORS: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

To overcome this, the user needs to download this Chrome browser plugin: 
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi 

Make sure 'Enable Cross-origin resource sharing' is enabled in the plugin.

Step 6:
Run `npm start` from the root dir to start the dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If you need to run tests :
Run 'ng test'

For lint check:
Run 'ng lint'

Let me know if you face any issues.
