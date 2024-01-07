alert("hoge")
// ▼グラフの中身
var pieData = [
    {
        value: 100,            // 値
        color:"#F7464A",       // 色
        highlight: "#FF5A5E",  // マウスが載った際の色
        label: "りんご"        // ラベル
    },
    {
        value: 100,
        color: "#41C44E",
        highlight: "#6CD173",
        label: "メロン"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "みかん"
    },
    {
        value: 100,
        color: "#AA49B8",
        highlight: "#C583CF",
        label: "ぶどう"
    },
    {
        value: 30,
        color: "#4D5360",
        highlight: "#616774",
        label: "その他"
    }

];

// ▼上記のグラフを描画するための記述
window.onload = function () {
    var ctx = document.getElementById("graph-area").getContext("2d");
    window.myPie = new Chart(ctx).Pie(pieData);
};
// });