a = input()
arr = a.split()
h = int(arr[0])
w = int(arr[1])

b = (10000 * w) / (h * h)

print(int(b))

if b >= 25:
    print("Obesity")