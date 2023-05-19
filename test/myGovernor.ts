import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { MyGovernor } from "../typechain-types"
import {ethers} from "hardhat"
import {expect} from "chai"

describe('MyGovernor', () => {
  let myGovernor: MyGovernor
  let deployer: SignerWithAddress
  let user1: SignerWithAddress
  let user2: SignerWithAddress

  before(async () => {
    ;[deployer, user1, user2] = await ethers.getSigners()
    const MyGovernorFactory = await ethers.getContractFactory('MyGovernor', deployer)
    myGovernor = await MyGovernorFactory.deploy()
    myGovernor.deployed()
  })
})
