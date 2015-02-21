var RouterMixin = require('react-mini-router').RouterMixin;
// var DefaultRoute = Router.DefaultRoute;
// var Link = Router.Link;
// var Route = Router.Route;
// var RouteHandler = Router.RouteHandler;
var HN = require('./hn');
var TransitionGroup = React.addons.CSSTransitionGroup;

var FrontPage = require('./frontpage');
var Story = require('./story');

var App = React.createClass({displayName: "App",

	mixins: [RouterMixin],

	routes: {
		'/': 'frontPage',
		'/:itemId': 'story'
	},

	render: function() {
		// var Handler = this.getRouteHandler();
		return (
			React.createElement("div", null, 
				React.createElement("header", null, 
					React.createElement("h1", null, React.createElement("a", {href: "/"}, "Fixpoint"))
				), 
				React.createElement(TransitionGroup, {transitionName: "fade"}, 
					this.renderCurrentRoute()
				)
			)
		);
	},

	frontPage: function() {
		return React.createElement(FrontPage, {key: 0});
	},

	story: function(itemId) {
		return React.createElement(Story, {storyId: itemId, key: itemId})
	}

});

// var routes = (
// 	<Route name="app" path="/" handler={App}>
// 		<Route name="story" path=":itemId" handler={Story}/>
// 		<DefaultRoute handler={FrontPage}/>
// 	</Route>
// 	);


// Router.run(routes, function(Handler) {
	React.render(React.createElement(App, null), document.body);
// });