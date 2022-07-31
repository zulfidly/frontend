# Capstone 6

Time really flies and we're finally on our last Capstone. 😭

It really isn't a coding course without creating a \*drumroll\* **To-Do List App**.

There's also a developer joke that says: every time you create a to-do list app, a puppy dies.

But rest assured, no puppies will be harmed in this Capstone.

No API service needed in this Capstone.
Just plain old Vue3, Pinia, mad coding _skillz_ & some patience.

### Instructions

1. Create a Vue application with the Vue CLI
2. Verify you have created a Vue3 application and installed Pinia
3. Create two components, `TodoControls.vue` and `TodoList.vue`
4. In your `App.vue`, import the previous two components you've created
5. As the name suggests:

- `TodoControls` should contain: input that accepts string and a button to add to-dos
- `TodoList` should contain: a list of to-dos

6. Create a store that uses `defineStore` from pinia
7. Your store should contain the following:

- `state`: a function that returns an array of to-do list items
- `getters`: a function that helps filter and display specific to-do- list items
- `actions`: contains functions that add/destroy/update the items in the to-do list

### Capstone General Scoring Guide

| Fail | Exceed Expectations | Outstanding |
| ---- | ------------------- | ----------- |
| 0-11 | 12-16               | 17-20       |

<br/>

### Capstone 6 Marking Guide

| Domain         | Task                                                            | Point(s) |          |
| -------------- | --------------------------------------------------------------- | -------- | -------- |
| Creation       | Create a Vue Application using CLI                              | 0.5      | Required |
| Setup          | Install & setup Pinia                                           | 0.5      | Required |
|                | Create `TodoControls.vue`                                       | 0.5      | Required |
|                | Create `TodoList.vue`                                           | 0.5      | Required |
| Store creation | Create a store and import it in `App.vue`                       | 2        | Required |
|                | Implement `state` in the store                                  | 2        | Required |
|                | Implement `getters` in the store                                | 2        | Required |
|                | Implement `actions` in the store                                | 2        | Required |
|                | Allow user to create, delete, check of (update) to-do list item | 2        | Required |
| QoL Features   | Allow user to rearrange the to-dos by dragging                  | 2        | Optional |
|                | Push completed to-do items to the bottom (or top) of the list   | 2        | Optional |
| Style          | Add some styling to your app                                    | 2        | Optional |
|                | Make page responsive                                            | 2        | Optional |
