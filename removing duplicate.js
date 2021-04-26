/*write a small web ap that:
    - defines an array of items (numbers, strings, etc.).
    - remove the duplicate items from the array.
    */

    let listOfItems= [33, ' flower ',741 , ' dog ', ' flower ', 854 , ' flower ',  ' banana ', 185 , ' orange ', 8529 , ' flower '];
    listOfItems = listOfItems.filter((value,index,arr)=> arr.indexOf(value) == index)
    listOfItems.forEach(data=>document.write(data));
   
    
   