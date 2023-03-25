/* 005 - INI3 - Strings and Lists

【Problem】

    Given: A string s of length at most 200 letters and four integers a, b, c and d

    Return: The slice of this string from indices a through b and c through d 
    (with space in between), inclusively. In other words, we should include 
    elements s[b] and s[d] in our slice.

    Sample Dataset: HumptyDumptysatonawallHumptyDumptyhadagreatfallAlltheKingshorsesandalltheKingsmenCouldntputHumptyDumptyinhisplaceagain.
                    22 27 97 102

    Sample Output: Humpty Dumpty
*/

const str = 'PoIEmp2xRQi20u6GMDqIXZUYY8pMfrrZ8Swr7jdjNtOkJkeE547CtvhBX4tizzXMsrmdUpRGGxaem6N5zaFelisN52mIOxt2fEERP3MDOP4EGNhegWfIxzcmbelliiDFmMG9K0XHIO8S2h9dvETU7zVDQZyhLfBg6D6Pm5eeQfPLCHVooUZFI.'

function sliceManager(a, b, c, d){
    const firstWorld = str.slice(a,(b+1))
    const secondWorld = str.slice(c,(d+1))
    return (`${firstWorld} ${secondWorld}`)
}

console.log(sliceManager(82, 86, 120, 125))