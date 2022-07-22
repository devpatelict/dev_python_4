n=input("Enter the string:")
a=(n.find("poor"))
b=(n.find("Not"))

if b>a:
    print(n.replace("poor","Good").replace("Not","Good"))
    
else:
    print(n)