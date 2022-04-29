def mergesort(list1):
# stop dividing when we have a ssingle element 
    if len(list1)>1:
        mid = len(list1)//2
        left_list = list1[:mid]  #from 0 to mid-1
        right_list = list1[mid:] #from mid to end 
        mergesort(left_list)
        mergesort(right_list)

        # the code below is for merging the left and right sublist 
        # left sublist index -> i
        i = 0 
        # right sublist index -> j 
        j = 0 
        k = 0 
        # is len(left_list) is 2
        # then i will run on 0, 1 indices 
        while i<len(left_list) and j<len(right_list):
            # if left sublist value is less than the right sublist value 
            if left_list[i]<right_list[j]:
                # place left list value in list1
                # index: 0  | 1  
                # array: 10 | 40    
                list1[k] = left_list[i]
                i = i+1
                k = k+1
            else:
                list1[k] = right_list[j]
                j = j+1
                k = k+1
        # is there any value left in the left sublist 
        while i<len(left_list):
              list1[k] = left_list[i]
              i = i+1
              k = k+1
        while j<len(right_list):
              j = j+1
              k = k+1


# num = int(input('how many elems you want in the list'))
# list1 = [int(input()) for x in range(num)]

list1 = [56, 26, 93, 17, 31, 44]
n = len(list1)   #6
mergesort(list1) 
print(list1)