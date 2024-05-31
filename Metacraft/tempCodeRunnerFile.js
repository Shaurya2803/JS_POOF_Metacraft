NFT_Pool = []

function mintNFT(name,date,price){
    const NFT = {
        name : name,
        date : date,
        price : price
    }
    NFT_Pool.push(NFT)
}

function listNFTs(){
    for (let i =0; i<NFT_Pool.length; i++){
        console.log(`\n ID ${i + 1}:`);
        console.log(`Name: ${NFT_Pool[i].name}`);
        console.log(`Date: ${NFT_Pool[i].date}`);
        console.log(`Price ${NFT_Pool[i].price}`);
    }
}

function getTotalSupply(){
    console.log("\n Total NFTS minted are "+ NFT_Pool.length);
}


mintNFT("Vishwajeet","2000-12-12",5000)
mintNFT("Happy","2002-02-12",6000)

listNFTs()

getTotalSupply()