// Centralized raw-code loader for the Components showcase page.
// Vite supports loading file contents as strings via import.meta.glob + as: 'raw'.

const rawModules = import.meta.glob('../../components/**/*.{jsx,css}', {
  eager: true,
  as: 'raw'
})

/**
 * @param {string} path - Path matching the glob keys, e.g. "../../components/Button/Button.jsx"
 * @returns {string | null}
 */
export function getRawCode(path) {
  if (!path) return null
  return rawModules[path] ?? null
}


