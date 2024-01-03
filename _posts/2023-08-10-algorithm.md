---
layout: post
title: 정렬 알고리즘
color: rgb(242,85,44)
tags: [algorithm, sort, baekjoon]
---

## C++ 함수를 이용한 정렬
1. 숫자 정렬
```c++
#include <algorithm>

int main(){
    int arr[8] = {12, 41...};
    std::sort(arr + 시작인덱스, arr + 끝인덱스 + 1); 
}
```
배열을 오름차순 정렬

```c++
#include <algorithm>
#include <functional>

int main(){
    int arr[8] = {12, 41...};
    std::sort(arr + 시작인덱스, arr + 끝인덱스 + 1, greater<int>());
}
```
배열을 내림차순 정렬

> 문자열 배열도 동일하다.



2. 문자열 정렬
```c++
#include <algorithm>
#include <string>

int main(){
    string str = "badc";
    std::sort(str.begin(), str.end());
}
```
<br>
<br>
<br>

## 정렬 알고리즘

1. 삽입 정렬(insertion sort)
: 인덱스 0~i-1의 정렬된 배열에 i번째 요소의 적절한 위치를 찾아 insert(반복)
best : 
worst : O(n^2)
2. 합병 정렬(merge sort)
: 
O(nlogn)

* 
3. 분할정복(divide-conquer)
4. 퀵 정렬(quick sort)
:분할정복 알고리즘 중 하나
- 불안정 정렬
- 비교 정렬
힙정렬(heap sort)
선택정렬(selection sort)

## 완전탐색(브루트포스)
: 발생할 수 있는 모든 경우를 탐색
선형구조 - 순차탐색
비선형구조 - 백트래킹, DFS, BFS

1. 한 자리를 정하여 완전탐색
2. 


## 백트래킹 Backtracking



# 그래프
1. 인접행렬
 정점 i,j가 연결되어 있다면 graph[i][j] 의 값을 1로.
 (양방향 그래프의 경우 인접행렬이 대칭)
 >>특정 I,J가 연결되어 있는지 확인 O(1)
 특정 정점과 연결된 있는 모든 정점 확인 O(V)
 공간복잡도 O(V^2)

2. 인접리스트
 V개의 연결리스트
 각 리스트에 연결된 정점들의 정보 담음.
 >>특정 i,j가 연결되어 있는지 확인 O(min(degree(I), degree(J)))
 특정 정점과 연결된 모든 정점 확인 O(degree(X))
 공간복잡도 O(V+E)



## DFS
1. 재귀 :  방문할 수 있는 지점이 있다면 그 지점을 방문하는 함수를 재귀적으로 호출하고, 더 이상 방문할 곳이 없다면 함수를 종료

## BFS




## DP 동적계획법
큰 문제의 답을 얻기 위해 동일한 크기가 더 작은 문제들을 먼저 해결 (항상 점화식 기반)
1. for문
2. 재귀함수
    실행 시간 오래걸림(ex피보나치) -> `메모이제이션`으로 중복 제거 : function fibbo(n)
    if memo[n] != -1           // 이미 n번째 값을 구해본 적이 있다면
        return memo[n]         // memo에 적혀있는 값을 반환해줍니다.
    if n <= 2                  // n이 2이하인 경우에는 종료 조건이므로 
        memo[n] = 1            // 해당하는 숫자를 memo에 넣어줍니다.
    else                       // 종료조건이 아닌 경우에는 
        memo[n] = fibbo(n - 1) + fibbo(n - 2)   // 점화식을 이용하여 답을 구한 뒤
                                                // 해당 값을 memo에 저장해줍니다.
    return memo[n]             // memo 값을 반환합니다.



## Disjoint sets (서로소 집합, 분리 집합, union find)
: 교집합이 없는 두 개 이상의 집합
각 집합은 대표원소가 있다.

`MAKE-SET(x)`새 원소 1개 추가 O(1)
`UNION(x,y)` x,y원소가 속한 집합들 병합
`FIND-SET(x)` x가 속한 집합의 대표 원소 리턴 O(1)
union과 find-set 사이에는 tradeoff 관계가 있다. 

total operations : m
원소의 갯수(MAKE-SET operations) : n
Union operations : u
FIND-SET operations : f
m = n + u + f

`연결 요소(connected component)`
DFS, BFS 탐색을 통해 구할 수 있다.

연결 요소에 속한 모든 정점을 연결하는 경로가 있어야 한다.
또 다른 연결 요소에 속한 정점과 연결하는 경로가 있으면 안된다.



### 1.Linked-list
각 집합은 linked list로 표현된다. 
첫번째 원소가 대표 원소이다.
모든 노드가 대표 원소를 가리키는 포인터를 갖는다.

tail 포인터 : union 할 때 마지막 원소의 다음을 가리키기 위해 필요

`MAKE-SET(x)` O(1)
`UNION(x,y)` O(nlogn) 
더 짧은 list를 뒤에 붙인다. (대표 원소를 가리키는 포인터 변동) 
`FIND-SET(x)` O(1)

u*n <= (n-1)*n
u번 union할 때 각 노드가 최대 logn번 선택됨

### 2.Forest(tree 집합)
: 각 집합을 하나의 tree로 표현
- root가 대표 원소
- 화살표가 위로 향함.
- child 간 순서?

`MAKE-SET(x)` O()
`UNION(x,y)` O() - 더 짧은 tree를 포함시킨다. (rank : 루트에 포함된 tree의 upper bound) 
LINK(FIND-SET(x),FIND-SET(y))
`FIND-SET(x)` O() - 
a(n) : n이 아무리 커져도 <=4