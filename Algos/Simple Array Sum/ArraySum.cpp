#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int ArraySum(vector<int> arr, int leng){
    int num = 0;
    for(int i = 0; i < leng; i++){
        num += arr[i];
    }
    return num;
}

int main(){
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int arr_i = 0;arr_i < n;arr_i++){
       cin >> arr[arr_i];
    }
    cout << ArraySum(arr, n);
    return 0;
}

