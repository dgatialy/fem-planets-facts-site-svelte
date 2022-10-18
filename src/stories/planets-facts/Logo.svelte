<div>THE PLANETS</div>

<style lang="scss">
	div {
		font-family: var(--font-family-logo);
		font-style: normal;
		font-weight: 600;
		font-size: var(--font-size-4);
		line-height: 128%;
		letter-spacing: -1.05px;
		text-transform: uppercase;
		//margin-bottom: var(--size-2);
		padding-bottom: var(--size-1); //center visually
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		min-height: var(--size-10);
	}

	@media (min-width: 635px) and (max-width: 767px) {
		div {
			flex-basis: 100%;
			justify-content: center;
		}
	}

	@media (max-width: 634px) {
		div {
			flex-basis: auto;
			flex-shrink: 0;
		}
	}
</style>
