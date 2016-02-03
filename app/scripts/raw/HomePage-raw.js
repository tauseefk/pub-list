const React = require('react');
module.exports = React.createClass({
    displayName: "exports",

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(NavigationBar, null),
            React.createElement("div", { className: "content" })
        );
    }
});

var NavigationBar = React.createClass({
    displayName: "NavigationBar",

    getInitialState: function () {
        return {
            userName: "Charmander",
            userAvatar: "https://pbs.twimg.com/profile_images/669526334213767168/yNRInnlA.png",
            scrollTop: 0,
            scrollDirection: 'up'
        };
    },
    changeName: function () {
        this.setState({ userName: "Charizard", userAvatar: "http://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png" });
    },
    componentDidMount: function () {
        window.addEventListener('scroll', this.handleScroll);
    },
    componentWillUnmount: function () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    handleScroll: function (e) {
        var scrollPosition = e.target.querySelector("body").scrollTop;
        if (scrollPosition > this.state.scrollTop + 10 && this.state.scrollDirection !== "down") {
            this.setState({ scrollDirection: "down" });
        } else if (scrollPosition < this.state.scrollTop && this.state.scrollDirection !== "up") {
            this.setState({ scrollDirection: "up" });
        }
        this.setState({ scrollTop: scrollPosition });
    },
    render: function () {
        return React.createElement(
            "nav",
            null,
            React.createElement(
                "div",
                { className: this.state.scrollDirection === "up" ? "nav navbar-header color-header white-header is-inView" : "nav navbar-header color-header white-header is-hidden" },
                React.createElement(
                    "div",
                    { className: "navbar-brand" },
                    React.createElement(
                        "div",
                        { className: "user-avatar" },
                        React.createElement("img", { src: this.state.userAvatar, className: "img-user hidden-sm hidden-xs" })
                    ),
                    React.createElement(
                        "div",
                        { className: "user-details" },
                        React.createElement(
                            "span",
                            { className: "color-dark font-default" },
                            this.state.userName
                        ),
                        React.createElement(
                            "span",
                            { className: "color-primary-text font-small" },
                            "Fire"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "collapse navbar-collapse" },
                    React.createElement(
                        "ul",
                        { className: "nav navbar-nav navbar-right" },
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { onClick: this.changeName, className: "no-border btn btn-primary btn-primary-transparent text-uppercase btn-publish" },
                                "Evolve"
                            )
                        )
                    )
                )
            )
        );
    }
});
