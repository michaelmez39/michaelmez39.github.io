<script>
	import {current_page} from "./stores.js";
	const pages = ["Home", "About", "Resume", "Projects", "Thoughts"]
	const updatePage = (i) => {
		return () => current_page.set(i);
	}
</script>
<div class="navigator">
	<nav>
		<ul>
			{#each pages as page, i}
				<a href="./#"><li on:click={updatePage(i)}>{page}</li></a>
			{/each}
		</ul>
	</nav>
</div>

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
		color: rgb(226, 226, 226);
		transition: color 0.3s;
	}
	a:hover {
		color: rgb(221, 243, 245);
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