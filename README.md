# frontend-react-kit

## Documentation

- [Setup](/docs/SETUP.md)
- [Architecture](/docs/ARCHITECTURE.md)
- [Developing](/docs/DEVELOPING.md)
- [create-react-app user guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)

## Tech stack

This React boilerplate is based on
[create-react-app](https://github.com/facebookincubator/create-react-app),
and additionally includes:

### React

* [react-router v4](https://github.com/ReactTraining/react-router), keep UI in sync with the URL
* [material-ui@next](http://www.material-ui.com/), React components that implement Google's Material Design
* [react-intl](https://github.com/yahoo/react-intl), internationalisation support

### Redux

* [redux](http://redux.js.org/), predictable container for app state
* [redux-thunk](https://github.com/gaearon/redux-thunk), async support for redux actions
* [redux-api](https://github.com/lexich/redux-api), store REST API responses and status in redux
* [react-router-redux](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux), sync router state with redux
* [redux-act](https://github.com/pauldijou/redux-act), use actions themselves as references inside reducers

### Styling

If you need SASS or LESS support, just create .env file in project root and set variable REACT_APP_SASS=true or REACT_APP_LESS=true depending on what you need.
