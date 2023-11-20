export const getData = async (url: string) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        return console.error(error);
    }
}

export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
