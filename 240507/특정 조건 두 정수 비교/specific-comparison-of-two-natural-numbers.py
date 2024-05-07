h = input()
arr = h.split()
a = int(arr[0])
b = int(arr[1])


if a < b:
    c = 1
else:
    c = 0
if a == b:
    d = 1
else:
    d = 0

print(c, d)