한양대학교 박희진 교수님의 '알고리즘 및 문제해결기법' 강의 내용을 요약한 자료입니다.

problem
algorithm

## Running time

Arithmetic
Data movement
Control

## insertion sort

> sorting algorithm using insertions
> insert key into sorted list.

```

```

## merge sort

# divide and conquer

quicksort, mergesrot

# Comparison sorts

> 요소들의 순서를 결정할 때 비교연산자 (<,=,>)만을 사용하는 sorting 알고리즘

- heapsort, mergesort, insertion sort, selection sort, quick sort가 모두 여기에 해당한다.
- `Decision tree`의 형태로 나타낼 수 있다.

![스크린샷 2024-10-06 063928](https://github.com/user-attachments/assets/5b32602c-a4e7-4669-ae16-e7b297b1e6b9) - full binary tree (모든 노드가 0 또는 2명의 자식을 가짐) - 각 leaf의 depth는 비교의 총 횟수 - 모든 leaf의 집합은 입력값의 모든 순열이다.

- Comparison sort는 worst case에서 반드시 오메가(nlgn)
  (lower bound is 세타(nlgn))
  증명 :
  ![image](https://github.com/user-attachments/assets/bd32c7a3-a253-41bd-ac95-905c4564f124)

      leaf의 최대 갯수는 `2^h`
      leaf의 실제 갯수는 `n!`
      따라서 n! <= 2^h
      로그를 씌우면 lg(n!) <= h
      lg(n!)는 근사법칙에 의해 세타(nlgn)으로 근사되고,
      결정 트리의 높이 h는 최대(최악의 경우) 비교 횟수이므로
      세타(nlgn)은 lower bound가 된다.

<br>
<br>

다음은 comparison을 사용하지 않는 sorting 방법들이다.
특정 조건 하에서 `선형 시간`의 시간복잡도로 정렬할 수 있다.

# Counting sort

> 각 입력값을 counting해서 빈도를 기록하는 보조배열 C를 사용한다.

- 주어진 배열 `A`에서 값이 i일 경우 새로운 배열 `C`[i] += 1
- O(n+k)의 시간복잡도

  - n은 입력값의 갯수, k는 입력값의 범위를 의미한다.

- `stable` input 배열의 같은 값의 순서가 output 배열에서도 보존됨.
  ![image](https://github.com/user-attachments/assets/29ba9a26-2cd4-413a-9509-879916a93857)

  - `C'`배열 추가 : C'[i] == C배열의 0 ~ i 인덱스 값들의 합
  - C'배열을 얻는 데에 세타(k)의 시간복잡도가 소모된다.
    (C'[i] = C'[i-1] + C[i])
  - 과정
    ![image](https://github.com/user-attachments/assets/bf86d24f-343d-4dfc-9bdb-f57783a691a9)
    - 1. A를 count해 C배열을 얻는다.
    - 2. C'배열을 얻는다.
    - 3. A[마지막 인덱스] == i일 경우 C'[i]를 확인하고,
         C'[i]==k일 경우 결과 배열 `B`[k]=i
    - 4. C'[i] -= 1
    - 5. A 배열의 마지막 인덱스부터 첫번째 인덱스까지 3,4번 과정을 반복.

- 수도 코드

B는 편의상 1번 인덱스부터 사용하고, C와 C'은 숫자 범위에 해당하는 인덱스를 사용

# Radix sort (기수 정렬)

> 각 자릿수를 radix(기수)로 설정해 이에 따라 버킷에 분산하는 버킷 정렬의 일종.

- 시간복잡도는 O(d(n+k))
  - n개의 숫자, d는 반복 횟수(최대자릿수 b, 기수의 자릿수 r에 대해 b/r과 같다), 기수의 범위는 k
  - n+k는 counting sort의 시간복잡도에 해당 (i번째 자릿수들을 정렬할 때 수의 범위 k가 10이하로 작기 때문에 counting sort가 유리하다!)
  - counting sort를 d번 반복함

아래의 두 가지 방법이 있다.

1. MSD -> LSD
2. MSD <- LSD

위의 경우에서, 시간복잡도를 최소화하기 위한 기수 r을 찾아보자.
두 가지 경우로 나누어 생각해볼 수 있다.
1.b < lgn
r에 상관 없이 O(n)
radix sort가 counting sort와 마찬가지인 경우

2.b >= lgn
r=lgn인 경우 O(nlgn)으로 최선의 경우가 된다.

-

위에서 '특정 조건 하'에서 선형 시간을 달성할 수 있다고 했는데,
couting sort는 수의 범위 k가 작을 때,
radix sort는 최대자릿수 d가 상수이고, 각 자릿수의 값의 범위 k가 작을 때 (k=O(n)) 가능하다.

![한눈에비교](https://github.com/user-attachments/assets/b610dd70-6e52-4801-8ad0-f9c4ed0506dc)

# Dynamic programming

전체 시복도 표 사진

1. assembly-line scheduling
   > n개의 스테이션(S)과 2개의 조립라인이 있다. 각 스테이션마다 하나의 line을 고를 때, 거쳐가는 경로의 비용의 합 s\*의 최솟값과 그 경로를 찾는 문제

`완전탐색`을 할 경우, 2^n으로 많은 시간이 걸리지만, `DP`를 이용하면
공간복잡도 세타(n)
시간복잡도 세타(n)
안에 해결할 수 있다.

![image](https://github.com/user-attachments/assets/d9547fe5-85ce-4865-a28d-631af7da93ca)

아래는 l\*값을 통해 백트래킹으로 경로를 찾는 알고리즘이다.
![image](https://github.com/user-attachments/assets/9945d557-4057-4960-bd0d-dfcf084a69ec)

Q.fastest time(s\*)만 필요하다면?
![image](https://github.com/user-attachments/assets/b591578f-dc89-4c81-a85c-1b1f24f90cb8)

공간복잡도는 세타(1)로 줄어든다.
표 L은 필요하지 않고,
표 S에서 각 단계마다 2x2로도 충분하다.
(Sj의 최소비용을 계산하는데엔 Sj-1만 필요하기 때문)

# Rod-cutting

> 전체 길이 n의 rod, 길이가 i일 때의 가격 배열 p가 있을 때, rod를 적절히 잘라서 최고 가격(r)

# Longest common subsequence

# Matrix-chain multiplication

<br>
<br>
<br>
<br>
<br>

# Amortized analysis

## Aggregate analysis

stack

- push(X) O(1)
- pop O(1)
- multipop(k) O(k)

최대 O(n^2) O(n)

binary counter
O(nk) O(n)

## Accounting method

## Potential method

## Dynamic table

<Br>
<Br>
<Br>
<Br>

# 위상정렬 (topological sort)

> DAG (directed acyclic graph) 에서 모든 엣지가 오른쪽 방향을 향하도록 노드들을 정렬하는 방법

세 가지 방법을 소개한다.

## 방법1

1. 노드 갯수 만큼의 indegree array를 생성한다. `O(V+E)`
2. indegree = 0인 노드를 선택해 -1로 바꾸고(이 노드가 다시 선택되지 않도록),
   연결된 노드들의 indegree를 1 줄인다.
3. 2번 과정을 반복하면 선택된 노드들의 순서가 정렬된 결과이다.

이 때의 시간복잡도는 `O(V^2)` 이다.
indegree = 0인 노드를 찾을 때 O(V)\*V 만큼의 시간이 필요하기 때문인데, 이 과정을

## 방법2

1. 노드 갯수 만큼의 indegree array를 생성한다. `O(V+E)`
2. 스택/큐에 indegree = 0인 노드들을 저장한다.
3. 노드 하나를 pop하고, (이 때 indegree를 -1로 바꾸지 않는다.)
   연결된 노드들의 indegree를 1 줄인다.
   3-1. 이 때, 연결된 노드의 indegree가 0이 된다면 스택/큐에 push한다.
4. 3번 과정을 반복하면 pop한 순서가 정렬된 결과이다.

## 방법3 - DFS를 이용하는 방법

1.
2.
3. finishing time을 내림차순으로 정렬하면 이는 위상정렬의 결과이다.

이 방법의 시간복잡도는 `O(V+E)` 이다.
DFS의 노드 방문 순서에 따라 정렬 결과가 달라진다.

<br>
<br>
<br>
<br>
<br>

## MST (Mininum Spanning Trees)

> 가중치가 있는 무방향 그래프에서 정의된다. spanning tree란 어떤 그래프의 모든 노드를 포함하면서 하나의 tree형태가 되도록 edge를 선택한 subgraph를 의미한다. 이 중 최소의 cost를 가지는 spanning tree가 MST이다.

![image](https://github.com/user-attachments/assets/cc5939fa-32de-48e0-ac5a-525b036fa1b4)

MST는 위와 같이 그래프의 일부이며, 한 그래프에 여러 가지 형태의 MST가 있을 수 있다.

MST가 될 때까지 safe한 edge를 하나씩 추가하는데, 이때 `safe edge`란, edge set A에 엣지 (u,v)를 추가했을 때, 즉 A U {(u,v)}가 어떠한 MST의 일부가 될 수 있는 경우이다.
MST를 찾는 알고리즘에는 `prim's algorithm`과 `kruscal's algorithm`이 있다.

<br>
<Br>

### prim's algorithm

그래프탐색처럼 노드를 하나씩 선택한다.

<방법1>

1. 처음에 임의의 노드를 하나 선택한다.
2. 선택한 노드와 연결된 모든 노드들 (이미 선택된 노드들 제외) 까지의 가중치(cost)와, predecessor을 업데이트한다. (이 때, 이미 더 작은 가중치를 갖고 있다면 그대로 놔둔다.)
3. 선택되지 않는 노드들 중 가중치가 가장 작은 노드를 선택한다.
4. 2번과 3번을 모든 노드가 선택될 때까지 반복한다.`O(V+E)`

이 때의 시간복잡도는 `O(V^2)` 이다.
3번에서 가중치가 가장 작은 노드를 V번 찾는데에 O(V)\*V만큼의 시간이 필요하기 때문이다.
다음과 같이 힙을 이용하면 시간복잡도를 줄일 수 있다.
<br>

<방법2> - `힙`을 이용
![image](https://github.com/user-attachments/assets/30836948-fb6f-47b9-b9ec-fca777daaeb7)

##### (a,0)은 (노드,가중치)를 의미한다. 처음 가중치는 루트는 0, 나머지는 무한대로 초기화한다.

1. 최솟값인 루트 노드를 선택한다.
2. heapify
3. 선택한 노드와 연결된 노드(이미 선택된 노드들 제외) 까지의 가중치(cost)와, predecessor를 업데이트하고, heapify한다.
4. 선택한 노드와 연결된 모든 노드들에 대해 3번을 반복한다.
5.

<br>
<br>
<br>

### kruskal's algorithm
