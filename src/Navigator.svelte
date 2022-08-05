<style>
	nav, ul {
		width: 100%;
	}
	ul {
		padding: 0;
		list-style: none;
		display: flex;
		justify-content: space-between;
	}
	a {
		color: white;
	}
	a:hover {
		color: white;
		text-decoration: none;
	}
	li {
		padding: 3px 10px;
		background-color: #4E6C85;
		border-radius: 15px;
		font-size: 13px;
	}
	.navigator {
		grid-column: 6/10;
		align-self: center;
	}
	@media (max-width: 576px) {
		.navigator {
			width: 100%;
		}
		ul {
			justify-content: space-around;
		}
	}
</style>
<div class="navigator">
	<nav>
		<ul>
			<li><a href="./#">Home</a></li>
			<li><a href="./#">About</a></li>
			<li><a href="./#">Resume</a></li>
			<li><a href="./#">Projects</a></li>
			<li><a href="./#">Thoughts</a></li>
		</ul>
	</nav>
</div>