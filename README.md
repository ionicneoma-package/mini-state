## What is context?

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

But you can use `context-api` as a global state management tool, there are lots of complex libraries (`Redux`, `mobx`, `Recoil`, `HookState` and many more...) for managing state in `React.js` application, but i created this with instant solution zero boiler plate code.

## Why i built this library?

Because i liked `React.js` and building some web app for my personal use during my journey i have lots of problems. but i never give up. And this attitude reached me here now i am learning `typescript` but my methods for learing coding is practice and for deep dive in `typescript` i converted my previous web app to `typescript` so now i can able to doing basic things from this.

And for knowing more things in technology era i loved to learn something everyday.

## Size of `mini-state` 🎊🎇🎆🍕

<span style="color:#23d18b;">562B</span> with all dependencies, minified and gzipped

## 1. How to Start

To intigrate `mini-state` in your projects you need to install using `npm` after install follow these examples.

```bin
npm install mini-state
```

## 2. Setup Reducer and InitialState

Make Reducer and initialState for your application

```js
const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return state.count + 1;
		case "decrement":
			return state.count + 1;
		default:
			return state;
	}
};
```

## Setup Context by `mini-state`

For creating context you need to create a `reducer` function just like above and use in the first parameter `createReducerCTX` and second parameter for `initialState` that function looks like `useReducer` hook.

Create this function in the top level

### `API`

`reducer` - simple pure javascript function

`initialState` - initialState for application

```js
const [Context, Provider] = createReducerCTX(reducer, { count: 1 });
```

## Connect with your App

Connect provider to your application and use like below.

```js
const Root = () => {
	return (
		<Provider>
			<App />
		</Provider>
	);
};
export default Root;
```

## Congratulations 🎉🎉

We successfully added this to your application

```js
const App = () => {
	const { state, dispatch } = useCTX(Context);
	return (
		<div>
			<h1> Count is {state.count}</h1>
			<button onClick={() => dispatch({ type: "increment" })}>Increment</button>
			<button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
		</div>
	);
};
```
