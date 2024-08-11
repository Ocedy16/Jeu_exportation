
<script lang="ts">
    import Deck from './Deck.svelte';
    import Hand from './Hand.svelte';

    let cards = [{id: 1, name:"5", description:'Can be placed on 4 or 5/', prv_card:["4", "/5"], img_url:'images/5_emballage.png'},
    {id :2, name:"6", description:'Can be placed on 5 or 6/', prv_card:["5", "/6"], img_url:'images/6_transactions.png'}]
</script>

<Deck cards=cards ></Deck>

<Hand />