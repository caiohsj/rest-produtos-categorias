<template>
    <div>
        <h1 class="m-2">Carrinho | pedido</h1>
        <carrinho-list></carrinho-list>
    </div>
</template>

<script>
    import CarrinhoList from "../components/CarrinhoList";

    export default {
        name: "Carrinho",
        components : {
            CarrinhoList
        }
    }
</script>

<style scoped>

</style>