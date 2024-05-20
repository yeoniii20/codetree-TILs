r = input()
arr = r.split()
a = int(arr[0])
b = int(arr[1])

if a < b:
    for i in range(b, a - 1, -1):
        print(i, end=' ')
elif a > b:
    for i in range(a, b - 1, -1):
        print(i, end=' ')
elif a == b:
    print(a)