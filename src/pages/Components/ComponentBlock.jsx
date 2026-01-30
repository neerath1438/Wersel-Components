import { useEffect, useMemo, useState } from 'react'
import { getRawCode } from './codeRegistry'
import { CodeArea } from '../../components'

const TABS = {
  PREVIEW: 'preview',
  CODE: 'code'
}

const CODE_TABS = {
  JSX: 'jsx',
  CSS: 'css'
}

function copyToClipboard(text) {
  return new Promise((resolve) => {
    if (!text) {
      resolve(false)
      return
    }
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => resolve(true))
        .catch(() => resolve(false))
      return
    }
    // Fallback
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.left = '-9999px'
    document.body.appendChild(ta)
    ta.select()
    try {
      const success = document.execCommand('copy')
      document.body.removeChild(ta)
      resolve(success)
    } catch {
      document.body.removeChild(ta)
      resolve(false)
    }
  })
}

export default function ComponentBlock({
  title,
  description,
  preview,
  code
}) {
  const [activeTab, setActiveTab] = useState(TABS.PREVIEW)
  const [activeCodeTab, setActiveCodeTab] = useState(CODE_TABS.JSX)
  const [copied, setCopied] = useState(false)

  const jsxCode = useMemo(() => getRawCode(code?.jsxPath), [code?.jsxPath])
  const cssCode = useMemo(() => getRawCode(code?.cssPath), [code?.cssPath])

  const displayedCode = activeCodeTab === CODE_TABS.CSS ? cssCode : jsxCode

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [copied])

  const handleCopy = async () => {
    if (!displayedCode) return
    const success = await copyToClipboard(displayedCode)
    if (success) {
      setCopied(true)
    }
  }

  return (
    <div className="wui-cb-frame">
      <div className="wui-cb-crown">
        <div className="wui-cb-herald">{title}</div>
        {description ? <div className="wui-cb-voice">{description}</div> : null}
      </div>

      <div className="wui-cb-orbit">
        <button
          type="button"
          className={`wui-cb-trigger ${activeTab === TABS.PREVIEW ? 'active' : ''}`}
          onClick={() => setActiveTab(TABS.PREVIEW)}
        >
          Preview
        </button>
        <button
          type="button"
          className={`wui-cb-trigger ${activeTab === TABS.CODE ? 'active' : ''}`}
          onClick={() => setActiveTab(TABS.CODE)}
        >
          Code
        </button>
      </div>

      {activeTab === TABS.PREVIEW ? (
        <div className="wui-cb-theater">
          {preview}
        </div>
      ) : (
        <div className="wui-cb-void">
          <div className="wui-cb-apex">
            <div className="wui-cb-void-stack">
              <button
                type="button"
                className={`wui-cb-void-trigger ${activeCodeTab === CODE_TABS.JSX ? 'active' : ''}`}
                onClick={() => setActiveCodeTab(CODE_TABS.JSX)}
                disabled={!jsxCode}
                title={jsxCode ? 'Show JSX' : 'JSX source not linked'}
              >
                JSX
              </button>
              <button
                type="button"
                className={`wui-cb-void-trigger ${activeCodeTab === CODE_TABS.CSS ? 'active' : ''}`}
                onClick={() => setActiveCodeTab(CODE_TABS.CSS)}
                disabled={!cssCode}
                title={cssCode ? 'Show CSS' : 'CSS source not linked'}
              >
                CSS
              </button>
            </div>

            <button
              type="button"
              className={`wui-cb-copy ${copied ? 'copied' : ''}`}
              onClick={handleCopy}
              disabled={!displayedCode}
              title={copied ? 'Copied!' : 'Copy'}
            >
              {copied ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5L6 12L2.5 8.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 4.5H3.5C2.67157 4.5 2 5.17157 2 6V12.5C2 13.3284 2.67157 14 3.5 14H10C10.8284 14 11.5 13.3284 11.5 12.5V10.5M11.5 4.5H13.5C14.3284 4.5 15 5.17157 15 6V12.5C15 13.3284 14.3284 14 13.5 14H7C6.17157 14 5.5 13.3284 5.5 12.5V10.5M11.5 4.5V2C11.5 1.17157 10.8284 0.5 10 0.5H6C5.17157 0.5 4.5 1.17157 4.5 2V4.5M11.5 4.5H4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>


          <div style={{ padding: '0.5rem' }}>
            <CodeArea
              code={displayedCode}
              language={activeCodeTab === CODE_TABS.JSX ? 'JSX' : 'CSS'}
              filename={activeCodeTab === CODE_TABS.JSX ? `${title.replace(/\s+/g, '')}.jsx` : `${title.replace(/\s+/g, '')}.css`}
            />
          </div>
        </div>
      )}
    </div>
  )
}


