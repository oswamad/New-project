export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.svg","music/astrid.jpg","music/bratty.svg","music/cavetown.svg","music/clairo.svg","music/girl-in-red.svg","music/kikuo.svg","music/sir-chloe.svg","music/the-marias.svg","music/vocaloid.svg","portrait.jpg","shark.jpg"]),
	mimeTypes: {".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.BRXzRkst.js",app:"_app/immutable/entry/app.BAABhtBX.js",imports:["_app/immutable/entry/start.BRXzRkst.js","_app/immutable/chunks/CEyEsy-i.js","_app/immutable/chunks/B73iR-H3.js","_app/immutable/chunks/E_av5KNN.js","_app/immutable/entry/app.BAABhtBX.js","_app/immutable/chunks/B73iR-H3.js","_app/immutable/chunks/BV031c36.js","_app/immutable/chunks/Dt6CVY0E.js","_app/immutable/chunks/E_av5KNN.js","_app/immutable/chunks/B-rat6NM.js","_app/immutable/chunks/Mpx3F4v5.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
