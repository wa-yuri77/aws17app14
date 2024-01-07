import './style.css';
import { Amplify } from 'aws-amplify';
import amplifyconfig from '/src/amplifyconfiguration.json';

import { generateClient } from 'aws-amplify/api';
import { createTodo } from '/src/graphql/mutations';
import { listTodos } from '/src/graphql/queries';
import { onCreateTodo } from '/src/graphql/subscriptions';

Amplify.configure(amplifyconfig);

const client = generateClient();

const MutationButton = document.getElementById('MutationEventButton');
const MutationResult = document.getElementById('MutationResult');
const QueryResult = document.getElementById('QueryResult');
const SubscriptionResult = document.getElementById('SubscriptionResult');
const PrintButton = document.getElementById("PrintDataEvent");
const PrintResult=document.getElementById("DataResult");

async function addTodo() {
    const todo = {
        name: 'Use AppSync',
        description: `Realtime and Offline (${new Date().toLocaleString()})`
    };

    return await client.graphql({
        query: createTodo,
        variables: {
            input: todo
        }
    });
}

async function fetchTodos() {
    try {
        const response = await client.graphql({
            query: listTodos
        });

        response.data.listTodos.items.map((todo, i) => {
            QueryResult.innerHTML += `<p>${todo.name} - ${todo.description}</p>-${i}`;
        });
    } catch (e) {
        console.log('Something went wrong', e);
    }
}
// ▼グラフの中身

async function fetchCountTodos() {
    try {
        var values=[];
        for(var i=0;i<5;i++){
            const response = await client.graphql({
                query: listTodos,
                variables: {
                    filter: {name:{ eq: 'Use AppSync' }},
                    limit: null, // 取得するアイテムの数を制限する場合
                    nextToken: null // ページネーションのためのトークンなど
                }

            });
            const items = response.data.listTodos.items;
            // alert(items.length);
            values[i]=items.length;
        }

        return values;

    } catch (e) {
        console.log('Something went wrong', e);
    }
}

MutationButton.addEventListener('click', (evt) => {
    addTodo().then((evt) => {
        MutationResult.innerHTML += `<p>${evt.data.createTodo.name} - ${evt.data.createTodo.description}</p>`;
    });
});


function subscribeToNewTodos() {
    client.graphql({ query: onCreateTodo }).subscribe({
        next: (evt) => {
            const todo = evt.data.onCreateTodo;
            SubscriptionResult.innerHTML += `<p>${todo.name} - ${todo.description}</p>`;
        }
    });
}


const val = fetchCountTodos();
val.then(result => {
    console.log(result)
    var pieData = [
        {
            value: result[0],            // 値
            color:"#F7464A",       // 色
            highlight: "#FF5A5E",  // マウスが載った際の色
            label: "ペットボトル"        // ラベル
        },
        {
            value: result[1],
            color: "#41C44E",
            highlight: "#6CD173",
            label: "カン"
        },
        {
            value: result[2],
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "ビン"
        },
        {
            value: result[3],
            color: "#AA49B8",
            highlight: "#C583CF",
            label: "可燃ごみ"
        },
        {
            value: result[4],
            color: "#4D5360",
            highlight: "#616774",
            label: "その他"
        }

    ];
    console.log(pieData);
    function DrawPieChart() {
        var ctx = document.getElementById("graph-area").getContext("2d");
        window.myPie = new Chart(ctx).Pie(pieData);
    };
    DrawPieChart();

}).catch(error => {
    console.error('Error:', error);
});


subscribeToNewTodos();
// fetchCountTodos();
fetchTodos();

// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
//
// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
//
// setupCounter(document.querySelector('#counter'))





// import './style.css';
// import {Amplify} from 'aws-amplify';
// import amplifyconfig from '/src/amplifyconfiguration.json';
// //import router from './router'
// import Vue from 'vue'
// import App from './App.vue'
//
// //
// import HelloWorld from './components/HelloWorld.vue';
// import Graph from './components/Graph.vue';
//
// // import {generateClient} from 'aws-amplify/api';
// // import {createTodo} from '/src/graphql/mutations';
// // import {listTodos} from '/src/graphql/queries';
// // import {onCreateTodo} from '/src/graphql/subscriptions';
//
// // add code
//
// import { createApp } from 'vue';
// import { createRouter, createWebHistory } from 'vue-router';
//
//
// const routes = [
//     { path: '/top', component: HelloWorld },
//     { path: '/graph', component: Graph },
// ];
//
// const router = createRouter({
//     history: createWebHistory(),
//     routes,
// });
//
// const app = createApp(App);
// app.use(router);
// app.mount('#app');
//
// // ---add code----
//
// Amplify.configure(amplifyconfig);
//
// const client = generateClient();
