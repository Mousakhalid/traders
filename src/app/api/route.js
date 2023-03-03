const Alpaca = require("@alpacahq/alpaca-trade-api");
const options = {
  keyId: "CK61M4DHQ8262AFHKG4L",
  secretKey: "Rmv2BcGwbebemMoWXPQXtTQ5y7VNhzTtUnS7jiD8",
  paper: true,
};
const alpaca = new Alpaca(options);
alpaca.getAccount().then((account) => {
  console.log("Current Account:", account);
});
