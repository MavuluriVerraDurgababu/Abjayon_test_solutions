function maximum(a, b, c)
    {
        return Math.max(Math.max(a, b), c);
    }
    function minimum(a, b, c)
    {
        return Math.min(Math.min(a, b), c);
    }
    function smallestDifferenceTriplet(arr1, arr2, arr3, n)
    {
        arr1.sort(function(a, b){return a - b});
        arr2.sort(function(a, b){return a - b});
        arr3.sort(function(a, b){return a - b});
        let res_min = 0, res_max = 0, res_mid = 0;
        let i = 0, j = 0, k = 0;
        let diff = 2147483647;
           
        while (i < n && j < n && k < n)
        {
            let sum = arr1[i] + arr2[j] + arr3[k];
            let max = maximum(arr1[i], arr2[j], arr3[k]);
            let min = minimum(arr1[i], arr2[j], arr3[k]);
            if (min == arr1[i])
                i++;
            else if (min == arr2[j])
                j++;
            else
                k++;
            if (diff > (max - min))
            {
                diff = max - min;
                res_max = max;
                res_mid = sum - (max + min);
                res_min = min;
            }
        }
        console.log(res_max + ", " + res_mid + ", " + res_min);
    }
     
    let arr1 = [15, 12, 18, 9];
    let arr2 = [10, 17, 13, 8];
    let arr3 = [14, 16, 11, 5];
 
    let n = arr1.length;
   smallestDifferenceTriplet(arr1, arr2, arr3, n);