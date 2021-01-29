# Getting started

## Scripts

### `npm start`

Runs the app in the development mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Summary

### Mistakes

- Granulating components:
  Not granulating components from the very beginning caused tachnical debt and I had to refactor it later on.

- Styling:
  I think that styling is my Achilles' heel. I feel that sometimes it would be better to create a class (className) that handles some of general styles but I can't see it in advance how often it will be used and then I keep adding manually the same width to multiple elements. Is it bad in an application of this size? Maybe not... Bot what if I want to scale it? Food for thought

### Challenges

- Planning the redux state:
  It took me some time to decide how to structure the state to make it simple and easy to use. As they say, the most complex task is to make something simple.
- Understanding which code is reusable on the fly:
  Making code reusable is one of the most importanting things in any project, specially in larger ones. Sometimes we create a piece of code, or even a constant, that we do not know yet that it will be needed elsewhere later on. Is this a problem with my planning? I am not sure
- useSelector hook lifecycle:
  I think I had not understand the lifecycle of a component when it has the "useSelector" hook, but as I worked with it I started understanding it better. Not sure if I understood it 100% because sometimes we think we know something and we actually don't. Let's just say that I leave some room for mistakes on my knowledge and I will eventually become more comfortable

### Wins

- Abstract away functionality:
  I think this was the first time that I tried to abstract away functionality from the components/containers by using helpers. That way, the code in the component focuses on the _"what"_ instead of focusing on the _"how"_

- Avoid repeated code:
  I feel that I caught some situations where I was repeating code and I was able to refactor things to make them reusable. I had never done that before, I really feel that my code is becoming more efficient with practice. The time and dedication that I put into this project was definitely rewarding
