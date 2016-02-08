const React = require('react');
module.exports = React.createClass({
    displayName: "exports",

    getInitialState: function () {
        return {
            name: "Chamander",
            desc: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely. \n",
            lorem: " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in." + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in." + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in." + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in." + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in." + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in." + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in.",
            avatar: "https://upload.wikimedia.org/wikipedia/en/a/a5/Pok%C3%A9mon_Charmander_art.png"
        };
    },
    evolve: function () {
        this.setState({
            name: "Charizard",
            desc: "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself. \n",
            lorem: " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in." + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in." + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in." + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in." + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in." + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in." + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in." + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in.",
            avatar: "http://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png"
        });
    },
    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(NavigationBar, { evolve: this.evolve, name: this.state.name, avatar: this.state.avatar }),
            React.createElement(PostContent, { name: this.state.name, desc: this.state.desc, lorem: this.state.lorem })
        );
    }
});

var NavigationBar = React.createClass({
    displayName: "NavigationBar",

    getInitialState: function () {
        return {
            scrollTop: 0,
            scrollDirection: 'up'
        };
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
                { className: this.state.scrollTop ? this.state.scrollDirection === "up" ? "header header-fixed--top is-inView header--affixed" : "header header-fixed--top is-hidden header--affixed" : "header header-fixed--top" },
                React.createElement(
                    "div",
                    { className: "u-floatLeft" },
                    React.createElement(
                        "div",
                        { className: "user-avatar" },
                        React.createElement("img", { src: this.props.avatar, className: "avatar-img hidden-sm hidden-xs" })
                    ),
                    React.createElement(
                        "div",
                        { className: "user-details" },
                        React.createElement(
                            "span",
                            { className: "font-heavy content-accent" },
                            this.props.name
                        ),
                        React.createElement(
                            "span",
                            { className: "user-type" },
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
                                { onClick: this.props.evolve, className: "u-borderNone btn btn-primary background-accent text-uppercase" },
                                "Evolve"
                            )
                        )
                    )
                )
            )
        );
    }
});

var PostContent = React.createClass({
    displayName: "PostContent",

    render: function () {
        return React.createElement(
            "div",
            { className: "post-content u-margin-header" },
            React.createElement(
                "h1",
                { className: "post-content--h1 font-N7" },
                this.props.name
            ),
            React.createElement(
                "p",
                { className: "post-content--body font-21" },
                this.props.desc
            ),
            React.createElement(
                "h1",
                { className: "post-content--h1 font-N7" },
                "Lorem"
            ),
            React.createElement(
                "p",
                { className: "post-content--body font-21" },
                this.props.lorem
            )
        );
    }
});
