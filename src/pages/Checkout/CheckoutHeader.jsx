import "./CheckoutHeader.css";
export function CheckoutHeader() {
  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <a href="/" className="logo return-to-home-link">
            <div className="logo">
              Everything<span className="logo-highlight">Store</span>
            </div>
          </a>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <a className="return-to-home-link" href="/">
            3
          </a>
          )
        </div>

        <div className="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" />
        </div>
      </div>
    </div>
  );
}
