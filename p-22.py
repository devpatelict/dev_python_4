import random




n=int(input("Enter the mobile number:"))
print("Otp has sent to above mobile number")
z=random.randint(1000,9999)
print("Your otp is ",z)
p=int(input("Enter you otp:"))
if z==p:
    print("you are succesfully login")
else:
    print("Your otp doesn't match")