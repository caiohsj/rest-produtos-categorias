<template>
    <div>
        <b-container>
            <produto-list v-bind:produtos="produtos"></produto-list>
        </b-container>
    </div>
</template>

<script>
    import ProdutoList from '../components/ProdutoList'
    import produtoService from '../services/produto'

    export default {
        name: "Produtos",
        data() {
            return {
                produtos: []
            }
        },
        components: {
            ProdutoList
        },
        methods: {
            carregarProdutos() {
                produtoService.listar(this.$route.params.idCategoria, this.$route.params.pagina)
                    .then((response) => {
                        this.produtos = response.data;
                    })
                    .catch((response) => {
                        alert(response.data);
                    })
            }
        },
        watch: {
            '$route': 'carregarProdutos'
        },
        mounted() {
            this.carregarProdutos()
        }
    }
</script>

<style scoped>

</style>