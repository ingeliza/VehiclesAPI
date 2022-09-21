# VehiclesFilter

Download the project from https://github.com/ingeliza/VehiclesFilter.

First of all make sure you have Node.js installed.

### Environment variables
Create an .env file from .env.example file and add there the urls of API and the username and password.

For example:<br>
```
VEHICLESURL='https://example.com/api/v2/items'
UNASSIGNEDURL='https://example.com/api/v2/otheritems'
APIAUTH='username:password'
```

### Install packages
Install packages by running:
```
npm install
```

### Run script
To see filtered data run:
```
node getFilteredVehicles.js
```

### Run tests
```
node tests/exampleFile.js
```
Replace 'exampleFile.js' with name of your file you would like to run.
