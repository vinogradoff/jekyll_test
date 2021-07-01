(function () {
  const path = window.location.pathname

  function truncateTrailingSlashes() {
    const trailingSlashes = /\/{2,}$/
    const pathWithoutSlashes = path.match(trailingSlashes) && path.replace(trailingSlashes, '/')
    if (pathWithoutSlashes) {
      window.location = pathWithoutSlashes
    }
    return pathWithoutSlashes
  }

  function rememberLanguage() {
    const regex = /^\/(en|ru)\//
    const languageFromPath = path.match(regex) && path.replace(regex, "$1")
    if (languageFromPath) {
      localStorage.setItem('language', languageFromPath)
    }
    return languageFromPath
  }

  function redirectToLanguage() {
    const language = localStorage.getItem('language') || 'en'
    if (language === 'en' || language === 'ru') {
      window.location = '/' + language + path
    }
    else {
      localStorage.removeItem('language')
      window.location = '/' + 'en' + path
    }
  }

  truncateTrailingSlashes() || rememberLanguage() || redirectToLanguage()
}())