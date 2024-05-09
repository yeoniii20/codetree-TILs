n = int(input())

if n == 2:
    print(28)
elif n % 2 == 0:
    print(30)
    if n ==1 or n == 8 or n == 10 or n == 12:
        print(31)
else:
    print(31)