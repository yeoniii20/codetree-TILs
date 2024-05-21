n = int(input())

for i in range(n, 101):
    if (90 <= i):
        a = "A"
        # print("A") 
    elif (i <= 89 and 80 <= i):
        a = "B"
        # print("B")
    elif (i <= 79 and 70 <= i):
        a = "C"
        # print("C")
    elif (i <= 69 and 60 <= i):
        a = "D"
        # print("D")
    elif (i < 60):
        a = "F"
        # print("F")
    print(a, end=" ")