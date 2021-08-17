
const getTime = (ms: string | undefined): string => {
    if(!ms)
        return "";
    var d = new Date(parseInt(ms));
    return d.toLocaleTimeString().slice(0,5);
}

export { getTime };