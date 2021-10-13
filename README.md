# [✅ To Do List](https://sery-react-todolist.netlify.app/)

This project is to study react & styled-components and the reference is [here](https://react.vlpt.us/mashup-todolist/) <br />
I added function that make existing item modified

## Features

Users are able to

- see the current date & day
- see how many things to be done
- add new item
- remove each item from the list
- modify existing item

## What I learn ✍🏻

- styled-component
- Context API
- useReducer

### Note

When I added editing feature I struggled with it. Because when I deleted the whole text from the input text area to rewrite, it was removed automatically from the todo list. So I add `onBlur` event to textRef. The todo list item is removed from the list only when the focus is out and the input area is empty

## Setup

Install dependencies

```sh
$ npm install
```

Run application

```sh
$ npm start
```
