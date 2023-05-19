import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import 'dotenv/config'

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: process.env.GOERLI_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    local: {
      url: "http://localhost:8545",
      accounts: [process.env.LOCAL_PRIVATE_KEY as string],
    },
  },
}

export default config
