
import root from '../root.js';
import { set_building, set_prerendering } from '$app/env/internal';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';
import error from '../shared/error-template.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	server_error_boundaries: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t\t<meta name=\"theme-color\" content=\"#09090D\" />\r\n\r\n\t\t<!-- SEO -->\r\n\t\t<title>Chloe — Engineer. Voice. Gothic Softness.</title>\r\n\t\t<meta name=\"description\" content=\"Chloe is a power integrity engineer, software builder, VR enthusiast, and gothic girl who spends far too much time analyzing technology, voices, lyrics, and the things people leave unsaid.\" />\r\n\t\t<meta name=\"author\" content=\"Chloe\" />\r\n\r\n\t\t<!-- Open Graph -->\r\n\t\t<meta property=\"og:type\" content=\"website\" />\r\n\t\t<meta property=\"og:title\" content=\"Chloe — Engineer. Voice. Gothic Softness.\" />\r\n\t\t<meta property=\"og:description\" content=\"Power integrity engineer. Software builder. VR enthusiast. Gothic girl. Emotionally literate.\" />\r\n\t\t<meta property=\"og:image\" content=\"" + assets + "/og-image.png\" />\r\n\r\n\t\t<!-- Twitter Card -->\r\n\t\t<meta name=\"twitter:card\" content=\"summary_large_image\" />\r\n\t\t<meta name=\"twitter:title\" content=\"Chloe — Engineer. Voice. Gothic Softness.\" />\r\n\t\t<meta name=\"twitter:description\" content=\"Power integrity engineer. Software builder. VR enthusiast. Gothic girl.\" />\r\n\r\n\t\t<!-- Fonts -->\r\n\t\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\r\n\t\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin=\"anonymous\" />\r\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap\" rel=\"stylesheet\" />\r\n\r\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.svg\" type=\"image/svg+xml\" />\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body data-sveltekit-preload-data=\"hover\">\r\n\t\t<div id=\"svelte\">" + body + "</div>\r\n\t</body>\r\n</html>\r\n",
		error
	},
	version_hash: "1wwyw37"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
