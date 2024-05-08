r = input()
arr = r.split()
a = int(arr[0])
b = int(arr[1])
c = int(arr[2])

print(1 if a <= b and a <= c else 0, 1 if a == b == c else 0)