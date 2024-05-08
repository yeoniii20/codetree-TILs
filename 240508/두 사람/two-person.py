p = input()
r = input()

arr1 = p.split()
arr2 = r.split()

a = int(arr1[0])
b = str(arr1[1])
c = int(arr2[0])
d = str(arr2[1])

print(1 if (a >= 19 and b == "M") or (c >= 19 and d == "M") else 0)