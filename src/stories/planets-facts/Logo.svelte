<div><a href="/Earth">THE PLANETS</a></div>

<style lang="scss">
	div {
		font-family: var(--font-family-logo);
		font-style: normal;
		font-weight: 600;
		font-size: var(--font-size-4);
		line-height: 128%;
		letter-spacing: -1.05px;
		text-transform: uppercase;
		padding-bottom: var(--size-1); //center visually
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		min-height: var(--size-10);
		color: var(--md-sys-color-on-background);
	}

	@media (max-width: 320px) {
		div {
			min-width: max-content;
		}
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		div {
			justify-content: center;
		}
	}

	a{
		text-decoration: none;
		color: var(--md-sys-color-on-background);
	}
</style>
