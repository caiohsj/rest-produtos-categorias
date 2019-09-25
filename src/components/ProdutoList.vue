<template>
    <div>
        <b-table striped hover :items="produtos" :fields="cabecalhos"></b-table>
        <div class="row">
            <b-card v-for="produto in produtos" v-bind:key="produto.id"
                    img-src=""
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="m-2"
            >

                <b-card-img :src="`data:image/png;base64,${produto.img}`">
                </b-card-img>

                <b-card-text class="font-weight-bold">
                    {{produto.description}}
                </b-card-text>

                <b-card-text>Preço: R${{produto.price}}</b-card-text>
                <b-card-text>Marca: {{produto.brand}}</b-card-text>

                <b-button href="#" variant="primary" class="m-2">Visualizar</b-button>
                <b-button href="#" variant="success">Add Carrinho</b-button>
            </b-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProdutoList",
        props: ['produtos'],
        data() {
            return {
                cabecalhos: [
                    {
                        key: 'id',
                        label: 'Ident.'
                    },
                    {
                        key: 'description',
                        label: 'Descrição'
                    },
                    {
                        key: 'price',
                        label: 'Preço',
                        sortable:true
                    },
                    {
                        key: 'category.description',
                        label: 'Categoria'
                    }
                ],
                img: "aa"
            }
        }
    }
</script>

<style scoped>

</style>