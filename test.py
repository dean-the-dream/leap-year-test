	
print("Hello!\nI can tell you if a specific year is a leap year.")
leap = input("What year would you like me to check?(Please enter 4 digits.)")
leap = int(leap)
if ((leap % 4 == 0) and (leap % 100 == 0)) :
  if(leap % 400 == 0) :
    print(True)
  else: 
    print(False)
else :
  print(False)
