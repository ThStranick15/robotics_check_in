# Robotics Check-In

## Authors: Thomas Stranick

## Description
The Robotics Check-In site provides a single page to allow robotics team members to check in and out of a work session. This is useful for determining which team members worked at certian times as well as what they worked on. An admin can enter their side of the site by typing in their pin (9999 in the demo site), and view certian team members as well as download an XLSX file of all team members. This was developed as a MERN application along with GraphQL.

## Screenshot

## Installation
N/A

## Usage
A user can be created with the button on the main page, providing a PIN number and a name for that user. After a user is created, the user can then sign in. The main page will display who is singed in at a given time as well as the last person to make an action. On sign out, the user will be prompted to input a description for what was worked on to be stored in the database. By entering the pin 9999, the admin page can be accessed. Here, you can search by pin for a user or list all users, which will display below. An XLSX file of all team members can also be downloaded if it is needed offline.

## Credits
- Vite
- React
- Tailwind CSS
- GraphQL
- MongoDB
- Express.js
- Node.js

## Deployment
Link to the repo - [Robotics Check-In](https://github.com/ThStranick15/robotics_check_in)
Deployed app - [Heroku](https://robotics-check-in-3b660a816f91.herokuapp.com/)

## Contributors
- Thomas Stranick:  https://github.com/ThStranick15

## License
Please refer to the MIT LICENSE in the repo
