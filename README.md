# Playlist_Capital_One

A one page app written in React that displays a list of songs for a given year when the relevant button is clicked, a tech test for Capital One.

This is the first time I've made anything in React and so it's been a positive learning experience.

## To use:

```
git clone https://github.com/noel1uk/Playlist_Capital_One.git
npm start
```

## To run tests:

```
npm test
```

## To check coverage:

```
npm test -- --coverage
```

## Approach
#### Planning: 
Read through starting docs at https://reactjs.org/docs/hello-world.html and experimented with components.

##### Sketch:

![wireframe of potential site layout](https://raw.githubusercontent.com/noel1uk/Playlist_Capital_One/git-images/public/images/wireframe.png)

##### Components:

* Then I broke this down into the components: App, Catalogue, CatalogueHeadings, YearButtonContainer, YearButton, SongDetails.

##### TDD:

Using Jest and Enzyme I intend to take a test driven approach wherever possible.

## Results:

![wireframe of potential site layout](https://raw.githubusercontent.com/noel1uk/Playlist_Capital_One/master/public/Screen%20Shot%202018-05-03%20at%2013.48.37.png)

An incomplete app. The most interesting part is probably the YearButtonContainer which loops through the data from The MUSIC constant and adds additional YearButton components. If any further data added to the MUSIC data had a unique value it would result in an automatically created button for that year which would render to the screen.

The MUSIC constant is in the index.js file though it would probably be better placed in an independent file of its own.

I've achieved a good degree of seperation of concerns with the various components all in seperate component files in the src/components folder. 

However on clicking the buttons nothing happens.

## What I've learned and what's next

Need to get a much deeper understanding of what's happening in shallow test objects and my lack of understanding in this was the main stumbling block.

Further I need to gain familiarity and understanding with th use of state and the constructor method.

