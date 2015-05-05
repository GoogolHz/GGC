# GGC
Great Gulf Challenge
## Getting Started
* run `npm install` and `bower install` to install necessary (untracked) modules.
* ~~clone the data submodule: `git submodule add https://github.com/monadnockMedia/GGC-data.git`~~
* install mongodb with homebrew: `brew install mongodb`

## Running
* You will need the database
* start mongodb in daemon mode ` mongod --fork --logpath ./GGC-data/mongo.log --dbpath ./path/to/db`
* run `grunt serve` to view the application
* run `grunt serve:debug` to view the application in debug mode

## Running the easy way (n00bs)
* double-click start.command

## Editing
* while the grunt server is running, style and script changes will automagically be injected and reloaded
* `/client/app/app.less` will be recompiled=>`/client/app/app.css` when it is changed, and these main styles will be injected.
* any changes to the bootstrap *.less files will recompile boostrap and inject it.
