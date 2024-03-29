const SHA256 = require("crypto-js/sha256");
const Block = require("./Block.js")

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()]
    }
    createGenesisBlock() {
        return new Block(0, "01/01/2022", "Genesis Block", 0)
    }
    getPreviousBlock() {
        return this.chain[this.chain.length - 1]
    }
    addBlock(newBlock) {
        newBlock.previousHash = this.getPreviousBlock().hash
        newBlock.hash = newBlock.calculateHash()
        this.chain.push(newBlock)
    }
    getFullBlockchain() {
        return this.chain
    }
    getSingleBlock(index) {
        return this.chain[index]
    }
}

const myBlockchain = new Blockchain();
myBlockchain.addBlock(new Block(1, "4/12/2023", { msg: 'Send 3000 taytoCoin to Jube' }));
myBlockchain.addBlock(new Block(2, "2/20/2022", { msg: 'hello Jube!' }));
myBlockchain.addBlock(new Block(3, "6/10/2021", { msg: 'No more taytoCoins left' }));

const fullBlockchain = myBlockchain.getFullBlockchain()
const singleBlock = myBlockchain.getSingleBlock(1)['data']['msg']
console.log(JSON.stringify(singleBlock, null, 4));
console.log(JSON.stringify(fullBlockchain, null, 4));


