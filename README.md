permutation-rank
================
Ranks and unranks permutations.  Based on the following paper:

W. Myrvold, F. Ruskey. (2000) "[Ranking and Unranking Permutations in Linear Time](http://webhome.cs.uvic.ca/~ruskey/Publications/RankPerm/RankPerm.html)". Information Processing Letters.  

Usage
=====
First install using npm:

    npm install permutation-rank

Then you can use it like this:

```javascript
var prank = require("permutation-rank")
var perm = [0,3,1,2]
var r = prank.rank(perm)
console.log("r = ", r)
var u = prank.unrank(perm.length, r)
console.log("u = ", u)

//Prints:
//        r =  15
//        u =  [ 0, 3, 1, 2 ]
```

`require("permutation-rank").rank(permutation)`
-----------------------------------------------
Computes an integer representing the colexicographic rank of the permutation


`require("permutation-rank").unrank(length, rank)`
--------------------------------------------------
Computes a permutation from a rank order with the given length


Credits
=======
(c) 2013 Mikola Lysenko. MIT License