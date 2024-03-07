<script>
	export let immagine;
	export let prezzo;
	export let piatto;
	export let ristorante;
</script>

<div class="card_ristorante">
	<img class="card_ristorante__img" src={immagine} alt="Copertina del piatto" />

	<div class="card_ristorante__desc">
		<p class="card_ristorante__prezzo">{prezzo}</p>
		<p class="card_ristorante__piatto">{piatto}</p>
	</div>

	<div class="card_ristorante__footer">
		<p>{ristorante}</p>
	</div>
</div>

<style>
	.card_ristorante {
		margin-left: 20px;
		background-color: rgb(255, 233, 180);
		width: 300px;
		color: black;
		font-family: Montserrat;
		margin-top: 20px;
	}

	.card_ristorante__img {
		aspect-ratio: 1;
		background-color: red;
		object-fit: cover;
		width: 100%;
		margin-bottom: 5px;
	}

	.card_ristorante__desc {
		padding-left: 8px;
		width: 100%;
		margin-top: 15px;
	}

	.card_ristorante__prezzo {
		font-size: 14px;
		font-weight: 300;
		margin-bottom: -8px;
	}
	.card_ristorante__piatto {
		font-size: 24px;
		font-weight: 700;
	}

	.card_ristorante__footer {
		background-color: black;
		font-weight: 500;
		font-style: italic;
		color: white;
		font-size: 15px;
		padding-top: 5px;
		padding-bottom: 5px;
		display: flex;
		justify-content: center;
	}
</style>
