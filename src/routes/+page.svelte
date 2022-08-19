<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
	<path d="
	M 100 0
	L 0 0
	L 0 100
	C 0 100, 40 90, 50 50 
	M 50 50 C 60 10, 90 0, 100 0" stroke="transparent" fill="#003464"/>
	<path d="
	M 0 100 C 0 100, 40 90, 50 50 
	M 50 50 C 60 10, 90 0, 100 0" stroke="white" stroke-width="1" fill="transparent"/>
</svg>
<img class="earth" src="../earth.png" alt="earth" />

<article class="intro">
	<p>Rather than a boring old showcase, let's go on an adventure...</p>
	<button>Explore</button>
</article>
<a class="nav-button next" href="/about">
	Next
</a>

<div class="background">
</div>
<style>  
	svg {
		width: 100%;
		margin: 0;
		padding: 0;
		position: absolute;
		top: -5px;
		grid-column: 1/-1;
		z-index: 100;
	}
	.background {
		height: 100%;
		width: 100%;
		position: absolute;
		z-index: 1;
		padding: 0;
		background-image: url("../moon.jpg");
		background-size: cover;
		background-position: bottom;
	}
	.earth {
        margin-top: 40px;
		grid-column: 3/4;
		z-index: 2;
	}
	.intro {
		grid-column: 4/6;
		margin: auto auto auto auto;
		padding: 20px;
		border-radius: 10px;
		border:1px solid white;
		z-index: 100;
		color: white;
		font: 400 28px "Orbitron", sans-serif;


		background-color: rgba(152, 217, 239, 0.191);
		backdrop-filter: blur(10px);
	}
	.intro > p {
		margin: 0;
	}
	.intro > button {
		font-size: 14px;
		font-family: sans-serif;
		display: block;
		margin: auto 5px auto auto;
	}
	@media (max-height: 600px) {
		.earth {
			visibility: hidden;
			display: none;
		}
	}
	@media (max-width: 576px) {
		article {
			position: relative;
			margin: 10px;
		}
		svg {
			display: none;
			visibility: hidden;
		}
		.earth {
			visibility: hidden;
			display: none;
		}
		.background {
			background-image: url(/earthrise.jpg);
		}
	}
</style>