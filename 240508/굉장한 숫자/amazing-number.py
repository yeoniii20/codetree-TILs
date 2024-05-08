a = int(input())

print("true" if (a % 3 == 0 and a % 2 == 1) or (a % 5 == 0 and a % 2 == 0) else "false")