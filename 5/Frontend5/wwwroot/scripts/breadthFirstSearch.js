"use strict"

// class Graph
function Graph() {
    this.numberOfVertices;
    this.adjacencyMatrix;

    this.InputNumberOfVertices = function (newNumberOfVertices) {
        if (newNumberOfVertices >= 2) {
            this.numberOfVertices = newNumberOfVertices;
        }
        else {
            console.log("You need more");
        }
    }

    this.InputAdjacencyMatrix = function (newAdjacencyMatrix) {
        if (newAdjacencyMatrix.length == this.numberOfVertices) {
            let matrixIsCorrect = true;

            for (let i = 0; i < this.numberOfVertices; i++) {
                if (newAdjacencyMatrix[i].length != this.numberOfVertices) {
                    matrixIsCorrect = false;
                    break;
                }
            }

            if (matrixIsCorrect) {
                this.adjacencyMatrix = newAdjacencyMatrix;
            }
            else {
                console.log("Matrix is incorrect");
            }
        }
        else {
            console.log("Matrix is incorrect");
        }
    }

    this.Search = function (initialVertex, finalVertex) {
        if (initialVertex >= 1 &&
            initialVertex <= this.adjacencyMatrix.length &&
            finalVertex >= 1 &&
            finalVertex <= this.adjacencyMatrix.length) {

            let currentVertex;
            let pathExists = false;
            let ancestor = [];
            let distance = [];
            let queue = [];
            let path = [];
            let used = [];
            queue.push(initialVertex);
            distance[initialVertex - 1] = 0;

            while (queue.length > 0) {
                currentVertex = queue[0];
                queue.shift();
                used[currentVertex - 1] = true;

                if (currentVertex == finalVertex) {
                    pathExists = true;
                    break;
                }
                else {
                    for (let i = 0; i < this.numberOfVertices; i++) {
                        if (used[i] != true) {
                            queue.push(i + 1);
                            distance[i] = distance[currentVertex - 1] + 1;
                            ancestor[i] = currentVertex;
                        }
                    }
                }
            }

            if (pathExists) {
                console.log(distance[finalVertex - 1]);

                if (distance[finalVertex - 1] > 0) {
                    path.push(finalVertex);
                    for (let i = ancestor[finalVertex - 1]; i != initialVertex; i = ancestor[i - 1]) {
                        path.push(i);
                    }
                    path.push(initialVertex);

                    for (let i = this.numberOfVertices - 1; i >= 0; i--) {
                        console.log(path[i]);
                    }
                }
            }
            else {
                console.log("You shall not pass");
            }
        }
        else {
            console.log("You shall not pass");
        }
    }
}