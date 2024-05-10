r = input()
arr = r.split()
a = str(arr[0])
b = int(arr[1])

p = input()
arr = p.split()
c = str(arr[0])
d = int(arr[1])

q = input()
arr = q.split()
e = str(arr[0])
f = int(arr[1])

if a == "Y" and b >= 37:
    if (c == "Y" and d >= 37) or (e == "Y" and f >= 37):
        print("E")
    else:
        print("N")
elif a == "N" and b < 37:
    if (c == "Y" and d >= 37) and (e == "Y" and f >= 37):
        print("E")
    else:
        print("N")