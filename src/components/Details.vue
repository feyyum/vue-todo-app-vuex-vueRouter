<template>
    <div class="container">
        <div class="row">
            <div class="mt-5 col-md-8 mx-auto">
                <h3>{{ setItems.title }}</h3>
                <hr>
                <p>{{ setItems.description }}</p>
                <br>
                <button @click="$router.push('/')" class="btn btn-warning col-2">Anasayfa</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(["getTask"]),
        setItems() {
            const item = this.getTask(this.$router.currentRoute.value.params.id);
            return item;
        }
    }
}
</script>