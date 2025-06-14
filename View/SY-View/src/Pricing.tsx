function Pricing() {
  return (
    <div className="container Pricing-Container">
      <div className="Pricing-Header">
        <h1>Pricing</h1>;
      </div>
      <div className="container Prices-Container">
        <div className="Prices-Items">
          <h3 className="Pricing-Items-Header">Free</h3>
          <p className="Pricing-Items-Text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            dolore, architecto dolor itaque soluta consequatur consectetur at
            veritatis commodi deserunt quae exercitationem?
          </p>
          <button className="Pricing-Buttons btn btn-primary">Sign Up</button>
        </div>
        <div className="Prices-Items">
          <h3 className="Pricing-Items-Header">Standard</h3>
          <p className="Pricing-Items-Text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.at veritatis
            commodi deserunt quae exercitationem?
          </p>
          <button className="Pricing-Buttons btn btn-primary">Buy Now</button>
        </div>
        <div className="Prices-Items">
          <h3 className="Pricing-Items-Header"> Premium</h3>
          <p className="Pricing-Items-Text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            corporis maiores magnam ab est similique sunt. Eaque, ad placeat.
          </p>
          <button className="Pricing-Buttons btn btn-primary">Upgrade</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
