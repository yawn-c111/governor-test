import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { MyToken } from "../typechain-types";
import { ethers } from "hardhat";
import { expect } from "chai";

describe('MyToken', () => {
  let myToken: MyToken
  let deployer: SignerWithAddress
  let user1: SignerWithAddress
  let user2: SignerWithAddress

  before(async () => {
    ;[deployer, user1, user2] = await ethers.getSigners()
    const MyTokenFactory = await ethers.getContractFactory('MyToken', deployer)
    myToken = await MyTokenFactory.deploy()
    myToken.deployed()
  })

  it("deploy", async () => {

  })

  it("mint", async () => {
    expect(await myToken.mint(user1.address, ethers.utils.parseEther('100'))).not.to.be.reverted
  })

  it("burn", async () => {
    expect(await myToken.burn(user1.address, ethers.utils.parseEther('100'))).not.to.be.reverted
  })
})