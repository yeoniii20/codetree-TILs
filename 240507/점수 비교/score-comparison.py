r = input()
q = input()
arr = r.split()
arr2 = q.split()

a = int(arr[0])
b = int(arr[1])

c = int(arr2[0])
d = int(arr2[1])

if a > c and b > d:
    print(1)
else:
    print(0)