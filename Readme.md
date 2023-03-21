## Contract Address: 0x6bc7620D1C78cc2068Fd541a95a65a7045ecB9ce
## Reference Page
#### [完整的Hardhat實踐教程](https://medium.com/my-blockchain-development-daily-journey/%E5%AE%8C%E6%95%B4%E7%9A%84hardhat%E5%AF%A6%E8%B8%90%E6%95%99%E7%A8%8B-a9b005aa4c12)
#### [Chatgpt Debug](https://chat.openai.com/chat)
#### [Hello World Smart Contract]([https://chat.openai.com/chat](https://docs.alchemy.com/docs/hello-world-smart-contract))

## Docker ENV.

```
docker pull node
docker run -it --name walletCreate node:latest
```

#Edit the configuration
```
mv .env.sample .env
vi .env
```
update the key needed in the file!

## Install the package
```
npm init -y
npm install --save-dev hardhat
npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
npm install dotenv
npm install --save-dev @nomiclabs/hardhat-etherscan
```

## Steps to using the code

Find the test diretory and check the test file.


### Steps 1
Compile the contracts, and we will get two directory 'artifacts' and 'cache'
```
npx hardhat compile
```

### Steps 2
Finally deplot the contract on network!
```
npx hardhat run deployments/deploy.js  --network goerli
```
the output will be as below
```
Deploying contract with account: 0x3d70807dEc399B49477Fe308c194390eA45CE13B
```

### Steps 3
```
npx hardhat verify --network <networkName> <contractAddress> <ConstructorArguments>
npx hardhat verify --network goerli 0x6bc7620D1C78cc2068Fd541a95a65a7045ecB9ce SimpleERC20 ETH
```
Sucessful message as below
```
The contract 0x6bc7620D1C78cc2068Fd541a95a65a7045ecB9ce has already been verified
```
