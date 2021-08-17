<template>
    <div class="container mt-5">
        <h3>Görev Listesi</h3>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Task</th>
                    <th scope="col">Description</th>
                    <th scope="col">Yönet</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="task in getTasks" :key="task.id">
                    <td scope="row" @click="goBrr(task)">{{ task.id }}</td>
                    <td @click="goBrr(task)">{{ task.title }}</td>
                    <td @click="goBrr(task)">{{ task.description }}</td>
                    <td><button class="btn btn-danger float-end" @click="$store.commit('deleteTask', task)">Sil</button></td>
                </tr>
            </tbody>
        </table>
        <button class="btn btn-primary float-end col-1" @click="this.$router.push('/newItem')">Ekle</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    created() {
        const initialItems = JSON.parse(localStorage.getItem('tasks'));
        if(initialItems !== null) {
            this.$store.state.tasks = initialItems;
        } else {
            localStorage.setItem('tasks', JSON.stringify(this.$store.state.tasks));
        }
    },
    methods: {
        goBrr(item) {
            this.$router.push(`/${item.id}`);
        }
    },
    computed: {
        ...mapGetters(["getTasks"]),
    }
}
</script>

<style>

td:hover{
    cursor: pointer;
}

</style>