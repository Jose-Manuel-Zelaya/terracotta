// Initialize your app
var myApp = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'My App',
	dialog: {
		title: 'My App',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/notifications/',
    	url: 'notifications.html',
    	name: 'notifications',
  		},
		{
		path: '/cart/',
    	url: 'cart.html',
    	name: 'cart',
  		},
		{
		path: '/productos1/',
    	url: 'productos1.html',
    	name: 'productos1',
  		},
		{
		path: '/productos2/',
    	url: 'productos2.html',
    	name: 'productos2',
  		},
		{
		path: '/productos3/',
    	url: 'productos3.html',
    	name: 'productos3',
  		},
		{
		path: '/productos4/',
    	url: 'productos4.html',
    	name: 'productos4',
  		},
		{
		path: '/productos5/',
    	url: 'productos5.html',
    	name: 'productos5',
  		},
		{
		path: '/productos6/',
    	url: 'productos6.html',
    	name: 'productos6',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		},
		{
		path: '/carro/',
    	url: 'carro.html',
    	name: 'carro',
  		},
		{
		path: '/usuario/',
    	url: 'usuario.html',
    	name: 'usuario',
  		},
	]
});

// Export selectors engine
var $$ = Dom7;





 

