<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6 mx-auto">
                <form @keydown.enter="addItem">
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Başlık</label>
                        <input v-model="title" type="text" class="form-control" id="exampleInputPassword1" placeholder="Bugün yapılacak görev...">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Açıklama</label>
                        <input v-model="description" type="text" class="form-control" id="exampleInputPassword1" placeholder="Bugün yapılacaklar arasında...">
                    </div>
                    <button type="submit" class="btn btn-danger col-2" @click="goHome">İptal</button>
                    <button type="submit" class="btn btn-primary float-end col-2" @click.prevent="addItem">Gönder</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            description: "",
        }
    },
    methods: {
        goHome() {
            this.$router.push("/");
        },
        addItem() {
            if(this.title !== "" && this.description !== "") {
                const newObj = {
                    id: new Date().getTime(),
                    title: this.title,
                    description: this.description,
                }
                this.$store.commit('setTask', newObj);
                this.$router.push("/");
                localStorage.setItem('tasks', JSON.stringify(this.$store.state.tasks));
            }
        }
    }
}
</script>