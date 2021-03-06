module.exports = {
	
	google_analytics: {
		ua_codes: [
			//NOTE: Only one legacy instance can be used!
			{
				type: 'universal', //universal or legacy
				ua_code: 'UA-XXXXXXXX-X'
			},
			{
				type: 'universal',
				ua_code: 'UA-YYYYYYYY-Y'
			},
			{
				type: 'legacy',
				ua_code: 'UA-ZZZZZZZZ-Z'
			}
		]
		
	},
	
	google_fonts: {
		families: [
			'Titillium+Web:200,400,600',
			'Raleway:400,200,700'
		]
	},
	
	handlebars: {
		layout: 'layouts/layout.hbs', //soon
		helpers: {
			
			toUpper : function(str){
				return str.toUpperCase();
			}
			
		}
	},
	
	markup: {
		template_engine: 'hbs' //only .hbs available right now
	},
	
	server: {
		port: 3000
	},
	
	template_data: {
		title: 'SlabJS Starter Template',
		assets_path: './assets' // This assumes the assets folder is in the same directory as your index.html.  Change this to an absolute path or a different relative path if you want to host your assets in another folder location, on a different domain, on a CDN, etc).
	}
	
}