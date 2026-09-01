import { useMemo, useState } from 'react'
import { operatingModules } from './modules'
import './App.css'

function App() {
  const [selectedId, setSelectedId] = useState(operatingModules[0].id)
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return operatingModules
    return operatingModules.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.tagline.toLowerCase().includes(q) ||
        m.capabilities.some((c) => c.toLowerCase().includes(q)),
    )
  }, [query])

  const selected =
    operatingModules.find((m) => m.id === selectedId) ?? operatingModules[0]

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="logo" aria-hidden="true">
            ◆
          </span>
          <div>
            <h1>TeamOS</h1>
            <p className="subtitle">The operating system for how your team thinks</p>
          </div>
        </div>
        <div className="status">
          <span className="dot" aria-hidden="true" />
          {operatingModules.length} modules online
        </div>
      </header>

      <div className="search">
        <input
          type="search"
          value={query}
          placeholder="Search modules and capabilities…"
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search modules"
        />
      </div>

      <main className="layout">
        <section className="grid" aria-label="Operating modules">
          {filtered.map((module) => (
            <button
              key={module.id}
              type="button"
              className={
                'card' + (module.id === selectedId ? ' card--active' : '')
              }
              style={{ ['--accent' as string]: module.accent }}
              onClick={() => setSelectedId(module.id)}
            >
              <span className="card__badge" aria-hidden="true" />
              <h2>{module.name}</h2>
              <p>{module.tagline}</p>
            </button>
          ))}
          {filtered.length === 0 && (
            <p className="empty">No modules match “{query}”.</p>
          )}
        </section>

        <aside
          className="detail"
          style={{ ['--accent' as string]: selected.accent }}
        >
          <span className="detail__kicker">Module</span>
          <h2>{selected.name}</h2>
          <p className="detail__tagline">{selected.tagline}</p>
          <p className="detail__body">{selected.description}</p>
          <h3>Capabilities</h3>
          <ul>
            {selected.capabilities.map((cap) => (
              <li key={cap}>{cap}</li>
            ))}
          </ul>
        </aside>
      </main>

      <footer className="footer">
        <span>TeamOS · Cloud Agent development environment</span>
      </footer>
    </div>
  )
}

export default App
