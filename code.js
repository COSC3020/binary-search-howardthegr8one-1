function binarySearch(list, element) {
    // checks for empty or invalid lists
    if (list.length < 1 || element > list[list.length-1])
        return -1
    if (list.length == 1)
        (list.length == 1) ? 0 : -1
        
    let mid = Math.floor(list.length / 2)

    if (element <= list[mid])
        if (element == list[mid-1])
            return binarySearch(list.slice(0, mid), element)
        else if (element <= list[mid-1])
            return binarySearch(list.slice(0, mid), element)
        else
            return mid
    else
        return mid + binarySearch(list.slice(mid, list.length), element)
}
