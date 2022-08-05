<style>
	#content {
		position: relative;
		grid-column: 1/-1;
		flex-grow: 1;
		height: 100%;
	}
	article {
		position: absolute;
		width: 100%;
		height: 100%;
		padding: 0;
		background-image: url("../moon.jpg");
		background-size: cover;
		background-position: bottom;

		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: minmax(70px, auto);
		z-index: 0;
	}
	svg {
		width: 100%;
		margin: 0;
		padding: 0;
		position: absolute;
		grid-column: 1/-1;
		z-index: 1;
	}
	.earth {
		grid-column: 2/3;
	}
	.intro {
		margin: auto;
		color: white;
		font: 400 28px "Orbitron", sans-serif;
		grid-column: 3/4;
	}
	@media (max-height: 600px) {
		.earth {
			visibility: hidden;
			display: none;
		}
	}
	@media (max-width: 576px) {
		article {
			flex-grow: 1;
			position: relative;
			display: flex;
		}
		svg {
			display: none;
			visibility: hidden;
		}
		.earth {
			visibility: hidden;
			display: none;
		}

	}
</style>
<div id="content">
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
	<path d="
	M 100 0
	L 0 0
	L 0 100
	C 0 100, 40 90, 50 50 
	M 50 50 C 60 10, 90 0, 100 0" stroke="transparent" fill="#003464"/>
	<path d="
	M 0 100 C 1 100, 40 90, 50 50 
	M 50 50 C 60 10, 90 0, 100 0.5" stroke="white" fill="transparent"/>
	<path d="M 100 0.5 L 300 0.5" stroke="white" fill="transparent"/>
</svg>
<article>
	<img class="earth" src="../earth.jpg" alt="earth" />
	<div class="intro">
		Rather than a boring old showcase, let's go on an adventure...
	</div>
</article>
</div>