<script lang="ts">
	import type { Planet } from 'src/types/Planet';
	import { planets } from '../Store';
	let navItems: Planet[];
	planets.subscribe((data) => {
		navItems = data;
	});

	let showMenu = false;
</script>

<nav>
	<div class="burger" on:click={() => (showMenu = !showMenu)}>
		<svg
			width="24px"
			height="24px"
			stroke-width="1.5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			color="#000000"
			><path
				d="M3 5h18M3 12h18M3 19h18"
				stroke="#000000"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</div>
	<ul role="menubar" class:showMenu>
		{#each navItems as { name }}
			<li role="none">
				<a role="menuitem" href={name}>
					{name}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	/*
	@media screen and (max-width: 400px) and (orientation: portrait) {
		ul {
			flex-direction: column;
			display: none;

			&.showMenu {
				display: flex;
				justify-content: flex-start;
				position: absolute;
				left: 0;
				width: 100%;
				height: 100%;
			}

			li {
				display: flex;
				justify-content: space-between;
				border-bottom: 1px solid green;

				a {
					flex-grow: 1;
				}
			}
		}

		.colorCode,
		.arrow {
			flex-basis: auto;
		}
		.colorCode {
			display: block;
			width: 20px;
			height: 20px;
			border-radius: 50%;
			background-color: red;
		}
	}

	@media screen and (min-width: 400px) {
		.arrow,
		.burger {
			display: none;
		}

		.colorCode {
			opacity: 0;
			height: var(--size-1);
			background-color: red;
		}

		ul {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: var(--size-6);
			padding-bottom: var(--size-6);

			li {
				display: flex;
				flex-direction: column;
				gap: var(--size-4);

				&:hover {
					.colorCode {
						opacity: 1;
					}
				}
			}
		}
	}
	*/

	nav {
		display: flex;

		//flex-grow: 1;
		//flex-basis: calc((30rem - 100%) * 999);
	}

	@media (min-width: 635px) and (max-width: 767px) {
		nav {
			flex-basis: 100%;
			justify-content: center;
			margin-bottom: var(--size-5);
		}
	}

	@media (max-width: 634px) {
		ul {
			display: none;
		}
		.burger {
			display: block;
		}
		nav {
			flex-shrink: 0;
			flex-basis: auto;
			align-items: center;
		}
	}

	@media (min-width: 635px) {
		ul {
			display: flex;
		}
		.burger {
			display: none;
		}
	}

	ul {
		padding-left: 0;
		padding-right: 0;
		margin: 0;
		list-style: none;

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

		&:hover {
			text-decoration: none;
		}

		&:hover::before {
			content: '';
			height: 4px;
			width: 100%;
			background: red;
			position: absolute;
			top: 0;
			bottom: 100%;
		}
	}
</style>
