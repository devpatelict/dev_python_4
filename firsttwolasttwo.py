n=input("Enter the string:")
s=len(n)
if s>2:
    print(n[0:2]+n[s-2:])
elif len(n)==2:
    print(n[0:2]*2)
else:
    print("Empty string")