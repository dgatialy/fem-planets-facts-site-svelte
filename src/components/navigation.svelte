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
	<div class="burger" on:click={() => (showMenu = !showMenu)}>BU</div>
	<ul role="menubar" class:showMenu>
		{#each navItems as { name }}
			<li role="none">
				<div class="colorCode" />
				<a role="menuitem" href={name}>
					{name}
				</a>
				<span class="arrow">></span>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
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

	ul {
		padding-left: 0;
		padding-right: 0;
		margin: 0;
		list-style: none;

		li {
			padding: 0;
		}
	}
	a {
		padding: 0;
		margin: 0;

		font-family: 'League Spartan';
		font-style: normal;
		font-weight: 700;
		font-size: 11px;
		line-height: 120%;

		text-align: center;
		letter-spacing: 1px;
		text-transform: uppercase;

		&:hover {
			text-decoration: none;
		}
	}
</style>
