r = input()
arr = r.split()
a = int(arr[0])
b = int(arr[1])
c = int(arr[2])

# 세 수를 리스트에 넣고 정렬
# numbers = [a, b, c]
# numbers.sort()

# 정렬된 리스트의 중간 인덱스인 1의 값을 출력
# print(numbers[1])

if (b <= a <= c) or (c <= a <= b):
    print(a)
elif (a <= b <= c) or (c <= b <= a):
    print(b)
else:
    print(c)


# if a > b and a < c:
#     print(a)
# elif a > b and a > c:
#     print(a)
# elif a < b and a > c:
#     print(a)
# elif a < b and a < c:
#     print(a)

# elif b > a and b < c:
#     print(b)
# elif b < a and b > c:
#     print(b)     
# elif b < a and b < c:
#     print(b)
# elif b < a and b < c:
#     print(b)    

# elif c > a and c < b:
#     print(c)
# elif c < a and c > b:
#     print(c)
# elif c > a and c < b:
#     print(c)
# elif c < a and c < b:
#     print(c)