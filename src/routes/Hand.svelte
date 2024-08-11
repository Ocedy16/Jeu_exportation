<script lang="ts">
    import {hand, isCardSelected, selectedCard} from '../store/cardStore'
    import Card_component from './Card_component.svelte';
    import type {Card} from '../types/Card.ts';

    $: cardsInHand = $hand;

    const cardClicked = (card:Card) => {
        selectedCard.set(card);
        isCardSelected.set(true);
    };

</script>

<style>
    .Hand {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }
  </style>

<div class="Hand">
    {#each cardsInHand as card (card.id)}
        <Card_component id = {card.id} name = {card.name} description = {card.description} prv_card = {card.prv_card} img_url = {card.img_url} on:click={() => cardClicked(card)}> </Card_component> 
    {/each}
</div>