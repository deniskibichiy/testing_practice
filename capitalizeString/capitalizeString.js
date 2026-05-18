function capitalizeString(string) {
    const firstLetter = 
    string.slice(0,1).toUpperCase();
    return `${firstLetter}`+string.slice(1,string.length);
};

export {capitalizeString};