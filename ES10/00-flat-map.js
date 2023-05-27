    //flat
    var multiArray = [[[[1, 2],[3, 4]],[[5, 6],[7, 8]]],[[[9, 10],[11, 12]],[[13, 14],[15, 16]]]];
    
    console.log(multiArray[0][1][0][1]); // Imprime 6
    //console.log(multiArray.flat(4)); // Imprime 11

    //flat map

    console.log(multiArray.flatMap(v =>[v,v*1]))



    
    