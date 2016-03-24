var React = require('react'),
    promiseMe = require('../utils/promiseMe.js');
module.exports = React.createClass({
    getInitialState: function() {
        return {
            name: "Chamander",
            desc: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely. \n",
            lorem: " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in."
            + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in."
            + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in."
            + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in."
            + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in."
            + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in."
            + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in.",
            avatar: "https://upload.wikimedia.org/wikipedia/en/a/a5/Pok%C3%A9mon_Charmander_art.png",
            blip: this.props.blip,
            isEvolved: false,
            images: []
        }
    },
    evolve: function() {
        this.setState({
            name: "Charizard",
            desc: "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself. \n",
            lorem: " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in."
                + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in."
                + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in."
                + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in."
                + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in."
                + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in."
                + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in."
                + " Lorem ipsum dolor sit amet, ne ullum tritani rationibus qui, dictas splendide voluptatum ex quo. Ei prima corrumpit pri, et duo noster aliquam prodesset. Albucius accusamus his ex. Eum sanctus inimicus id. Quo ea persius aliquam consulatu, tota vocibus eu his. Mel eu verear senserit, ius ei perfecto voluptatum. Sapientem vulputate eum id, pri persius iuvaret an, deleniti philosophia vis ea. Adipisci expetenda disputationi vix ex, mei modo possim admodum eu. Nam utamur abhorreant in.",
            avatar: "http://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png",
            isEvolved: true
        });
    },
    render: function() {
        return (
            <div>
                <NavigationBar evolve={this.evolve} name={this.state.name} avatar={this.state.avatar} isEvolved={this.state.isEvolved}/>
                <PostContent name={this.state.name} desc={this.state.desc} lorem={this.state.lorem} images={this.state.images} blip={this.state.blip}/>
            </div>
        )
    }
});

var NavigationBar = React.createClass({
    getInitialState: function() {
        return {
    		scrollTop: 0,
    		scrollDirection: 'up'
        }
    },
    componentDidMount: function() {
	    window.addEventListener('scroll', this.handleScroll);
    },
	componentWillUnmount: function() {
    	window.removeEventListener('scroll', this.handleScroll);
	},
    handleScroll: function(e) {
    	var scrollPosition = e.target.querySelector("body").scrollTop;
    	if ((scrollPosition > this.state.scrollTop + 10) && (this.state.scrollDirection !== "down")) {
    		this.setState({scrollDirection: "down"});
    	} else if (scrollPosition < this.state.scrollTop && this.state.scrollDirection !== "up") {
    		this.setState({scrollDirection: "up"});
    	}
    	this.setState({scrollTop: scrollPosition});
    },
    render: function() {
        return (
            <nav className="font--sans">
            	<div className={this.state.scrollTop ? this.state.scrollDirection === "up" ? "header header-fixed--top is-inView header--affixed" : "header header-fixed--top is-hidden header--affixed" : "header header-fixed--top"}>
            		<div className="u-floatLeft">
            			<div className="user-avatar">
            				<img src={this.props.avatar} className={this.props.isEvolved ? "avatar-img hidden-sm hidden-xs is-evolved" : "avatar-img hidden-sm hidden-xs"}/>
            			</div>
            			<div className="user-details">
            				<span className="content-accent">{this.props.name}</span>
            				<span className="user-type">Fire</span>
            			</div>
            		</div>
            		<div className="collapse navbar-collapse">
                  		<ul className="nav navbar-nav navbar-right">
            				<li>
                  				<a onClick={this.props.evolve} className="u-borderNone btn btn-primary background-accent font-N7 text-uppercase">Evolve</a>
            				</li>
                  		</ul>
            		</div>
            	</div>
            </nav>
        )
    }
});

var PostContent = React.createClass({
    render: function() {
        var images = this.props.images.map(function(image){
                return (
                    <div className="postContent--image">
                        <img src={image.imageUrl} />
                    </div>
                )
            });
        return (
            <article className="">
                <div className="layoutSingleColumn u-margin-header">
                    <h1 className="postContent--h1 font-N7 font--sans">{this.props.name}</h1>
                    <p className="postContent--p">{this.props.desc}</p>
                    <h1 className="postContent--h1 font-N7 font--sans">Lorem</h1>
                    <p className="postContent--p">{this.props.lorem}</p>
                    <h2 className="postContent--h2 font-N7 font--sans">{this.props.blip}</h2>
                </div>
            </article>
        )
    }
});
