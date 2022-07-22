import random
n=random.randint(1,20)

while True:
    m=int(input("Enter the number:"))
    if m==n:
        print("Congrats you have won the reward")
    elif m>n:
        print("You have choose the the greater number")
    elif m<n:
        print("You have choose the smaller number")