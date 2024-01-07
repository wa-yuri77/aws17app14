// main.js
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { Amplify } from 'aws-amplify';
import amplifyconfig from '/src/amplifyconfiguration.json';
import Graph from './components/Graph.vue';

Amplify.configure(amplifyconfig);
const app = createApp(Graph);
createApp(App).mount('#app');
