#find the nth element in a sequence

sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

n = int(input ("Which element of the sequence do you want us to find?"))


if n > 12:
    counter = n - 12
    while counter >0:   
        sequence.append(sequence[-1] + sequence [-2])
        counter = counter - 1
    print (sequence[-1])
else:
    print (sequence[n])
   