a = input()
b = input()
c = input()

lena = len(a)
lenb = len(b)
lenc = len(c)

# print(lena) #7
# print(lenb) #8
# print(lenc) #14

if lena > (lenb and lenc):
    if lenb > lenc:
        print(lena - lenc)
    else:
        print(lena - lenb)
elif lenb > (lena and lenc):
    if lena > lenc:
        print(lenb - lenc)
    else:
        print(lenb - lena)
elif lenc > (lena and lenb):
    if lena > lenb:
        print(lenc - lenb)
    else:
        print(lenc - lena)
elif lena == lenb == lenc:
    print(0)