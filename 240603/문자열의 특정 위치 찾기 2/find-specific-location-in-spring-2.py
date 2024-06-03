# arr = ["apple", "banana", "grape", "blueberry", "orange"]

# w = input()

# a = arr[0].count(w)
# b = arr[1].count(w)
# c = arr[2].count(w)
# d = arr[3].count(w)
# e = arr[4].count(w)

# print(a > 0)

# 5개의 문자열 초기화
words = ["apple", "banana", "grape", "blueberry", "orange"]

# 첫 번째 줄 입력 받기 (영문자 하나)
char = input("")

# 조건을 만족하는 문자열들을 저장할 리스트
matching_words = []

# 조건에 맞는지 확인하고, 맞으면 리스트에 추가
for word in words:
    if len(word) >= 3 and (word[2] == char or (len(word) >= 4 and word[3] == char)):
        matching_words.append(word)

# 결과 출력
for word in matching_words:
    print(word)

# 조건을 만족하는 문자열의 개수 출력
print(len(matching_words))