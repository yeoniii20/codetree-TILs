p = input()
r = input()

arr1 = p.split()
arr2 = r.split()

a = int(arr1[0])
b = int(arr1[1])
c = int(arr2[0])
d = int(arr2[1])

if a > c:
    print("A")
elif a < c:
    print("B")
elif a == c:
    print("A" if b > d else "B")