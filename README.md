# React example app

This project was bootstraped with [Create React App](https://github.com/facebookincubator/create-react-app).

Is a simple project for demo purposes based on [one](https://github.com/fmaylinch/youtube-react) that showed [Ferran Maylinch](https://github.com/fmaylinch) at the Mini Bootcamp in React. js (by World Tech Makers). I have tried to improve it following the patterns defined by Facebook for [managing events](https://reactjs.org/docs/handling-events.html) on React.

## First steps for using create-react-app

1. Install node from [nodejs.org](https://nodejs.org) or using [nvm](https://github.com/creationix/nvm).
2. Install [Create React App](https://github.com/facebookincubator/create-react-app): `npm install --global create-react-app`.
3. You may use [yarn](https://yarnpkg.com) to install local node packages: `npm install --global yarn`.  Then you could do `yarn add PACKAGE` instead of `npm install --save PACKAGE`.
4. Execute `create-react-app PROJECT_NAME`. Then you can enter `cd PROJECT_NAME` and execute `npm start` or `yarn start` to launch the app.


## Development steps

**step01**: Project created with `create-react-app`.

**step02**: Remove some code that `create-react-app` created to start with an even simpler example that [doesn't use JSX](https://reactjs.org/docs/react-without-jsx.html).

**step03**: Use of [JSX](https://reactjs.org/docs/jsx-in-depth.html) to simplify code.

**step04**: Use one component (`VideoItem`) from another (`App`).

**step05**: Pass properties ([props](https://reactjs.org/docs/components-and-props.html)) to `VideoItem`.

**step06**: [Configure ESLint](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#displaying-lint-output-in-the-editor). You may want to install [linter-eslint](https://atom.io/packages/linter-eslint).

**step07**: Display a list of `VideoItem` (from hardcoded array) using the [key](https://reactjs.org/tutorial/tutorial.html#keys) property.

**step08**: Load list of videos from sample [JSON](https://raw.githubusercontent.com/fmaylinch/youtube-react/e3404ae9a2dc6c2e91c0becb7ec62b6d42c1ac2e/src/youtube-api-sample.json) file.

**step09**: Create `VideoList` component (refactor).

**step10**: Search videos from Youtube API using [axios](https://github.com/axios/axios) (hardcoded query term). The `App` component is turned into a [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) so it can have [state](https://reactjs.org/docs/state-and-lifecycle.html), which is updated when the videos are loaded.

To get a Youtube API key go to [Google APIs](https://console.developers.google.com/apis) and look for Youtube (here's a [direct link](https://console.developers.google.com/apis/library/youtube.googleapis.com) to it). Enable that API; you have to create a project if you don't have one. Then generate an API key in [credentials](https://console.developers.google.com/apis/credentials). You may explore the [Youtube API endpoints ](https://developers.google.com/apis-explorer/?#p/youtube/v3/), in particular the [search](https://developers.google.com/apis-explorer/?#p/youtube/v3/youtube.search.list) (fill `part` with `snippet` and `q` with your query).

**step11**: Add an `<input>` whose value is linked to the state (`searchTerm`) via the `onChange` [event](https://reactjs.org/docs/events.html) and a `<button>` that `onClick` searches the videos using the `searchTerm`.

**step12**: Refactor: create component `SearchForm` and notify `App` ([lift state up](https://reactjs.org/docs/lifting-state-up.html)) through a callback so it can refresh `VideoList` .

**step13**: Improve `SearchForm` (more flexible, send with `ENTER` key).

**step14**: Create a `MenuBar` to organise the layout. `SearchForm` now sends callback to `MenuBar` and `MenuBar` propagates it to `App` .

If you want to go deeper check this article about [component communication strategies in React](http://andrewhfarmer.com/component-communication). Popular state management frameworks: [Redux](http://redux.js.org) ([if you really need it](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)) and [Mobx](https://github.com/mobxjs/mobx).

**step15**: Add [style](http://www.react.express/styling) via CSS files, using some [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) features.

I highly recommend learning [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) ([video tutorial](https://flexbox.io/) and [little game](http://flexboxfroggy.com/)) and [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) ([little game](http://cssgridgarden.com/)). See the intro note [here](https://wdrl.info/archive/202).

**step16**: Type checking using [propTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) in `VideoItem`.

**step17**:  Type checking using [Flow](https://flow.org/) instead of propTypes. See [adding Flow](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-flow) ([fix for VS Code](http://international.github.io/2017/03/24/17-18-fix_vscode_flow_Type_aliases_can_be_used_only_in_a_.ts_file)) and [Flow docs about React](https://flow.org/en/docs/react/).

See this article about [Flow and TypeScript](https://engineering.tumblr.com/post/165261504692/flow-and-typescript).

**step18**: Use React Router to display `VideoList` when searching and `VideoDetail` when clicking one video in the list.

You need to install [react-router-dom](https://www.npmjs.com/package/react-router-dom).

You may want to check this [React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf). About [navigating programmatically](https://stackoverflow.com/a/42121109/1121497), I used the Route approach from that answer. About Flow types, I just could find this [type definition file](https://github.com/flowtype/flow-typed/blob/master/definitions/npm/react-router-dom_v4.x.x/flow_v0.53.x-/react-router-dom_v4.x.x.js), although it's a bit hard to read.

**step19**: Use if/else [conditional rendering](http://www.react.express/conditional_rendering) for displaying a "loading..." message while loading the videos in `VideoList`.

**step20**: Load video data from `VideoDetail` so url is bookmarkable.

**step21**: Use [refs](https://reactjs.org/docs/refs-and-the-dom.html) to get `HTMLFormElement` in `SearchFormRef` (alternative version to `SearchForm`). In this case, it's useful if a form has many fields and we don't need to synchronise them with state.

**step22**: Add [tests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests). 

If you want to use [Flow](https://flow.org/) in tests you may install [flow-typed](https://www.npmjs.com/package/flow-typed) (`yarn add flow-typed`) and then install the appropriate jest type definitions. To do so, I found out the jest version with `yarn list | grep " jest@"`, which in my case was `jest@20.0.4` and then installed them with `node_modules/.bin/flow-typed install jest@20.0.4`.

**step23**: Add [component tests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components). It is recommended to use [Enzyme](http://airbnb.io/enzyme/) so execute `yarn add enzyme react-test-renderer jest-enzyme enzyme-adapter-react-16`. I found the need for the last package [here](https://stackoverflow.com/a/46628165/1121497). You also need to create a `src/setupTests.js` with the code indicated there.
