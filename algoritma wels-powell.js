function vertices() {
    this.neighbour = null;
    this.colour = null;
}
var nodes = {
    a: ['b', 'c', 'd', 'e', 'g', 'h', 'k'],
    b: ['a', 'f', 'i', 'j', 'k'],
    c: ['d', 'g', 'h', 'e'],
    d: ['c', 'e', 'a', 'b'],
    e: ['k', 'd', 'a', 'c'],
    f: ['g', 'i', 'j', 'b'],
    g: ['f', 'h', 'c'],
    h: ['g', 'a', 'c'],
    i: ['j', 'b', 'f'],
    j: ['b', 'i', 'f'],
    k: ['b', 'a', 'e']
};

function welsh_powell(nodes) {
    let current_colour = 1;
    let colouring = {};
    let warna_node = {
        // a : 1,
        // b : 2
    };
    // Loop setiap node
    Object.keys(nodes).forEach((node) => {
        let neighbours = nodes[node];
        let isNodeNotColoured = (warna_node[node] === undefined) // True = kosong

        let isColouringSomething = false;

        if (isNodeNotColoured == true) {
            warna_node[node] = current_colour;
            isColouringSomething = true;
        }
        // cek semua node
        Object.keys(nodes).forEach((nodeUntukDicek) => {
            let isInsideNeighbour = neighbours.includes(nodeUntukDicek)
            let isSameWithNode = nodeUntukDicek == node
            let isNode2NotColoured = warna_node[nodeUntukDicek] === undefined
            let isSubNodeHasColour = false
            // Check is this neighbour has coloured or not
            nodes[nodeUntukDicek].forEach(subNeighbour => {
                if (warna_node[subNeighbour] === current_colour) {
                    isSubNodeHasColour = true
                }
            });
            if (isNodeNotColoured === true &&
                isNode2NotColoured === true &&
                isInsideNeighbour === false &&
                isSameWithNode === false &&
                isSubNodeHasColour === false) {
                warna_node[nodeUntukDicek] = current_colour;
                isColouringSomething = true;
            }
        })
        if (isColouringSomething) {
            current_colour++;
        }
    })

    console.log(warna_node);
}

welsh_powell(nodes);