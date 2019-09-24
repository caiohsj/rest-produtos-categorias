<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand>E-Commerce</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item>
                        <b-link to="/home">Home</b-link>
                    </b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav>
                    <b-nav-item-dropdown text="Categorias" left>
                        <b-dropdown-item v-for="cat in categorias" v-bind:key="cat.id">

                            <b-link :to="{name:'produtos', params:{idCategoria: cat.id, pagina:1}}">{{cat.description}}</b-link>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import categoriaService from '../services/categoria'

    export default {
        name: "NavBar",
        data() {
            return {
                categorias: []
            }
        },
        mounted() {
            categoriaService.listar()
                .then((response) => {
                    this.categorias = response.data
                })
        }
    }
</script>

<style scoped>

</style>