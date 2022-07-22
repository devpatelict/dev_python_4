
n=input("Enter the string:")
print(n.count(" "))
print(len(n)-n.count(" "))
print(len(n.split()))
str=" "
for i in n:
    str=i+str
print("Reversed string:",str)