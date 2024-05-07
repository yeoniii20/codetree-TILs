a = input()
arr = a.split()
b = int(arr[0])
c = int(arr[1])

if b > c:
    print(b * c)
else:
    print(c % b)