<script lang="ts">
    //export const number_cards = 200;
    export let cards;
   
    import {hand, trash, selectedCard, isCardSelected} from '../store/cardStore';

const PickCard = () => {
    const pick = cards.shift();
    hand.update(currentHand=> [...currentHand, pick]);}

const throwCard = () => {
    if ($hand.length === 8 && isCardSelected){
        if ($selectedCard){
        $trash.push($selectedCard); 
        hand.update(updatedHand => updatedHand = $hand.filter(card => card.id != $selectedCard.id));}
    }

}

let backgroundStyle = $trash.length > 0
        ? `background-image: url(${$trash[0].img_url})`
        : 'background-color: hsl(40, 100%, 50%)';

</script>

<div class="deck">
    <button class="default-pile" on:click={throwCard}>
       Poubelle
    </button>
    <button class="deck-button" on:click={PickCard} aria-label="Draw a card"></button>
</div>

<style>
    .deck{
        background-color: red;
        width: 250px;
        height: 200px;
        position:absolute;
        right: 300px;
        top:100px;
        display: flex;
        align-items: center;
    }


    .default-pile {
        background: backgroundStyle;
        width: 100px;            /* Set a fixed width for the default pile */
        height: 150px;          /* Set a fixed height for the default pile */
        display: flex;          /* Centering the text inside the default pile */
        align-items: center;
        justify-content: center;
        color: white;
        margin: 5px 40px 5px 5px;
    }

    .deck-button{
        background-image: url('images/DosDeCarte.jpg');
        width: 100px;
        height: 150px;
        background-size: cover;
        background-repeat: no-repeat; 
        background-position: center; 
        border: none; 
        padding: 0;
        cursor: pointer;
    }
</style>