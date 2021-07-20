export const getNewExpirationTime = () => {
    return Date.now() + 15 * 1000;
}

let currentId = 0;
export const generateNewId = () => {
    const results = currentId;
    currentId += 1;
    return results;
}