import _ from 'lodash';

export function Paginate(itemsArray, currentpage, pageSize){
    /* This function is responsible for paginating the data. It takes in the data array and trims
    it using lodash functions. The startingIdx is used to determine where the returned array should
    start from, where the Slice method will remove the portion of the array prior to the index. The
    take method will trim the array to the desired length based on pageSize */
    const startingIdx = (currentpage - 1) * pageSize;
    const lodashArray  = _(itemsArray)
    return lodashArray.slice(startingIdx).take(pageSize).value();
}