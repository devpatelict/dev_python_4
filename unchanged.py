from os import remove


n=input("Enter the string:")
s=len(n)

if s>2:
    
    if n.endswith("ing"):
        print(n[0:s-3]+"ly")
    else:
        print(n+"ing")
else:
    print(n)