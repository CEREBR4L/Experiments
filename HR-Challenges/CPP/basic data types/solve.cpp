#include <iostream>
#include <cstdio>
using namespace std;

int main() {
    // Complete the code.
    int three;
    long four;
    long long nums;
    char a;
    float f;
    double d;
    
    // these are C functions but whatever...that's what they want..
    scanf("%d %ld %lld %c %f %lf", &three, &four, &nums, &a, &f, &d);
    printf("%d \n%ld \n%lld \n%c \n%.3f \n%.9lf", three, four, nums, a, f, d);
    
    return 0;
}

