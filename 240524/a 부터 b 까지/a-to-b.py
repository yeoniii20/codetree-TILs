# r = input()
# arr = r.split()
# a = int(arr[0])
# b = int(arr[1])

# for i in range(a, b + 1):
#     if i % 2 == 1:
#         i = i * 2
#     elif i % 2 == 0:
#         i = i + 3
#     print(i, end=" ")


# # while문 사용
# r = input()
# arr = r.split()
# a = int(arr[0])
# b = int(arr[1])

# # 숫자들을 저장할 리스트를 초기화
# result = []

# # 현재 숫자가 b를 넘기 전까지 반복
# while a <= b:
#     result.append(a)
#     if a % 2 == 1:
#         # 홀수일 경우 2배
#         a *= 2  
#     else:
#          # 짝수일 경우 3 증가
#         a += 3 

# # 결과를 공백으로 구분하여 출력
# print(" ".join(map(str, result)))



# for문 사용
r = input()
arr = r.split()
a = int(arr[0])
b = int(arr[1])

# 숫자들을 저장할 리스트를 초기화
result = []

# 현재 숫자를 초기화
current = a

# for 문을 사용하여 범위를 관리
# b가 최대 20이므로 충분히 큰 범위로 설정
for _ in range(b):  
    if current > b:
        break
    result.append(current)
    if current % 2 == 1:
        # 홀수일 경우 2배
        current *= 2  
    else:
        # 짝수일 경우 3 증가
        current += 3  

# 결과를 공백으로 구분하여 출력
print(" ".join(map(str, result)))