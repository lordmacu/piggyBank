const PiggyBank = artifacts.require("PiggyBank");

contract("PiggyBank", (accounts) => {
  before(async () => {
    this.piggyBank = await PiggyBank.deployed();
  });

  it("migrate deployed successfully", async () => {
    const address = await this.piggyBank.address;

    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
  });

  
  it("deposit created successfully", async () => {

    var time = parseInt(new Date().getTime() / 1000);
    const result = await this.piggyBank.deposit(1, time);
    const piggyEvent = result.logs[0].args;

  
    assert.equal(piggyEvent.value.toNumber(), 1);
    assert.equal(piggyEvent.date, time);
    assert.equal(piggyEvent.typeTransaction, 0);
  });

  it("withdraw created successfully", async () => {

    var time = parseInt(new Date().getTime() / 1000);
    const result = await this.piggyBank.withdraw(1, time);
 
    assert.equal(this.piggyBank.transactions, 0);
 
  });
  
});
