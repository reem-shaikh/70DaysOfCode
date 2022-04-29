def pivot_place(list1, first, last):
    # first - starting index 
    # last - last index 
    pivot = list1[first]
    # taking first value as pivot 

    left = first + 1
    right = last 

   # since we want to execute this part of code again and again 
    while True: 
        while left<=right and list1[left]<=pivot:
            left = left + 1
        while left<=right and list1[right]>=pivot:
            right = right - 1
        if right < left:
            break
            # if this condition is true 
            # swap pivot and element present at the right index 
        else:
            # swap value at left and right index 
            list1[left], list1[right] = list1[right], list1[left]
    list1[first], list1[right] = list1[right], list1[first]
    # swap pivot and element present at the right index 
    return right 


def quicksort(list1, first, last):
# when first index is same as last index then we need to stop 
# then we need to stop the swap 
   if first <last:
        # if first index is smaller than last index 
        p = pivot_place(list1, first, last)
        quicksort(list1, first, p-1)
        quicksort(list1, p+1, last)

#main 
list1 = [56, 26, 93, 17, 31, 44]
n = len(list1)   #6
quicksort(list1, 0, n-1)  #0->5
print(list1)