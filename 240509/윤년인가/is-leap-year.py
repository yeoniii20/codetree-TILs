y = int(input())

if y % 4 == 0:
    if y % 100:
        if y % 400:
            print("true")
else:
    print("false")