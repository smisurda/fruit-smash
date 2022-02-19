// This would likely be the results of an API call that fetched the content entered in a CMS 
const configurableText = {
	heroImageUrl: "/images/hero.jpg",
	heroText:"<span id='brush-font'>Say bye</span></br/>to basic seltzering",
	middleImage:"/images/cans.png",
	buttonOneText: "Find Near You",
	buttonTwoText: "Learn More",
	productBoxTitle:"Super Hard Variety Pack",
	productBoxContent:"Introducing <span class='bolded-config-text'>The New</span> Fruit Smash Super Hard Seltzer. A boozy seltzer made with real juice for a bolder taste that packs a punch.",
	productBoxImage: "/images/pack.jpg"
};

const express = require('express');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');

// Use the Handlebars templating engine
app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine({
	layoutsDir: __dirname + '/views/layouts',
	extname: 'hbs'
}))

// Configure Express paths
app.use(express.static('public'))
app.get('/', (req, res) => {
	res.render('main', {layout : 'index', cmsContent: configurableText});
});

// Listen on the configured port
app.listen(port, () => console.warn(`App listening to port ${port}`));