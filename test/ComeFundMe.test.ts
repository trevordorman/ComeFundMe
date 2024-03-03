// Start - Support direct Mocha run & debug
import 'hardhat'
import '@nomiclabs/hardhat-ethers'
// End - Support direct Mocha run & debug

import chai, {expect} from 'chai'
import {before} from 'mocha'
import {solidity} from 'ethereum-waffle'
import {deployContract, signer} from './framework/contracts'
import {SignerWithAddress} from '@nomiclabs/hardhat-ethers/signers'
import {successfulTransaction} from './framework/transaction'
import {ComeFundMe} from '../typechain-types'
import {ethers} from 'ethers'
import exp from 'constants'

chai.use(solidity)

describe ('ComeFundMe test suite', () => {
    let contract: ComeFundMe
    let s0: SignerWithAddress, s1: SignerWithAddress

    before (async () => {
        s0 = await signer(0)
        s1 = await signer(1)
    })

    beforeEach(async () => {
        contract = await deployContract<ComeFundMe>('ComeFundMe')
    })

    describe ("startCampaign()", () => {
        const title = 'Kanye West therapy'
        const description = 'Give Kanye the help he so desperately needs'
        it('should start a campaign and save the input properly', async () => {
            await contract.connect(s0).startCampaign(title, description)
            const campaignId = await contract.getCampaignId(
                    s0.address, 
                 title, 
                 description
             )
            const campaign = await contract.getCampaign(campaignId)
            expect(campaign.isAlive).to.be.true
            expect(campaign.initiator).to.equal(s0.address)
            expect(campaign.fundsRaised).to.equal(0)
            expect(campaign.title).to.equal(title)
            expect(campaign.description).to.equal(description)
        })
        it('should start a campaign and emit approriate events', async() => {
            const campaignId = await contract.getCampaignId(
                s0.address, 
             title, 
             description
            )
            const tx = await contract.connect(s0).startCampaign(title, description)
                await expect(tx)
                .to.emit(contract, "CampaignStarted")
                .withArgs(campaignId)
        })
    })
    describe ("endCampaign()", () => {
        const title = 'Kanye West therapy'
        const description = 'Give Kanye the help he so desperately needs'
        it('should end campaign and send funds to initiator', async() => {
           const s0StartBalance = await s0.getBalance()
            await contract.connect(s0).startCampaign(title, description)
            const campaignId = await contract.getCampaignId(s0.address, title, description)
            const donation = ethers.utils.parseEther('0.1')
            const receipt = await successfulTransaction(contract.connect(s1).donateToCampaign(campaignId, {value: donation}))
            const endReceipt = await successfulTransaction(contract.connect(s0).endCampaign(campaignId))
            const endBalance = s0.getBalance()
            console.log({receipt, endReceipt})
            
            const campaign = await contract.getCampaign(campaignId)
            const fundsRaised = campaign.fundsRaised
            console.log({fundsRaised})
            expect(campaign.isAlive).to.be.false
            expect(endBalance).to.equal(fundsRaised.add(s0StartBalance).sub(endReceipt.gasUsed.mul(endReceipt.effectiveGasPrice)))
        })
        it('should only allow initiator to end campaign', async () => {
            await contract.connect(s0).startCampaign(title,description)
            const campaignId = await contract.getCampaignId(s0.address, title, description)
            await expect(contract.connect(s1).endCampaign(campaignId)).to.be.revertedWith('Not campaign owner')
        })
    })
    describe ('donateToCampaign()', () => {
        const title = 'Kanye West therapy'
        const description = 'Give Kanye the help he so desperately needs'

        it('should require the campaign to be active to accept donations', async() =>{
            await contract.connect(s0).startCampaign(title,description)
            const campaignId = await contract.getCampaignId(s0.address, title, description)
            await contract.connect(s0).togglePause()
            await expect (contract.connect(s1).donateToCampaign(campaignId, {value: ethers.utils.parseEther('0.01')})).to.be.reverted
        })
        it('should donate to campaign', async() => {
            await contract.connect(s0).startCampaign(title,description)
            const campaignId = await contract.getCampaignId(s0.address, title, description)
            const campaign = await contract.getCampaign(campaignId)
            const initialFundsRaised = campaign.fundsRaised
            const donation = ethers.utils.parseEther('0.1')
            const receipt = await successfulTransaction(contract.connect(s1).donateToCampaign(campaignId, {value: donation}))
            const campaignTotal = await contract.getCampaign(campaignId)
            expect (campaignTotal.fundsRaised).to.be.equal(initialFundsRaised.add(donation))
        })
    })
    describe ('functional tests', () => {
        const title = 'Kanye West therapy'
        const description = 'Give Kanye the help he so desperately needs'
        
        it('should complete a normal fundraising process', async () => {
            const campaignId = await contract.getCampaignId(s0.address, title, description)
            const start = await contract.connect(s0).startCampaign(title, description)
            await expect (start).to.emit(contract, 'CampaignStarted')
            const donation = ethers.utils.parseEther('0.01')
            const donate = contract.connect(s1).donateToCampaign(campaignId, {value: donation})
            await expect(donate).to.emit(contract, 'CampaignDonationReceived')
            const end = contract.connect(s0).endCampaign(campaignId)
            await expect(end).to.emit(contract, 'CampaignEnded')
        })
        it('should stop the same user from creating identical campaigns', async() => {
            await contract.connect(s0).startCampaign(title, description)
            await expect(
                contract.connect(s0).startCampaign(title, description))
            .to.be.revertedWith('Campaign exists')
        })
    })
})