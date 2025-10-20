import React, { useState } from 'react'
import QRCode from 'qrcode.react'

export default function WalletCard({ wallet }) {
  const hasNetworks = Array.isArray(wallet.networks) && wallet.networks.length > 0
  const [selectedIndex, setSelectedIndex] = useState(0)

  const currentNetwork = hasNetworks ? wallet.networks[selectedIndex] : null
  const currentAddress = hasNetworks ? currentNetwork.address : wallet.address

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(currentAddress)
      alert(`${wallet.name} address copied:\n${currentAddress}`)
    } catch (e) {
      prompt(`Copy the address for ${wallet.name}:`, currentAddress)
    }
  }

  return (
    <div className="card">
      <div className="card-top">
        <div className="logo">
          {wallet.logo ? (
            <img src={wallet.logo} alt={wallet.name} className="logo-img" />
          ) : (
            wallet.name.charAt(0)
          )}
        </div>
        <div>
          <div className="title">{wallet.name}</div>
          {hasNetworks && (
            <div className="network-row">
              <label className="network-label">Network:</label>
              <select value={selectedIndex} onChange={(e) => setSelectedIndex(Number(e.target.value))}>
                {wallet.networks.map((n, idx) => (
                  <option key={idx} value={idx}>{n.name}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {hasNetworks && currentNetwork.icon && (
        <div className="network-icon tooltip">
          <img src={currentNetwork.icon} alt={currentNetwork.name} className="network-logo" />
          <span className="tooltiptext">Network: {currentNetwork.name}</span>
        </div>
      )}

      <div className="address tooltip">
        {currentAddress}
        <span className="tooltiptext">Address: {currentAddress}</span>
      </div>

      <div className="qr-code tooltip">
        <QRCode value={currentAddress} size={120} />
        <span className="tooltiptext">Scan to pay: {currentNetwork ? currentNetwork.name : wallet.name}</span>
      </div>

      <div className="actions tooltip">
        <button onClick={copyAddress}>Copy / Pay</button>
        <span className="tooltiptext">Copy address: {currentAddress}</span>
      </div>
    </div>
  )
}
