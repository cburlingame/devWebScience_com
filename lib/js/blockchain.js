// pull in sha256 as js does not have it natively
const SHA256 = require("crypto-js/sha256"); 

// create the block
class Block 
{ 
  constructor(index, timestamp, data, previousHash = '') 
  { 
    this.index = index; 
    this.previousHash = previousHash; 
    this.timestamp = timestamp; 
    this.data = data; 
    this.hash = this.calculateHash(); 
  } 

  calculateHash() 
  { 
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString(); 
  } 
}

// create the blockchain
class Blockchain
{
    //Section 1 Genesis block creation
    constructor() 
{ 
    this.chain = [this.createGenesisBlock()]; 
} 

createGenesisBlock() 
{
    return new Block(0, "01/01/2017", "Genesis block", "0"); 
} 

//section 2 adding new blocks
getLatestBlock() 
{ 
    return this.chain[this.chain.length - 1]; 
} 

addBlock(newBlock) { 
    newBlock.previousHash = this.getLatestBlock().hash; 
    newBlock.hash = newBlock.calculateHash(); 
    this.chain.push(newBlock); 
} 

//section 3 validating the chain
isChainValid() 
{ 
    for (let i = 1; i < this.chain.length; i++)
    { 
        const currentBlock = this.chain[i]; 
        const previousBlock = this.chain[i - 1]; 

        if (currentBlock.hash !== currentBlock.calculateHash()) { 
            return false; 
        } 

        if (currentBlock.previousHash !== previousBlock.hash) 
        { 
            return false; 
        } 
    } 
    
    return true; 
} 
}

// create the genesis block
createGenesisBlock()
{
    return new Block(0, “01/01/2017”, “Genesis block”, “0”);
}

// add block to chain
getLatestBlock() 
{ 
    return this.chain[this.chain.length - 1]; 
} 

// Now that we have determined the latest block, let’s see how we are going to add new blocks.

addBlock(newBlock) { 
    newBlock.previousHash = this.getLatestBlock().hash; 
    newBlock.hash = newBlock.calculateHash(); 
    this.chain.push(newBlock); 
}

// validate the chain
for (let i = 1; i < this.chain.length; i++)
{ 
    const currentBlock = this.chain[i]; 
    const previousBlock = this.chain[i - 1]; 

    // In this part of the code we are defining two terms, current block and previous block.  And now we are simply going to find the hash of these two values.
    if (currentBlock.hash !== currentBlock.calculateHash()) { 
        return false; 
    } 

    if (currentBlock.previousHash !== previousBlock.hash) 
    { 
        return false; 
    } 
} 
return true; 
} 

// example using the chain
let cbCoin = new Blockchain();
cbCoin.addBlock(new Block(1, “20/07/2018”, { amount: 3 }));
cbCoin.addBlock(new Block(2, “20/07/2018”, { amount: 10 }));
