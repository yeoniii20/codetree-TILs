r = input()
arr = r.split()
a = int(arr[0])
b = int(arr[1])

if 0 < a:
    for _ in range(b):
        print(a, end='')

elif a <= 0:
    print(0)