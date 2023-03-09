#!/usr/bin/python3

if __name__ == "__main__":
    from calculator_1 import add, sub, mul, div
    
    a = int(input("Enter the first number: "))
    b = int(input("Enter the second number: "))
    operator = input("Enter the operator (+, -, *, /): ")

    ops = {"+": add, "-": sub, "*": mul, "/": div}
    
    if operator not in ops:
        print("Unknown operator. Available operators: +, -, * and /")
        exit(1)
        
    result = ops[operator](a, b)
    print("{} {} {} = {}".format(a, operator, b, result))
