r = input()
arr = r.split()

a = int(arr[0])
b = int(arr[1])

# a가 b보다 같거나 큰지
print(1 if a >= b else 0)

#  a가 b보다 큰지
print(1 if a > b else 0)

# b가 a보다 같거나 큰지
print(1 if b >= a else 0)

# b가 a보다 큰지
print(1 if b > a else 0)