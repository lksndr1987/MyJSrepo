class Graph {
    constructor(array) {
        let nodes = {};
        array.forEach(function (element) {
            if (!nodes[element[0]]) {
                nodes[element[0]] = [];
            }
            if (!nodes[element[1]]) {
                nodes[element[1]] = [];
            }

            nodes[element[0]][element[1]] = element[2];
            nodes[element[1]][element[0]] = element[2];

        });
        this.nodes = nodes;
    }
    FindShortestPath(nodeStart, nodeEnd){
        let nodeArray = {};
        let node = nodeStart;
        let graph = this.nodes;
        nodeArray[node] = { weight : 0, prev : null, finish : false};
        while (node != null){
            for (let next in graph[node]){
                let new_weight = nodeArray[node].weight + graph[node][next];
                if(!nodeArray || nodeArray[node].weight > new_weight){
                    nodeArray[next] = {weight: new_weight, prev: node}
                }
            }
            nodeArray[node].finish = true;

            node = null;
            let min = Infinity;
            for(let next in nodeArray){
                if(!nodeArray[next].finish && nodeArray[next].weight < min){
                    node = next;
                    min = nodeArray[next].weight;
                }
            }
        }
        if(!nodeArray[nodeEnd]){
            return "path from " + nodeStart + " to " + nodeEnd + " not found";
        }

        let ss = "" + nodeEnd + "  =  " + nodeArray[nodeEnd].weight;
        node = nodeArray[nodeEnd].prev
        while (node != null) {
            ss = "" + node + " -> " + ss;
            node = nodeArray[node].prev;
        }
        return ss;


    }

}
let graph = new Graph( [[0, 3, 5], [1, 3, 11], [2, 3, 56], [4, 3, 77], [5, 4, 89]] );
console.log(graph.FindShortestPath(3, 3));