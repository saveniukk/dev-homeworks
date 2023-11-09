function groupAnagram(words){
    let anagramGroups = {};

    for (let word of words) {
        let sortedWords = word.split('').sort().join('');

        if(sortedWords in anagramGroups){
            anagramGroups[sortedWords].push(word);
        } else{
            anagramGroups[sortedWords] = [word];
        }
    }
    return Object.values(anagramGroups);
}