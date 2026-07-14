<script lang="ts">
	import { onMount } from 'svelte';
	import Waveform from './Waveform.svelte';
	import { meta, heroTags } from '$lib/content/data';

	let visible = false;
	let particleContainer: HTMLDivElement;

	onMount(() => {
		setTimeout(() => { visible = true; }, 100);

		// Generate floating particles in trans flag colors
		const count = 18;
		const colors = ['var(--color-blue)', 'var(--color-pink)', 'rgba(255,255,255,0.7)'];
		for (let i = 0; i < count; i++) {
			const el = document.createElement('span');
			el.className = 'particle';
			const size = Math.random() * 3 + 1.5;
			el.style.cssText = `
				width: ${size}px;
				height: ${size}px;
				left: ${Math.random() * 100}%;
				top: ${Math.random() * 100}%;
				animation-delay: ${Math.random() * 8}s;
				animation-duration: ${7 + Math.random() * 8}s;
				opacity: ${Math.random() * 0.55 + 0.2};
				background: ${colors[i % colors.length]};
			`;
			particleContainer?.appendChild(el);
		}
	});
</script>

<section class="hero" id="hero">
	<!-- Particle field -->
	<div class="particles" bind:this={particleContainer} aria-hidden="true"></div>

	<!-- Background gradient layers -->
	<div class="bg-glow bg-glow--pink" aria-hidden="true"></div>
	<div class="bg-glow bg-glow--blue" aria-hidden="true"></div>

	<div class="hero-inner" class:visible>
		<!-- Portrait -->
		<div class="portrait-wrap" aria-hidden="true">
			<div class="portrait-frame">
				<div class="portrait-frame-inner">
					<img src="./portrait.jpg" alt="Chloe" class="portrait-img" />
				</div>
			</div>
			<span class="corner-heart tl" aria-hidden="true">♥</span>
			<span class="corner-heart tr" aria-hidden="true">♥</span>
			<span class="corner-heart bl" aria-hidden="true">♥</span>
			<span class="corner-heart br" aria-hidden="true">♥</span>
		</div>

		<!-- Text content -->
		<div class="hero-text">
			<span class="section-label">she/her · Mexico · Power Integrity</span>
			<h1>{meta.tagline}</h1>
			<p class="hero-description">{meta.description}</p>

			<div class="hero-tags" aria-label="Identity tags">
				{#each heroTags as tag}
					<span class="tag mono">{tag}</span>
				{/each}
			</div>

			<a href="#about" class="hero-cta" aria-label="Scroll to About section">
				<span>Read on</span>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
					<path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</a>
		</div>
	</div>

	<!-- Waveform at bottom -->
	<div class="hero-wave" aria-hidden="true">
		<Waveform height={64} />
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: 100svh;
		display: flex;
		align-items: center;
		justify-content: center;
		background:
			linear-gradient(180deg, rgba(91,206,250,0.45) 0%, rgba(91,206,250,0.22) 100%),
			radial-gradient(ellipse 80% 60% at 50% 0%, var(--color-plum) 0%, var(--color-void) 70%);
		overflow: hidden;
		padding: 6rem 2rem 4rem;
	}

	.particles {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	:global(.particle) {
		position: absolute;
		border-radius: 50%;
		background: var(--color-pink);
		animation: float linear infinite;
	}

	@keyframes float {
		0%   { transform: translateY(0) scale(1); opacity: 0; }
		10%  { opacity: 1; }
		90%  { opacity: 0.6; }
		100% { transform: translateY(-80px) scale(0.5); opacity: 0; }
	}

	.bg-glow {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		pointer-events: none;
	}

	.bg-glow--pink {
		width: 500px;
		height: 400px;
		top: -100px;
		right: -100px;
		background: rgba(245, 169, 184, 0.07);
	}

	.bg-glow--blue {
		width: 400px;
		height: 300px;
		bottom: 80px;
		left: -80px;
		background: rgba(91, 206, 250, 0.05);
	}

	.hero-inner {
		position: relative;
		display: flex;
		align-items: center;
		gap: 5rem;
		max-width: 1100px;
		width: 100%;
		opacity: 0;
		transform: translateY(24px);
		transition: opacity 1s var(--ease-smooth), transform 1s var(--ease-smooth);
	}

	.hero-inner.visible {
		opacity: 1;
		transform: translateY(0);
	}

	/* Portrait */
	.portrait-wrap {
		flex-shrink: 0;
		position: relative;
		transform: rotate(-3deg);
		filter: drop-shadow(0 12px 40px rgba(245, 169, 184, 0.35));
		transition: transform 0.4s var(--ease-bounce);
	}

	.portrait-wrap:hover {
		transform: rotate(0deg) scale(1.02);
	}

	.portrait-frame {
		padding: 4px;
		border-radius: 22px;
		background: linear-gradient(
			135deg,
			#5BCEFA, #F5A9B8, #FFFFFF, #F5A9B8, #5BCEFA, #F5A9B8
		);
		background-size: 300% 300%;
		animation: gradientShift 5s ease infinite, glowPulse 4s ease-in-out infinite;
	}

	@keyframes gradientShift {
		0%   { background-position: 0% 50%; }
		50%  { background-position: 100% 50%; }
		100% { background-position: 0% 50%; }
	}

	@keyframes glowPulse {
		0%, 100% { filter: drop-shadow(0 0 10px rgba(245, 169, 184, 0.55)); }
		50%       { filter: drop-shadow(0 0 22px rgba(91, 206, 250, 0.65)); }
	}

	.portrait-frame-inner {
		border-radius: 19px;
		overflow: hidden;
		aspect-ratio: 3 / 4;
		width: 240px;
	}

	.portrait-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	/* Corner hearts */
	.corner-heart {
		position: absolute;
		font-size: 1.3rem;
		line-height: 1;
		pointer-events: none;
		animation: heartBeat 3s ease-in-out infinite;
	}

	.corner-heart.tl { top: -14px;  left: -12px;  color: #5BCEFA; animation-delay: 0s; }
	.corner-heart.tr { top: -14px;  right: -12px; color: #F5A9B8; animation-delay: 0.6s; }
	.corner-heart.bl { bottom: -14px; left: -12px;  color: #F5A9B8; animation-delay: 1.2s; }
	.corner-heart.br { bottom: -14px; right: -12px; color: #5BCEFA; animation-delay: 1.8s; }

	@keyframes heartBeat {
		0%, 100% { transform: scale(1);   opacity: 0.75; }
		50%       { transform: scale(1.4); opacity: 1; }
	}

	/* Text */
	.hero-text {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	h1 {
		font-size: clamp(2rem, 4vw, 3.2rem);
		font-style: italic;
		background: linear-gradient(135deg, var(--color-white) 40%, var(--color-lavender));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-description {
		font-size: 1rem;
		line-height: 1.8;
		color: var(--color-silver);
		max-width: 520px;
	}

	.hero-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		font-size: 0.6rem;
		letter-spacing: 0.15em;
		padding: 0.3rem 0.7rem;
		border: 1px solid rgba(245, 169, 184, 0.2);
		border-radius: 2px;
		color: var(--color-pink);
		background: rgba(245, 169, 184, 0.05);
		transition: border-color 0.2s, background 0.2s;
	}

	.tag:hover {
		border-color: rgba(245, 169, 184, 0.5);
		background: rgba(245, 169, 184, 0.1);
	}

	.hero-cta {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--color-silver);
		font-size: 0.85rem;
		margin-top: 0.5rem;
		transition: color 0.2s, gap 0.2s;
	}

	.hero-cta:hover {
		color: var(--color-pink);
		gap: 0.75rem;
	}

	.hero-wave {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		opacity: 0.6;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.hero-inner {
			flex-direction: column;
			text-align: center;
			gap: 2.5rem;
		}

		.portrait-wrap {
			width: 200px;
			height: 260px;
		}

		.hero-tags {
			justify-content: center;
		}

		.hero-description {
			max-width: 100%;
		}

		.hero-cta {
			align-self: center;
		}
	}
</style>
