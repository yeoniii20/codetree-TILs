r = input()
arr = r.split()

a = int(arr[0])
b = int(arr[1])
c = int(arr[2])

if a > b and a > c:
    print(a)
elif b >a and b > c:
    print(b)
elif c > a and c > b:
    print(c)