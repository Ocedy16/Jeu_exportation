<script>
    import Card from "./Card_component.svelte";
    export let piles;
</script>

<style>
    .playboard{
        background-color: lightblue;
    }
</style>

<div class="playboard">
    {#each piles as pile}
        <Card id = {pile.lastCard.id} name = {pile.lastCard.name} description = {pile.lastCard.description} prv_card = {pile.lastCard.prv_card} img_url = {pile.lastCard.img_url}></Card> 
   {/each} 

</div>