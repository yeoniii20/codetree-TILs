r = input()
arr = r.split()
a = int(arr[0])
b = int(arr[1])

for i in range(a, b - 1, -1):
    if i % 2 == 1:
        print(i, end=' ')