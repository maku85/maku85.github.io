---
title: Node.js NFTs
description: An NFT (non-fungible token) is a fascinating new technology that represents ownership of an asset digitally.
# img: /articles/images/node-stream.jpeg
img: https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80
tags: nodejs
published: true
---

Fungibility is essentially the ability to exchange an item for a similar item of the same value. On the other hand, non-fungible items do not have the same value in comparison to each other, they are inherently unique and cannot be considered equivalent to any other item.

A blockchain is a public database or digital ledger that keeps track of transactions. It is replicated across several computer systems that are part of the chain.

Minting is the process of creating something for the first time, or in our case, publishing a unique instance of our ERC721 token on the blockchain. ERC-721 is the standard for creating an NFT, and an ERC721 token is a unique representation of digital content published to the Ethereum blockchain. No two tokens are ever the same, so each time you mint a new token with the same block of code, a new address will be generated.

Data stored on the blockchain needs to be processed, verified, and replicated across multiple networks, making storing data on the blockchain very expensive. Uploading an entire image to the blockchain is not advisable, and you can store only the metadata for the NFT instead.

Although the URL for an NFT can be stored on the blockchain, the link may go offline at any time. Additionally, anyone who has access to the content at a URL may change it.

IPFS is a distributed system for storing and accessing files that uses content addressing to tackle the problem above. Any piece of data that is uploaded to IPFS will be issued a unique content identifier (CID). Once a CID is generated for a piece of data, that CID will always represent that data, and the data cannot be changed.

## Avalanche

Step to follow:

- create a non-fungible asset family and group
- mint units of an NFT to the group
- fetch UTXOs for an address. We then converted the CB58 encoded UTXO to hex and decomposed it to its individual components
- transfer NFTs between addresses

Each NFT belongs to a family, which has a name and a symbol. Each family is composed of groups. The number of groups in a family is specified when the family is created. Our NFT will exist on the X-Chain, so to create our NFT family we’ll call `avm.createNFTAsset`, which is a method of the X-Chain’s API.

Performing a transaction on the X-Chain requires a transaction fee paid in AVAX. username and password denote the user paying the fee.

In addition to creating an NFT family, AvalancheGo’s avm.createNFTAsset also creates a group for each of the minterSets, which are passed in.

Second, take note of the assetID which is returned in the response. This is the assetID of the newly created NFT family, and you’ll need it later to issue NFTs.

You may be wondering why we specify sets of addresses that can mint more units of the asset rather than a single address. Here's why:

- Security: if only one address can mint more of the asset, and the private key for that address is lost, no more units can ever be minted. Similarly, if only one address can mint more of the asset, nothing stops the holder of that address from unilaterally minting as much as they want.
- Flexibility: it’s nice to be able to encode logic like, "Alice can unilaterally mint more units of this asset, or 2 of Dinesh, Ellin, and Jamie can together mint more."

Now that we have an NFT family and a group for the single MinterSet we’re able to create NFTs belonging to this group. To do that we call `avm.mintNFT`.

Now, you can send the NFT to anyone. To do that, use AvalancheGo’s `avm.sendNFT` API method.
