r = input()
arr = r.split()

a = arr[0]
b = arr[1]

aLen = len(a)
bLen = len(b)

if aLen == bLen:
    print("same")
elif aLen > bLen:
    print(a, aLen)
elif aLen < bLen:
    print(b, bLen)