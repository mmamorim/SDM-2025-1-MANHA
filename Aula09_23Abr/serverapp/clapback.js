import { JSONFilePreset } from 'lowdb/node'

function parserGet(obj, path) {
    if (path.charAt(0) != '/') {
        path = '/' + path
    }
    let childs = path.split("/")
    //console.log(childs);
    let value = obj
    if (childs[1].trim() != '') {
        for (let i = 1; i < childs.length; i++) {
            if (childs[i] != '') {
                if (value[childs[i]]) {
                    value = value[childs[i]]
                } else {
                    value = null
                    break
                }
            }
        }
    }
    return value
}

function parserSet(obj, path, elem) {
    if (path.charAt(0) != '/') {
        path = '/' + path
    }
    let childs = path.split("/")
    //console.log(childs);
    let value = obj
    if (childs[1].trim() != '') {
        for (let i = 1; i < childs.length; i++) {
            if (childs[i] != '') {
                if (i == childs.length - 1) {
                    if (elem === null) {
                        delete value[childs[i]]
                    } else {
                        value[childs[i]] = elem
                    }
                } else {
                    if (value[childs[i]]) {
                        value = value[childs[i]]
                    } else {
                        value[childs[i]] = {}
                        value = value[childs[i]]
                    }
                }
            } else {
                console.error('Invalid path - / expected')
                return null
            }
        }
    }
    return elem
}

const cb = {
    db: {},

    async init(fileName) {
        const defaultData = {}
        cb.db = await JSONFilePreset(fileName, defaultData)
    },

    get(path) {
        let value = parserGet(cb.db.data, path)
        //console.log('value', value);
        return value
    },

    async set(path, elem) {
        let value = parserSet(cb.db.data, path, elem)
        await cb.db.write()
        //console.log('value', value);
    },
}

export default cb