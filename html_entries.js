import path from 'path'
import fs from 'fs'

export function htmlEntries() {
    const root = path.resolve(__dirname, '')
    return fs.readdirSync(root).filter(
        file => file.endsWith('.html')
    ).reduce(
        (entries, file) => ({
            ...entries, 
            [path.basename(file, '.html')]: path.resolve(root, file)
        }),
        {} 
    )
}