a = int(input())

if a % 2 == 0:
    b = a / 2
    print(int((b + 1) / 2))

if a % 2 == 1:
    print(int((a + 1) / 2))