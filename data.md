| Function | TinyArr  | SmallArr | MediumArr | LargeArr | XLargeArr|
|----------|----------|----------|-----------|----------|----------|
| Append   |99.932 μs |108.61 μs |153.891 μs |629.112 μs|5.64716 ms|
| Insert   |39.785 μs |48.546 μs |160.1 μs   |7.0298 ms |958.693 ms|

I see a pattern that at first the insert method with .unshift was a 
little bit faster, but as we scaled up it started to get drastically
slower than the append method. You can see this trend start to occur
around the mark of the medium array test. At that point they take 
about the same amount of time. Before that the Append times are larger
and after the insert times are larger. It seems that the .unshift method
is scaling a lot more as the input array gets larger than the .push 
method.

This makes sense. Because they both contain a for loop that loops over
the array, we would expect them both to scale linearly at least to the 
input array size. The .push just places the new value at the end of the 
new_nums array, which does not affect any of the other data points. This 
means that this function scales linearly. The .unshift, however, places 
the new value at the beginning of the array. This pushes the rest of the 
values one place back in the array. This means that for every number that 
is being placed, the function has to loop over the new_nums array and re-
allocate all the data points, resulting in the append function ot scale 
quadratically O(n^2).