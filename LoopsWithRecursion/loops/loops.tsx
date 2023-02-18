/**
 * @author Muhammad Faiz <faizqadri234@gmail.com>
 * These below loops are implemented by using recusrsion technique.
 **/


export const map = (array: any, iterationCallBack: (item: any, index: number) => void) => {
    let iterator = 0
    const arrayContent: any = []
    if (array.length < 1) return
    const startLoop = () => {
        if (iterator < array.length) {
            const content = iterationCallBack?.(array[iterator], iterator)
            arrayContent.push(content)
            iterator = iterator + 1
            startLoop()
        }
    }
    startLoop()
    return arrayContent
}

export const forEach = (array: any, iterationCallBack: (item: any, index: number) => void) => {
    let iterator = 0
    if (array.length < 1) return
    const startLoop = () => {
        if (iterator < array.length) {
            iterationCallBack?.(array[iterator], iterator)
            iterator = iterator + 1
            startLoop()
        }
    }
    startLoop()
}

export const filter = (array: any, iterationCallBack: (item: any, index: number) => any) => {
    let iterator = 0
    const filteredContent: any = []
    if (array.length < 1) return
    const startLoop = () => {
        if (iterator < array.length) {
            const decider = iterationCallBack?.(array[iterator], iterator)
            if(decider) {
                filteredContent.push(array[iterator])
            }
            iterator = iterator + 1
            startLoop()
        }
    }
    startLoop()
    return filteredContent
}

export const find = (array: any, iterationCallBack: (item: any, index: number) => any) => {
    let iterator = 0
    let desiredItem: any
    if (array.length < 1) return
    const startLoop = () => {
        if (iterator < array.length) {
            const decider = iterationCallBack?.(array[iterator], iterator)
            if(decider) {
                desiredItem = array[iterator]
                return
            }
            iterator = iterator + 1
            startLoop()
        }
    }
    startLoop()
    return desiredItem
}

export const some = (array: any, iterationCallBack: (item: any, index: number) => any) : boolean => {
    let iterator = 0
    let existence: boolean = false
    if (array.length < 1) return false
    const startLoop = () => {
        if (iterator < array.length) {
            existence = iterationCallBack?.(array[iterator], iterator)
            if(existence) {
                return
            }
            iterator = iterator + 1
            startLoop()
        }
    }
    startLoop()
    return existence
}
