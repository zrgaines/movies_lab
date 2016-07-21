# React OMDB Lab

### Step 1: Set up a `HelloWorld` Component

Before we start building our React app, let's create a `HelloWorld` component just to make sure that we've tied everything together properly.

- Fork this repository then clone your fork.
- `npm install` the dependencies you'll need.
- Run `webpack --watch` and `nodemon` in two different tabs.
- Visit `localhost:3000` to confirm that the HelloWorld component renders.

### Step 2: Replace with SearchContainer component

- Create a SearchContainer component that renders an `h3` element in a `div`.
- Render that component to the DOM in place of the `HelloWorld`.

### Step 3: Add UI for Search

- Define a Search component that displays a search box and a submit button.
- Render the Search component in the SearchContainer component.

### Step 4: Wire up the Search Button

- Define your Search component's initial state; give it a key `query`.
- When a user searches for a movie, modify your component's state to track their query.
- Wire up your button to `console.log` whatever is in the input field when the button is clicked.

### Step 5: Move Search logic to SearchContainer component

- Make a change: move the `query` to the SearchContainer state.
- When a user searches for a movie, modify the SearchContainer state instead.
- You probably will need to pass a function from SearchContainer into Search.

### Step 6: Connect to the OMDb API

- With the API key we're using, you don't need an API key. Go ahead and look at the [documentation](http://omdbapi.com/) to determine the API's proper usage.
- Give the SearchContainer's initial state a key of `movies` with a value `[]`.
- Every time the search button is clicked, fire an AJAX call to the OMDb API and update the value of `this.state.movies` based on the response.

### Step 7: Create MovieList and Movie components

- Create MovieList and Movie components that render the list of movies to the page.

## Bonus

### Step 8: Add styles to your React app!

### Step 9: Toggle Movie details

- When a user clicks on a Movie in the results view, toggle some of its details!

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
