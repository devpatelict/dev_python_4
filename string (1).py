s="My name is patel dev and dev hobby is to play badminton"

c=len(s)-s.count(" ")
w=len(s.split())
l=len(s)
ct=s.count("dev")

print("Total Length of String:",l)
print("Total Numbers of charachter in String:",c)
print("Total Numbers of Words in String:",w)
print("Total Substring of String:",ct)

#if string is multiple of 4 then reverse the string

if l%4==0:
    print(s[::-1])

