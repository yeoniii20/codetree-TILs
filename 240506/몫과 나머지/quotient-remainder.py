a = input()
arr = a.split()
b = int(arr[0])
c = int(arr[1])
n = b // c
m = b % c

print("%d...%d" % (n, m))