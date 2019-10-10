export const randomPhotoIndex = () => {
    let indexArray = [0, 1, 2,3,4,5];
    for (let i=0; i<95; i++){
        let randomIndex = Math.floor(Math.random() * 1000);
        if (!indexArray.includes(randomIndex)){
            indexArray.push(randomIndex);
        }
    }
    return indexArray;
}