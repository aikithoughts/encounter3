[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=14129214&assignment_repo_type=AssignmentRepo)
# 320-Final-Project

# Dave's DM Screen

Holy cow, Dungeons and Dragons involves a lot of numbers. And, as someone pretty new to running the game, I find that I always struggle to keep track of the information I need.

But no more! Now I have Dave's DM Screen!

This project is my final project for Front End Development in JavaScript through the UW's certificate program. To see the deployed version of the application, go here:

https://shevitz-final-project.web.app/

## Features

This application employes the React Router to provide three different resources:

* **Encounter Tracker**. This tracker helps you keep track of turn order during combat.

  1.  To update an existing combatants information, click the **Edit** button. To save the updated information, click the **Update** button. Notice that, when you update the combatant's **Init** value, the table updates, with the combatants listed in the descending order of their initiative. You can't try to sneak your turn in early any more, Steve!
  1.  To add a new combatant, add their name, initiative, and hitpoints in the bottom row, then click the **Plus** button in the bottom row of the table.
  1.  To delete a combatant, click the **Delete** button.

* **Spell book**. Use this feature to look up information about any given spell. This information is fetched from [www.dndapi.co.](https://www.dnd5eapi.co/).

* **Monster manual**. Like the Spell book, use this feature to look up information about any given monster. Again, this information is fetched from  [www.dndapi.co.](https://www.dnd5eapi.co/).

## Testing

The application has just a bare minimum of testing. To test the code, download the repository. Then, from the `uw-final-project` directory, run `npm run test`. There's one test for adding a combatant. Why only one test? I'll get to that.

## What went well

Like most coding projects, a lot of the code was easy. But what was difficult was very difficult indeed. For this application, I had an easy time setting up the React Router, as well as getting the basic functionality to work in the application, such as the encounter table. I leveraged existing styles (which I probably should clean up). The application doesn't look fancy, but it doesn't look a mess, either.

## What didn't go well

I had two main problems. First, I struggled passing context to my routes. I wanted to make sure that, if you went to the Spell book page, you didn't lose all the information in the Encounter Table. But saving that state and accessing it was really difficult.
I wish the React Router docs talked about this more, because the pattern you use is different from how you normally handle state. It turns out that the React Router has a `useOutletContect` feature, which allows you to pass a context from a parent component to
a child component. I used this feature to share a `dmScreenData` object, which contains all the information needed for the Encounter Table, the Spell book, and the Monster Manual. Should I opt to save this data to a database, I'm ready to go.

The other challenge was with testing. A lot of my code is in event handlers, so my tests seemed to need ways of imitating the DOM. That was a huge challenge, and one that I could not get to work. I eventually decided to separate the function I wanted to test
from the handler itself. Then I exported the logic function and tested that. In hindsight, this seems to be a better pattern, and I should have used it throughout the application.

## Changes I'd make

Now that the application is deployed, I would do a few things differently. 

1. I would separate logic from my event handlers. That would make testing a lot easier.
2. I would put more thought into the `dmScreenData` object, to make sure my data is stored correctly and in a scalable way.

## Future improvements

There are so many improvements I'd like to make! Some of them include:

1. Abstracting the calls to the API. There's a lot of other information I can get from the API. Rather than coding each route separately, I'd love to have a single component and have the API path passed to that component. That would avoid a lot of copy and paste.
1. Clean up the CSS. I'd like to make the application look a little more stylish.
1. Update the encounter tracker to make it easier to add/subtract values from the hit point totals. Right now, you have to calculate that number separately, which is tedious.
1. Add a dice roller. Because you always need more dice.
1. Save information to a database. I'd like to not only save the current state, but also have the ability to save specific encounters.
1. There is a lot of monster and spell information. But including all of that detail would take some careful thought, because not every spell or monster has all the information. I'd like to work on that.
1. I'd like to add authentication so more than one person can use the app. :D

I could go on, but this will keep me busy enough!

## Project requirements

Just keeping this here so I don't lose them.\

Project requirements:

- Application is functional and provides an experience to the user
  - Your app runs and a user can interact with it to do something. Very open ended what this will be like. Use your creativity to make something fun!
- Application uses routes
  - App must include at least two routes, ideally one that takes params to call API data, but at minimum loads two or more routes in your Single Page Application. React Router strongly encouraged.
- Fetches external API
  - Whether an api you have created (like a firebase collection, or similar), or a published API, but it must pull data from an external source. **Must use the native fetch api.** No external libraries for data fetching (like axios or react-query). **EXCEPTION**: Can use Firebase SDK if you are using a Firebase App
- Application is deployed
  - Deployed and visible to the public. GitHub Pages, Vercel, Firebase, etc
- Submitted to GitHub properly
  - All work done on a feature branch and merged into the main branch
- Utilizes reusable components
  - As needed components will be flexible and reusable
- Uses prop-types
  - All components that take in props must use prop-types, no generic proptypes, they must be specific. For example, if it takes an array of data, it must be detailed to what that array of data looks like, not just a general array
- README updated
  - README updated to include:
  - the public facing url
  - a brief summary of your project
  - The answers to the following questions Fill out each of these with a few sentences (50 characters minimum):
  - What worked well in this project (what was easy/straightforward)?
  - What didn't work well (what was difficult to understand or parse)?
  - What changes would you make to this project now that it's deployed?
  - What would you improve and/or add to this project now that it's deployed?"
- Incorporates unit testing
  - At least one unit test must be included and working. Components reliant on api calls will not need to be unit tested, but anything that just relies on props will be easy to test. Must document how to run tests
- Utilzes Modern JavaScript
  - Utilizes modern methods of writing JS, no var keyword. Uses arrow functions where appropriate and uses modern methods (for example .map())
- App has styling and is polished
- Incorporate custom CSS to your project. Outside CSS libraries are allowed (Bootstrap, Tailwind, etc), Remove `console.log` statements once you're finished with development. Check for and remove Check for any React errors in the console. Fix linting issues
