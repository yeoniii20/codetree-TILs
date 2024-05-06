a = input()
arr = a.split()
n = int(arr[0])
m = int(arr[1])

if n < m:
    print(m - n)
if m < n:
    print(n - m)
if n == m:
    print(0)