n = int(input())

for i in range(n, 101):
    if (90 <= i):
        print("A") 
    elif (89 <= i and 80 <= i):
        print("B")
    elif (79 <= i and 70 <= i):
        print("C")
    elif (69 <= i and 60 <= i):
        print("D")
    elif (i < 60):
        print("F")