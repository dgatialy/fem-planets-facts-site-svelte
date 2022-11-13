<script lang="ts">
	import type { Planet } from 'src/types/Planet';
	import { planets } from '../../Store';
	let navItems: Planet[];
	planets.subscribe((data: Planet[]) => {
		navItems = data;
	});

	let showMenu = false;
</script>

<nav aria-label="Main menu">
	<button
		aria-expanded={showMenu}
		aria-label="{showMenu ? 'Close' : 'Open'} menu"
		aria-controls="main_menu"
		class="burger"
		on:click={() => (showMenu = !showMenu)}
	>
		<div class="hamburger" aria-hidden="true" />
	</button>
	<ul aria-expanded={showMenu} id="main_menu" data-sveltekit-prefetch>
		{#each navItems as { name }}
			<li>
				<div
					class="border"
					style="background-color: var(--planet-{name.toLowerCase()}, black)"
					aria-hidden="true"
				/>
				<a href="/{name}" on:click={() => (showMenu = false)}>
					{name}
				</a>
				<div class="arrowRight" aria-hidden="true" />
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	nav {
		display: flex;
		height: 100%;
		align-items: center;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		nav {
			justify-content: center;
			padding-bottom: var(--size-2);
		}
	}

	@media (min-width: 1025px) {
		nav {
			justify-content: flex-end;
		}

		ul {
			height: 100%;
		}

		li {
			display: flex;
			height: 100%;
			align-items: center;

			&:hover {
				.border {
					display: block;
				}
			}

			.border {
				height: 4px;
				width: 100%;
				position: absolute;
				top: 0;
				display: none;
			}
		}
	}

	@media (max-width: 767px) {
		ul[aria-expanded='false'] {
			display: none;
		}
		
		.arrowRight {
			flex-shrink: 0;
			width: 15px;
			height: 15px;
			mask: url('assets/icon-chevron.svg') no-repeat center;
			background-color: var(--md-sys-color-on-surface);			
		}

		ul[aria-expanded='true'] {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			top: var(--size-10);
			left: 0;
			width: 100%;
			height: calc(100vh - var(--size-10));
			position: absolute;
			align-items: center;
			padding-inline-start: var(--size-8);
			padding-inline-end: var(--size-7);
			padding-top: var(--size-5);
			gap: 0;
			background-color: var(--md-sys-color-surface);
			border-top: var(--border-size-1) solid var(--md-sys-color-surface-variant);

			li {
				display: flex;
				flex-shrink: 0;
				align-items: center;
				width: 100%;
				max-inline-size: 100%;
				gap: var(--size-3);
				border-bottom: 1px solid var(--md-sys-color-surface-variant);
				padding: var(--size-3) 0;

				a {
					width: 100%;
					text-align: left;
					padding-top: 0.2em;
				}

				.border {
					height: 100%;
					aspect-ratio: 1;
					border-radius: 50%;
					display: block !important;
				}
			}
		}
		.burger {
			display: block;
		}
		nav {
			justify-content: flex-end;
		}
	}

	@media (min-width: 768px) {
		.burger {
			display: none;
		}
		ul {
			display: flex;
		}
		.arrowRight {
			display: none;
		}
	}

	ul {
		padding-left: 0;
		padding-right: 0;
		margin: 0;
		list-style: none;
		z-index: var(--layer-1);

		gap: var(--size-5);
		justify-content: space-between;
		align-items: center;

		li {
			padding: 0;
			position: relative;
		}
	}
	a {
		padding: 0;
		margin: 0;
		font-family: 'League Spartan';
		font-style: normal;
		font-weight: 700;
		font-size: var(--font-size-0);
		line-height: 120%;

		text-align: center;
		letter-spacing: 1px;
		text-transform: uppercase;
		position: relative;
		color: var(--md-sys-color-on-background);

		&:hover {
			text-decoration: none;
		}
	}

	button {
		background: none;
		padding: 0;
	}
	.hamburger {
		width: 24px;
		height: 17px;
		mask: url('assets/icon-hamburger.svg') no-repeat center;
		background-color: var(--md-sys-color-on-surface);
	}
</style>
