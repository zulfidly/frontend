# Capstone 4

When I was a kid, I loved playing solitaire on my computer.

I was always so intrigued and impressed at how well the computer handles the game and shuffles it so perfectly.

If you were old enough to remember, that was probably the only game we had back then.

So to reminisce my childhood, we will be building a poker card game in this Capstone.

However, since this is not a game development course, the focus on this project isn't at how well you can implement shuffling algorithms & deal cards.

Instead, we will use the API service [https://deckofcardsapi.com/](https://deckofcardsapi.com/)

Take some time to read over the docs before we begin.
<br/>

### Instructions

1. Create a VueJS application using the CLI
2. Create a function called newDeck that calls the API and returns a new deck
3. Setup this function to be called on a lifecycle hook on page load
4. Setup this function to also be called if a user wants to get a new deck
5. Create a function drawCard that can draw a card
6. Display all the image of the cards you interact with, from the API

### Reference

[Codepen](https://codepen.io/craigcoles/pen/EaNRpa?html-preprocessor=haml) Example

### Capstone General Scoring Guide

| Fail | Exceed Expectations | Outstanding |
| ---- | ------------------- | ----------- |
| 0-11 | 12-16               | 17-20       |

<br>

### Capstone 4 Marking Guide

| Domain          | Task                                                         | Point(s) |          |
| --------------- | ------------------------------------------------------------ | -------- | -------- |
| Creation        | Create a Vue Application using CLI                           | 1        | Required |
| API Calls       | Create a newDeck function - this calls the new deck endpoint | 2        | Required |
|                 | Create a button that calls newDeck                           | 2        | Required |
|                 | Use a lifecycle hook to call newDeck on page load            | 2        | Required |
| Data Management | Create a function drawCard that lets your draw a card        | 2        | Required |
|                 | Display your card that you draw                              | 2        | Required |
|                 | Display the number of remaining cards                        | 1        | Required |
|                 | Create a function that lets you return a drawn card          | 2        | Optional |
|                 | Reshuffle remaining cards                                    | 2        | Optional |
| Style           | Add card dealing animation                                   | 2        | Optional |
|                 | Add card popup animation when drawn                          | 2        | Optional |
