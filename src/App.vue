<!-- App.vue -->
<template>
  <div id="app">
    <button @click="addTodo">Add Todo</button>
    <div id="MutationResult">{{ mutationResult }}</div>
    <div id="QueryResult">{{ queryResult }}</div>
    <div id="SubscriptionResult">{{ subscriptionResult }}</div>
    <button @click="fetchCountTodos">Print Data</button>
    <div id="DataResult">{{ dataResult }}</div>
    <canvas id="graph-area"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mutationResult: '',
      queryResult: '',
      subscriptionResult: '',
      dataResult: '',
    };
  },
  methods: {
    async addTodo() {
      // Existing addTodo function
    },

    async fetchTodos() {
      // Existing fetchTodos function
    },

    async fetchCountTodos() {
      // Existing fetchCountTodos function
    },

    subscribeToNewTodos() {
      // Existing subscribeToNewTodos function
    },
  },
  mounted() {
    // Existing code on mounted
    this.fetchTodos();
    this.subscribeToNewTodos();

    this.fetchCountTodos().then((result) => {
      // Existing code for pie chart
    }).catch(error => {
      console.error('Error:', error);
    });
  },
};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
}

button {
  background-color: #3498db;
  color: #ffffff;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

#MutationResult,
#QueryResult,
#SubscriptionResult,
#DataResult {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

#graph-area {
  margin-top: 20px;
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
