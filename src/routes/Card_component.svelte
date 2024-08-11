<!-- Card.svelte -->


<script lang="ts">
    export let id: number
    export let name: string;
    export let description: string;
    export let prv_card: Array<string>;
    export let img_url: string;

</script>

<style>
    .card{
        max-width: 100px;
        height: auto; 
    }
    .card img{
        max-width: 100%;
        margin: 0;
    }
</style>

<div class="card">
    <img src = {img_url} title={description} alt={name}/>
</div>