class Graph {
    constructor(array){
        let nodes = {};
        array.forEach(function(element){
            if(!nodes[element[0]]){
                nodes[element[0]] = [];
            }
            if(!nodes[element[1]]){
                nodes[element[1]] = [];
            }

            nodes[element[0]][element[1]] = true;
            nodes[element[1]][element[0]] = true;

        });
        this.nodes = nodes;
    }
    DFS(rootNode){
        let checkPoint = [];
        let graph = this.nodes;
        function recurse(node) {
            console.log(node);
            checkPoint[node] = true;
            for(let next in graph[node]) {
                if (!checkPoint[next]) recurse(next);
            }
        }
        recurse(rootNode);
    }
    BFS(rootNode){
        let checkPoint = [];
        let queue = [];
        let graph = this.nodes;
        queue.push(rootNode);

        while (queue.length > 0) {
            let node = queue.shift();
            console.log(node);
            checkPoint[node] = true;

            for (let next in graph[node]){
                if(!checkPoint[next]) queue.push(next);
            }
        }
    }
}

let test = new Graph([[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]);
test.DFS(0);
test.BFS(0);