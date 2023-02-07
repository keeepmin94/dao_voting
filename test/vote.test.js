const daovote = artifacts.require("B2");

contract(" ", async ({ deployer, user1, user2 }) => {
  let vote;
  before(async () => {
    vote = await daovote.new();
  });

  describe("user fn test", async () => {
    it("setUser test ", async () => {
      await vote.setUser("user2");
    });

    it("getUser test", async () => {
      const res = await vote.getUser();
      assert.equal(res.toString(), { name: "user2", length: 0 });
    });

    // it("getUser test_name", async () => {
    //   const res = await vote.getUser();
    //   assert.equal(res[0], "user2");
    // });

    // it("getUser test_length", async () => {
    //   const res = await vote.getUser();
    //   assert.equal(res[1], 0);
    // });
  });

  describe("poll fn test", async () => {
    it("setPoll test", async () => {
      await vote.setPoll("Hello", "world");
    });
    it("getPoll test", async () => {
      const res = await vote.getPoll("Hello");
      assert.equal(res.title, "Hello");
      assert.equal(res.contents, "world");
    });
  });

  describe("voting fn test", async () => {
    it("vote test", async () => {
      await vote.vote("Hello", true);
    });
    it("vote result", async () => {
      const res = await vote.getPoll("Hello");
      assert.equal(res.agree, 1);
    });
  });
});
//D:\dao\daotest>truffle test
