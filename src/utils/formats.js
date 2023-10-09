export const formatter = value => {
    let config = {}

    if (value >= 10000){
        config = {
            notation: 'compact',
            maximumFractionDigits: 1
        }
    }
    return Intl.NumberFormat('tr', config).format(value)
}