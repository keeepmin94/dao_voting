# daoApp
토이 프로젝트로 만들고 있는 dao프로젝트입니다.
contract, front 등 조금씩 수정하여 실 사용 가능할 정도로 만드는것이 목표입니다.

##issue

### 0207

1. getUser 리턴값, 파라미터 두개 확인
2. 1_voting_migration.js 생성
3. npm install @truffle/hdwallet-provider
4. truffle test
5. truffle compile
6. truffle migrate --network goerli --reset
7. Ganache 베포
8. https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4907.md

### 0214

1. getUSer msg.sender 문제 call({ from: userAccount })로 해결
2. 나머지 sol함수들 구현

### 0221

1. 기능적으로는 구현 완료
2. contract 좀 더 보완할 것
3. 화면 꾸미기
