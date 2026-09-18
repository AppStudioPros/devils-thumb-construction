'use client'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('dtc-cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => { localStorage.setItem('dtc-cookie-consent', 'accepted'); setVisible(false) }
  const decline = () => { localStorage.setItem('dtc-cookie-consent', 'declined'); setVisible(false) }

  if (!visible) return null

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 300, background: '#13251e', borderTop: '3px solid #e09f18', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0, flex: 1, minWidth: 200 }}>
        We use essential cookies to keep this site working.{' '}
        <a href="/cookie-policy" style={{ color: '#e09f18', textDecoration: 'underline' }}>Learn more</a>
      </p>
      <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
        <button onClick={decline} style={{ padding: '8px 18px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.25)', background: 'transparent', color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', cursor: 'pointer', fontWeight: 600 }}>
          Decline
        </button>
        <button onClick={accept} style={{ padding: '8px 18px', borderRadius: 6, border: 'none', background: '#e09f18', color: '#13251e', fontSize: '0.82rem', cursor: 'pointer', fontWeight: 700 }}>
          Accept
        </button>
      </div>
    </div>
  )
}
