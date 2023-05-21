# What is a good code?

1. Readable
2. Scalable (maesurable using big O notation)
    * Speed (how fast is the runtime of the code)
    * Memory (the memory used by the code)

# Big O

## Big O notation

Big O notation is a mathematical notation used to analyze and compare the **efficiency** and **scalability** of algorithms,
with time complexity (speed) being one of the primary factors considered.

## Scalability

Scalability refers to how well a system or algorithm can handle larger and more complex tasks or data. When we talk about scalability,
we want to know how the performance of the system changes when we increase the workload or input size.

# Memory

When a program executes, it has two ways to remember things: 
    1. The Heap
        Is usually where we store variables that we assign values to.
    2. The Stack
        Is usually Where we track of our function calls.

Sometimes there is a tradeoff between saving time and saving space, so you have to decide which one you're optimizing for.

When we calculate space complexity using Big O notation, we don't care how big the input is.
We care about additional space we're adding.
