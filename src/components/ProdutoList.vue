<template>
    <div>
        <b-table striped hover :items="produtos" :fields="cabecalhos"></b-table>
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
                ]
            }
        }
    }
</script>

<style scoped>

</style>