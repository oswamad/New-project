<script lang="ts">
	import { onMount } from 'svelte';
	import { music } from '$lib/content/data';

	let section: HTMLElement;
	let visible = false;

	// Resolved image URLs: Wikipedia thumbnail → local SVG → gradient fallback
	let artistImages: Record<string, string> = {};

	onMount(() => {
		const obs = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visible = true;
					obs.disconnect();
				}
			},
			{ threshold: 0.15 }
		);
		obs.observe(section);

		// Fetch Wikipedia thumbnails in parallel (free API, no key needed)
		const WIKI = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
		Promise.all(
			music.artists.map(async (artist) => {
				if (!artist.wiki) return;
				try {
					const res = await fetch(WIKI + encodeURIComponent(artist.wiki), {
						headers: { Accept: 'application/json' }
					});
					if (!res.ok) return;
					const data: { thumbnail?: { source: string } } = await res.json();
					if (data.thumbnail?.source) {
						artistImages = { ...artistImages, [artist.slug]: data.thumbnail.source };
					}
				} catch {
					// fall through to SVG placeholder
				}
			})
		);

		return () => obs.disconnect();
	});
</script>

<section bind:this={section} id="music" aria-labelledby="music-heading">
	<div class="container">
		<!-- Header -->
		<div class="header fade-in" class:visible>
			<span class="section-label">// 006 · music</span>
			<h2 id="music-heading">{music.heading}</h2>
			<p class="subtext">{music.subtext}</p>
		</div>

		<!-- Pull quote -->
		<blockquote class="pull-quote fade-in" class:visible style="transition-delay: 0.1s">
			<span>{music.pullQuote}</span>
		</blockquote>

		<!-- Artist image grid -->
		<ul class="artist-grid" aria-label="Favourite artists">
			{#each music.artists as artist, i}
				<li
					class="artist-card fade-in"
					class:visible
					style="transition-delay: {0.05 * i}s"
				>
					<!-- Wikipedia thumbnail if loaded, otherwise local JPG or SVG placeholder -->
					<img
						src={artistImages[artist.slug] ?? `/music/${artist.slug}.jpg`}
						alt={artist.name}
						class="artist-img"
						loading="lazy"
					/>

					<!-- Gradient fallback (always rendered, hidden behind image) -->
					<div
						class="artist-gradient"
						style="background: linear-gradient(145deg, {artist.color1}, {artist.color2});"
						aria-hidden="true"
					></div>

					<!-- Name overlay -->
					<div class="artist-overlay">
						<span class="artist-name">{artist.name}</span>
					</div>
				</li>
			{/each}
		</ul>

		<!-- Genre tags -->
		<div class="genre-tags fade-in" class:visible style="transition-delay: 0.45s" aria-label="Music genres">
			{#each music.genres as genre}
				<span class="genre-tag">{genre}</span>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		padding: var(--space-2xl) var(--space-lg);
		background:
			linear-gradient(180deg, rgba(245,169,184,0.46) 0%, rgba(245,169,184,0.38) 100%),
			linear-gradient(180deg, var(--color-charcoal) 0%, var(--color-plum) 100%);
		position: relative;
		overflow: hidden;
	}

	section::before {
		content: '';
		position: absolute;
		inset: 0;
		background: repeating-linear-gradient(
			0deg,
			rgba(245, 169, 184, 0.012) 0px,
			rgba(245, 169, 184, 0.012) 1px,
			transparent 1px,
			transparent 48px
		);
		pointer-events: none;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.header {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	h2 {
		font-size: clamp(1.8rem, 3vw, 2.6rem);
		color: var(--color-white);
	}

	.subtext {
		font-size: 0.95rem;
		color: var(--color-silver);
		opacity: 0.75;
		max-width: 500px;
		line-height: 1.7;
	}

	/* Pull quote */
	.pull-quote {
		border: none;
		margin: 0;
		padding: 0;
	}

	.pull-quote span {
		font-family: var(--font-serif);
		font-size: clamp(1.5rem, 3vw, 2.2rem);
		font-style: italic;
		font-weight: 700;
		background: linear-gradient(135deg, var(--color-pink) 30%, var(--color-lavender));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		line-height: 1.3;
	}

	/* Artist grid */
	.artist-grid {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
	}

	@media (max-width: 900px) {
		.artist-grid { grid-template-columns: repeat(3, 1fr); }
	}
	@media (max-width: 600px) {
		.artist-grid { grid-template-columns: repeat(2, 1fr); }
	}

	/* Card */
	.artist-card {
		position: relative;
		aspect-ratio: 1;
		border-radius: 8px;
		overflow: hidden;
		cursor: default;
	}

	.artist-card:hover .artist-overlay {
		opacity: 1;
	}

	.artist-card:hover .artist-img,
	.artist-card:hover .artist-gradient {
		transform: scale(1.05);
	}

	/* Actual photo */
	.artist-img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.4s var(--ease-smooth);
		z-index: 1;
	}

	/* Gradient fallback */
	.artist-gradient {
		position: absolute;
		inset: 0;
		transition: transform 0.4s var(--ease-smooth);
		z-index: 0;
	}

	/* Name overlay */
	.artist-overlay {
		position: absolute;
		inset: 0;
		z-index: 2;
		background: linear-gradient(0deg, rgba(9,9,13,0.85) 0%, rgba(9,9,13,0.1) 60%, transparent 100%);
		display: flex;
		align-items: flex-end;
		padding: 0.75rem;
		opacity: 0.85;
		transition: opacity 0.3s;
	}

	.artist-name {
		font-family: var(--font-serif);
		font-size: clamp(0.75rem, 1.4vw, 0.95rem);
		font-style: italic;
		color: var(--color-white);
		line-height: 1.2;
	}

	/* Genre tags */
	.genre-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.genre-tag {
		font-family: var(--font-mono);
		font-size: 0.6rem;
		letter-spacing: 0.12em;
		padding: 0.3rem 0.7rem;
		border: 1px solid rgba(201, 184, 216, 0.2);
		border-radius: 20px;
		color: var(--color-lavender);
		background: rgba(201, 184, 216, 0.04);
	}

</style>
