## Contract Address: 0x0d8D59db1EB9A53FB531fe74d352638Bf956B69A
## Reference Page
[完整的Hardhat實踐教程](https://medium.com/my-blockchain-development-daily-journey/%E5%AE%8C%E6%95%B4%E7%9A%84hardhat%E5%AF%A6%E8%B8%90%E6%95%99%E7%A8%8B-a9b005aa4c12)
[Chatgpt Debug](https://chat.openai.com/chat)

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

```
npx hardhat test
```

The Output will be like...
```
Compiled 5 Solidity files successfully
  SimpleERC20
    ✔ Should deposit and withdraw tokens (2073ms)
  1 passing (2s)
```

### Steps 2
Compile the contracts, and we will get two directory 'artifacts' and 'cache'
```
npx hardhat compile
```

### Steps 3
Finally deplot the contract on network!
```
npx hardhat run deployments/deploy.js  --network goerli
```
the output will be as below
```
Deploying contract with account: 0x3d70807dEc399B49477Fe308c194390eA45CE13B
```

### Steps 4
```
npx hardhat verify --network <networkName> <contractAddress> <ConstructorArguments>
npx hardhat verify --network goerli 0x0d8D59db1EB9A53FB531fe74d352638Bf956B69A SimpleERC20 ETH
```
Sucessful message as below
```
The contract 0x0d8D59db1EB9A53FB531fe74d352638Bf956B69A has already been verified
```
