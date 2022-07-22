a=int(input("Enter the value A:"))
b=int(input("Enter the value B:"))
c=int(input("Enter the value C:"))

if a>b and a>c:
    num=a
elif b>a and b>c:
    num=b
elif c>a and c>b:
    num=c

print("The Greatest number among all the three variable is ", num) 
       

