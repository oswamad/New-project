import { a4 as attr_class, a5 as attr_style, a6 as ensure_array_like, a7 as attr, e as escape_html, a8 as fallback, a9 as bind_props, aa as stringify, ab as head } from "../../chunks/index.js";
function CustomCursor($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let clicking = false;
    $$renderer2.push(`<div${attr_class("cursor-heart main svelte-1nx4icj", void 0, { "clicking": clicking })} aria-hidden="true"${attr_style("", { opacity: "0" })}><svg width="20" height="20" viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg" class="svelte-1nx4icj"><path d="M12 21C12 21 1.5 13.5 1.5 6.5C1.5 3.42 3.92 1 7 1C9.01 1 10.77 2.02 12 3.57C13.23 2.02 14.99 1 17 1C20.08 1 22.5 3.42 22.5 6.5C22.5 13.5 12 21 12 21Z" fill="#F5A9B8" stroke="#fff" stroke-width="0.8" stroke-linejoin="round"></path></svg></div> <div class="cursor-heart trail svelte-1nx4icj" aria-hidden="true"${attr_style("", { opacity: "0" })}><svg width="28" height="28" viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg" class="svelte-1nx4icj"><path d="M12 21C12 21 1.5 13.5 1.5 6.5C1.5 3.42 3.92 1 7 1C9.01 1 10.77 2.02 12 3.57C13.23 2.02 14.99 1 17 1C20.08 1 22.5 3.42 22.5 6.5C22.5 13.5 12 21 12 21Z" fill="none" stroke="#5BCEFA" stroke-width="1.5" stroke-linejoin="round"></path></svg></div>`);
  });
}
function Navigation($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const navLinks = [
      { href: "#music", label: "Music" },
      { href: "#contact", label: "Say Hi" }
    ];
    let scrolled = false;
    $$renderer2.push(`<nav aria-label="Main navigation"${attr_class("svelte-ocbj1u", void 0, { "scrolled": scrolled })}><span class="nav-name mono svelte-ocbj1u">Chloe</span> <ul class="svelte-ocbj1u"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { href, label } = each_array[$$index];
      $$renderer2.push(`<li><a${attr("href", href)} class="svelte-ocbj1u">${escape_html(label)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></nav>`);
  });
}
function Waveform($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let height = fallback($$props["height"], 48);
    let animated = fallback($$props["animated"], true);
    let color = fallback($$props["color"], "var(--color-pink)");
    let secondary = fallback($$props["secondary"], "var(--color-blue)");
    let visible = false;
    let w = 800;
    $$renderer2.push(`<svg${attr("height", height)}${attr("viewBox", `0 0 ${stringify(w)} ${stringify(height)}`)} preserveAspectRatio="none" aria-hidden="true"${attr_class("waveform svelte-1x1dhop", void 0, { "visible": visible })}><defs><linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%"${attr("stop-color", secondary)} stop-opacity="0.6"></stop><stop offset="50%"${attr("stop-color", color)} stop-opacity="0.9"></stop><stop offset="100%"${attr("stop-color", secondary)} stop-opacity="0.3"></stop></linearGradient></defs><path${attr("d", `M 0 ${stringify(height / 2)} L ${stringify(w)} ${stringify(height / 2)}`)} fill="none" stroke="url(#waveGrad)" stroke-width="1.5" stroke-linecap="round"></path></svg>`);
    bind_props($$props, { height, animated, color, secondary });
  });
}
const meta = {
  name: "Chloe",
  tagline: "Gothic softness, digital traces, and late-night thoughts.",
  description: "Hi, I'm Chloe — engineer by day, goth girl and VR gremlin by night. I like taking things apart, whether that's hardware, lyrics, or the way someone worded a message.",
  pronouns: "she/her",
  location: "Mexico"
};
const heroTags = [
  "she/her",
  "VR Girl",
  "Goth",
  "México"
];
const music = {
  heading: "What I Listen To",
  pullQuote: "Girl in Red raised me emotionally.",
  subtext: "I dissect lyrics the same way I dissect circuits. I speak in subtext. If you notice, you notice.",
  // To swap in your own photo: drop {slug}.jpg into static/music/ and set wiki: null
  artists: [
    { name: "Girl in Red", slug: "girl-in-red", wiki: "Girl_in_red", color1: "#c0647a", color2: "#7a2040" },
    { name: "Sir Chloe", slug: "sir-chloe", wiki: "Sir_Chloe", color1: "#6478c0", color2: "#2a3a7a" },
    { name: "Kikuo", slug: "kikuo", wiki: "Kikuo_(musician)", color1: "#9064c0", color2: "#3a1a7a" },
    { name: "Astrid", slug: "astrid", wiki: null, color1: "#c09664", color2: "#7a4a20" },
    { name: "The Marías", slug: "the-marias", wiki: "The_Marías", color1: "#c064a0", color2: "#7a1a5a" },
    { name: "Bratty", slug: "bratty", wiki: "Bratty_(musician)", color1: "#c06464", color2: "#7a2020" },
    { name: "Cavetown", slug: "cavetown", wiki: "Cavetown", color1: "#64a0c0", color2: "#1a4a7a" },
    { name: "Vocaloid", slug: "vocaloid", wiki: "Hatsune_Miku", color1: "#64c0b4", color2: "#1a7a6a" }
  ],
  genres: ["Alternative", "Indie", "Melancholic", "Queer", "Emotionally Devastating"]
};
const contact = {
  closing: "You can say hi. Fair warning though — I will absolutely overanalyze how you said it.",
  links: [
    { label: "VRChat", href: "https://vrchat.com/home/user/usr_c44a29b9-5e76-4a34-bd4d-8a63b52d8e16", icon: "vr" },
    { label: "Spotify", href: "https://open.spotify.com/playlist/1xzHqw4uGUmRJOX5isFcZ8", icon: "spotify" },
    { label: "Discord", href: "https://discordapp.com/users/722632688468492311", icon: "discord" }
  ]
};
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    $$renderer2.push(`<section class="hero svelte-1q37ri0" id="hero"><div class="particles svelte-1q37ri0" aria-hidden="true"></div> <div class="bg-glow bg-glow--pink svelte-1q37ri0" aria-hidden="true"></div> <div class="bg-glow bg-glow--blue svelte-1q37ri0" aria-hidden="true"></div> <div${attr_class("hero-inner svelte-1q37ri0", void 0, { "visible": visible })}><div class="portrait-wrap svelte-1q37ri0" aria-hidden="true"><div class="portrait-frame svelte-1q37ri0"><div class="portrait-frame-inner svelte-1q37ri0"><img src="./portrait.jpg" alt="Chloe" class="portrait-img svelte-1q37ri0"/></div></div> <span class="corner-heart tl svelte-1q37ri0" aria-hidden="true">♥</span> <span class="corner-heart tr svelte-1q37ri0" aria-hidden="true">♥</span> <span class="corner-heart bl svelte-1q37ri0" aria-hidden="true">♥</span> <span class="corner-heart br svelte-1q37ri0" aria-hidden="true">♥</span></div> <div class="hero-text svelte-1q37ri0"><span class="section-label svelte-1q37ri0">she/her · Mexico · Power Integrity</span> <h1 class="svelte-1q37ri0">${escape_html(meta.tagline)}</h1> <p class="hero-description svelte-1q37ri0">${escape_html(meta.description)}</p> <div class="hero-tags svelte-1q37ri0" aria-label="Identity tags"><!--[-->`);
    const each_array = ensure_array_like(heroTags);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tag = each_array[$$index];
      $$renderer2.push(`<span class="tag mono svelte-1q37ri0">${escape_html(tag)}</span>`);
    }
    $$renderer2.push(`<!--]--></div> <a href="#about" class="hero-cta svelte-1q37ri0" aria-label="Scroll to About section"><span class="svelte-1q37ri0">Read on</span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" class="svelte-1q37ri0"><path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="svelte-1q37ri0"></path></svg></a></div></div> <div class="hero-wave svelte-1q37ri0" aria-hidden="true">`);
    Waveform($$renderer2, { height: 64 });
    $$renderer2.push(`<!----></div></section>`);
  });
}
function Music($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    let artistImages = {};
    $$renderer2.push(`<section id="music" aria-labelledby="music-heading" class="svelte-1veghs3"><div class="container svelte-1veghs3"><div${attr_class("header fade-in svelte-1veghs3", void 0, { "visible": visible })}><span class="section-label">// 006 · music</span> <h2 id="music-heading" class="svelte-1veghs3">${escape_html(music.heading)}</h2> <p class="subtext svelte-1veghs3">${escape_html(music.subtext)}</p></div> <blockquote${attr_class("pull-quote fade-in svelte-1veghs3", void 0, { "visible": visible })} style="transition-delay: 0.1s"><span class="svelte-1veghs3">${escape_html(music.pullQuote)}</span></blockquote> <ul class="artist-grid svelte-1veghs3" aria-label="Favourite artists"><!--[-->`);
    const each_array = ensure_array_like(music.artists);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let artist = each_array[i];
      $$renderer2.push(`<li${attr_class("artist-card fade-in svelte-1veghs3", void 0, { "visible": visible })}${attr_style(`transition-delay: ${stringify(0.05 * i)}s`)}><img${attr("src", artistImages[artist.slug] ?? `/music/${artist.slug}.jpg`)}${attr("alt", artist.name)} class="artist-img svelte-1veghs3" loading="lazy"/> <div class="artist-gradient svelte-1veghs3"${attr_style(`background: linear-gradient(145deg, ${stringify(artist.color1)}, ${stringify(artist.color2)});`)} aria-hidden="true"></div> <div class="artist-overlay svelte-1veghs3"><span class="artist-name svelte-1veghs3">${escape_html(artist.name)}</span></div></li>`);
    }
    $$renderer2.push(`<!--]--></ul> <div${attr_class("genre-tags fade-in svelte-1veghs3", void 0, { "visible": visible })} style="transition-delay: 0.45s" aria-label="Music genres"><!--[-->`);
    const each_array_1 = ensure_array_like(music.genres);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let genre = each_array_1[$$index_1];
      $$renderer2.push(`<span class="genre-tag svelte-1veghs3">${escape_html(genre)}</span>`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
  });
}
function Contact($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    $$renderer2.push(`<section id="contact" aria-labelledby="contact-heading" class="svelte-wt4tt0"><div class="glow-layer svelte-wt4tt0" aria-hidden="true"></div> <div class="container svelte-wt4tt0"><div${attr_class("contact-inner fade-in svelte-wt4tt0", void 0, { "visible": visible })}><span class="section-label">// say hello</span> <h2 id="contact-heading"><span class="name-accent svelte-wt4tt0">${escape_html(meta.name)}</span></h2> <p class="closing svelte-wt4tt0">${escape_html(contact.closing)}</p> <nav class="social-links svelte-wt4tt0" aria-label="Social and contact links"><!--[-->`);
    const each_array = ensure_array_like(contact.links);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)} class="social-link svelte-wt4tt0" target="_blank" rel="noopener noreferrer"${attr("aria-label", `${stringify(link.label)} (opens in new tab)`)}>`);
      if (link.icon === "vr") {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9z"></path><circle cx="9" cy="12" r="2"></circle><circle cx="15" cy="12" r="2"></circle></svg>`);
      } else if (link.icon === "spotify") {
        $$renderer2.push("<!--[1-->");
        $$renderer2.push(`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.623.623 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 1 1-.277-1.215c3.809-.87 7.077-.496 9.712 1.115a.623.623 0 0 1 .207.857zm1.223-2.722a.78.78 0 0 1-1.072.257c-2.687-1.652-6.786-2.131-9.965-1.166a.78.78 0 1 1-.453-1.492c3.633-1.103 8.149-.568 11.233 1.329a.78.78 0 0 1 .257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 1 1-.543-1.794c3.532-1.07 9.404-.862 13.115 1.338a.937.937 0 0 1-.955 1.613z"></path></svg>`);
      } else if (link.icon === "discord") {
        $$renderer2.push("<!--[2-->");
        $$renderer2.push(`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path></svg>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <span>${escape_html(link.label)}</span></a>`);
    }
    $$renderer2.push(`<!--]--></nav> <p class="coordinates mono svelte-wt4tt0">${escape_html(meta.location)} · ${escape_html(meta.pronouns)} · ${escape_html((/* @__PURE__ */ new Date()).getFullYear())}</p></div></div> <footer class="site-footer svelte-wt4tt0"><p class="mono svelte-wt4tt0">Built with SvelteKit · Hosted on GitHub Pages</p></footer></section>`);
  });
}
function _page($$renderer) {
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Chloe — gothic softness.</title>`);
    });
  });
  CustomCursor($$renderer);
  $$renderer.push(`<!----> `);
  Navigation($$renderer);
  $$renderer.push(`<!----> <div class="page-gothic-transit svelte-1uha8ag" aria-hidden="true"><span class="heavy-goth cyan svelte-1uha8ag" style="left: 10%; animation-delay: 0s; animation-duration: 18s;">✟</span> <span class="heavy-goth pink lg svelte-1uha8ag" style="left: 25%; animation-delay: 3s; animation-duration: 15s;">✧</span> <span class="heavy-goth white svelte-1uha8ag" style="left: 45%; animation-delay: 8s; animation-duration: 22s;">✟</span> <span class="heavy-goth pink svelte-1uha8ag" style="left: 65%; animation-delay: 1.5s; animation-duration: 19s;">✟</span> <span class="heavy-goth cyan lg svelte-1uha8ag" style="left: 80%; animation-delay: 5s; animation-duration: 25s;">☾</span> <span class="heavy-goth white svelte-1uha8ag" style="left: 35%; animation-delay: 11s; animation-duration: 17s;">✟</span> <span class="heavy-goth cyan svelte-1uha8ag" style="left: 55%; animation-delay: 9s; animation-duration: 21s;">✟</span> <span class="heavy-goth pink lg svelte-1uha8ag" style="left: 90%; animation-delay: 13s; animation-duration: 28s;">✧</span></div> <main id="main-content" class="svelte-1uha8ag">`);
  Hero($$renderer);
  $$renderer.push(`<!----> `);
  Music($$renderer);
  $$renderer.push(`<!----> `);
  Contact($$renderer);
  $$renderer.push(`<!----></main>`);
}
export {
  _page as default
};
