<article>
    <h1>About Me</h1>
    <h2>Stuff</h2>
</article>
<div class="background">
</div>
<style>
    .background {
        background-image: url("../moonrise.jpeg");
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 0;
		background-size: cover;
        background-position: bottom;
    }
    article {
        grid-column: span 4;
        background-color: rgba(156, 209, 230, 0.497);
        backdrop-filter: blur(8px);
        padding: 30px;
        color: rgb(16, 28, 43);
        border-radius: 10px;
        margin: 10px;
        z-index: 1;
    }
</style>