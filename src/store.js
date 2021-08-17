import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            tasks: [
                {
                    id: "ID",
                    title: "Yeni Görev Ekle",
                    description: "Aşağıdaki mavi butona tıkle ve formu doldur!"
                }
            ]
        }
    },
    getters: {
        getTasks(state) {
            return state.tasks;
        },
        getTask: (state) => (id) => {
            return state.tasks.find(task => task.id == id);
        },
    },
    mutations: {
        setTask(state, item) {
            state.tasks.push(item);
        },
        deleteTask(state, item) {
            state.tasks = state.tasks.filter(i => i.id != item.id);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        }
    }
});

export default store;