n=int(input("Enter the value:"))
if n%2==0:
    print("Not prime")
else:
    for i in range(3,int(n/2)+1,2):
        if n%i==0:
            print("Not prime")
            break
    else:
        print("Prime")
