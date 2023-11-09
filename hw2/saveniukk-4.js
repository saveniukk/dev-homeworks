function unpackSausages(truck) {
    let sausagesDisplay = [];
    let sausageCount = 0;
    let k = 5;

    for (let packs of truck) {

        for (let packages of packs) {

            if (packages.startsWith("[") && packages.endsWith("]") && packages.length === 6 && packages[1] === packages[2] && packages[1] === packages[3] && packages[1] === packages[4] ) {
                let sausageType = packages.substring(1, packages.length - 1);
                sausagesDisplay.push(...sausageType);
                sausageCount++;

                if (sausageCount === 5){
                    sausagesDisplay.splice(-4, 4);
                    sausageCount += 0

                }
            }
        }
    }
    return sausagesDisplay.join(' ');

}