import React, { useState, useEffect } from 'react'
import WalletCard from './components/WalletCard'

const wallets = [
  {
    name: "BNB",
    type: "crypto",
    logo: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
    networks: [
      { name: "BEP20 (BSC)", icon: "https://cryptologos.cc/logos/binance-smart-chain-bnb-logo.png", address: "EnterYourBNBBEP20AddressHere" },
      { name: "BNB Smart Chain", icon: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png", address: "EnterYourBNBChainAddressHere" }
    ]
  },
  {
    name: "Bitcoin",
    type: "crypto",
    logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    networks: [
      { name: "BTC Mainnet", icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", address: "EnterYourBitcoinAddressHere" }
    ]
  },
  {
    name: "Litecoin",
    type: "crypto",
    logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
    networks: [
      { name: "LTC Mainnet", icon: "https://cryptologos.cc/logos/litecoin-ltc-logo.png", address: "EnterYourLitecoinAddressHere" }
    ]
  },
  {
    name: "USDT (Tether)",
    type: "crypto",
    logo: "https://cryptologos.cc/logos/tether-usdt-logo.png",
    networks: [
      { name: "ERC20 (Ethereum)", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png", address: "EnterYourUSDTERC20AddressHere" },
      { name: "TRC20 (Tron)", icon: "https://cryptologos.cc/logos/tron-trx-logo.png", address: "EnterYourUSDTTRC20AddressHere" },
      { name: "BEP20 (BSC)", icon: "https://cryptologos.cc/logos/binance-smart-chain-bnb-logo.png", address: "EnterYourUSDTBEP20AddressHere" },
      { name: "SOL (Solana)", icon: "https://cryptologos.cc/logos/solana-sol-logo.png", address: "EnterYourUSDTSolanaAddressHere" }
    ]
  },
  {
    name: "Google Pay",
    type: "upi",
    logo: "https://seeklogo.com/images/G/google-pay-logo-9E2C4E8D1F-seeklogo.com.png",
    address: "EnterYourGPayUPIHere"
  },
  {
    name: "BHIM",
    type: "upi",
    logo: "",
    address: "EnterYourBHIMUPIHere"
  },
  {
    name: "PhonePe",
    type: "upi",
    logo: "",
    address: "EnterYourPhonePeUPIHere"
  },
  {
    name: "Payeer",
    type: "payeer",
    logo: "",
    address: "P1234567 (EnterYourPayeerID)"
  }
]

export default function App() {
  // Detect system dark mode
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [darkMode, setDarkMode] = useState(prefersDark)

  // Apply theme to <html> data attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div className="app-root">
      <header className="hero">
        <h1>Support Jar</h1>
        <p>Tip or support using any of the options below — choose network, then copy or scan QR.</p>
        <p className="sub">Deployed at: https://RavenGod1.github.io/support-jar/</p>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>

      <main className="grid">
        {wallets.map((wallet, i) => (
          <WalletCard key={i} wallet={wallet} />
        ))}
      </main>

      <footer className="footer">
        Made with ♥ by RavenGod1 — edit <code>src/App.jsx</code> to update addresses or add networks.
      </footer>
    </div>
  )
}
