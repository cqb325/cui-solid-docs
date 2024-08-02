export function parseSectionFromURL(url) {
    const uri = new URL(url)
    const path = uri.pathname
    const pathParts = path.split('/')
    return pathParts[1]
}

export function getPathFromURL(url) {
    const uri = new URL(url)
    return uri.pathname
}

export function URLToAnchorPath(url, anchor) {
    const path = getPathFromURL(url)
    return `${path}#${anchor}`
}