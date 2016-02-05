# ![Alt text](http://i.imgur.com/9ptL8yf.png, 'Netstix') [![Build Status](https://travis-ci.org/michaellennox/netstix.svg?branch=master)](https://travis-ci.org/michaellennox/netstix)
An online achievement platform for tracking and displaying the brilliant things Makers students do.

Initially inspired out of the Makers sticker system we have expanded the idea to be a fully interactive achievement system which allows users to keep track of any awesome things they do, create new achievements if they believe there is something other's should have a crack at and feel their competitive spirits rush as they race to the top of the leaderboard.

![Alt text](http://i.imgur.com/7bfktU1.png, 'screenshot app')

## So What's Here?

Right now there's just the basics of the NetStix platform:

* Local user authentication, sign up, sign in and sign out.
* The ability to create an achievement, view a list of achievements and view further detail on a specific achievement
* The ability to view a leaderboard of all users and their scores, ability to view a specific user and see everything they have done
* The ability to make submissions to an achievement and view proof from other locations

## Technologies

__API/Server__

* NodeJS
* ExpressJS
* MongoDB/Mongoose
* User Authentication with Passport
* Tested with jasmine-node and Frisby

__Client__

* AngularJS
* Tested with Jasmine, Karma and Protractor

## Installation Instructions

You can try the app remotely:
>[https://netstix.herokuapp.com/](https://netstix.herokuapp.com/)

or install it locally:<br>
Clone down from github and cd into the directory

```
$ git clone git@github.com:michaellennox/netstix.git
$ cd netstix
```

If you don't have MongoDB installed you will have to get it:

```
$ brew update
$ brew install mongodb
$ sudo mkdir -p /data/db
$ sudo chown <your username> /data/db
```

Install any dependencies then run the app

```
$ npm install
$ npm start
```

Visit `http://localhost:8080/#/` and enjoy your new, beautiful and awesome achievement system.

## Future Improvements

* BETA testing for achievements (think like codewars BETA tasks)
* Submission should be approved before applying to a user's profile
* Restrictions for different levels of users for eg voting BETA achievements through, approving submissions


## Contributions

Feel free to get involved! Our waffleboard is available at https://waffle.io/michaellennox/netstix.

## Contributors

* [Michael Lennox](https://github.com/michaellennox)
* [Tom Bradley](https://github.com/trbradley)
* [Giamir Buoncristiani](https://github.com/giamir)
* [Andrew Htun](https://github.com/Htunny)
