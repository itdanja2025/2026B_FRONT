/*예제 1: 자기소개 객체 만들기*/
// 여러개 자료들을 저장하는 방법 : 1.배열[ ] 인덱스식별 2. 객체{ } 속성명식별
// 서로 다른 자료들의 의미/용도 다르면 객체 권장 , 같으면 배열 권장
let person = { name : "유재석" , age : 40 , 'city' : '서울시특별시' }
console.log( person )

/*예제 2: 객체의 값(Value) 출력하기*/
const book = { title: 'Cracking the Coding Interview', author: 'Gayle Laakmann McDowell', pages: 500 };
let values =  Object.values( book)  // 객체내 모든 속성값 (배열)반환
for( let index = 0 ; index <= values.length-1 ; index++ ){ // 인덱스가 0부터 마지막 인덱스까지 1씩 증가 반복 
    console.log( values[index] )
}
/*예제 3: 객체에 속성 추가 및 삭제하기*/ 
const person2 = { name: '김코딩', age: 25, }; 
person2.email = 'aaaa@aaaa.com'
delete person2.age
console.log( person2 )

/* 예제 4: 객체 속성 값 계산하기*/
const product = { name: '노트북', price: 1200000, stock: 50 }; 
console.log( product.price * product.stock )

/* 예제 5: 대괄호 표기법 사용하기*/
const user = { name: '김코딩','job-title': '개발자'}; 
// console.log( user.job-title ) // 주의할점 : 속성명에 특수문자가 있거나 변수로 정의한 경우에는 .점이 아닌 [ ] 사용
console.log( user['job-title'] )

/*예제 6: 중첩된 객체 다루기*/
const student = {  name: '이학생', age: 25, address: { city: 'Seoul', zipCode: '12345' } };
console.log( student.address.city ) // 방법1                    3+3+2
let 주소 = student.address; console.log( 주소.city ); // 방법2  let a = 3+3 ; a+2

/* 예제 7: 객체에 특정 속성이 있는지 확인하기(  in 연산자 ) */
const character = {  name: '전사', hp: 200, mp: 50 }; 
console.log( 'level' in character )

/* 예제 8: Object.keys()와 Object.values() */
const country = {name: '대한민국', capital: '서울', population: 51780000 } 
// 한줄에 2개 이상의 명령어 단위 작성시 ;세미콜론으로 구분하기
let 속성명목록 = Object.keys( country ); console.log( 속성명목록 );  
let 속성값목록 = Object.values( country ); console.log( 속성값목록 )

/* 예제 9: 객체와 조건문 활용하기
다음 inventory 객체는 각 상품의 재고를 나타냅니다. for 반복문과 if 조건문을 사용하여 재고가 10개 미만인 상품의 이름을 콘솔에 출력하시오.
const inventory = { apple: 15, banana: 5, orange: 20, grape: 8 }; */

/* 예제 10: 객체 배열 순회하기
다음은 여러 학생의 정보를 담은 students 배열입니다. for 반복문을 사용하여 각 학생의 이름과 전공을 "이름: 전공" 형태로 콘솔에 출력하시오.  
const students = [ { name: '김철수', major: '컴퓨터공학' },  { name: '이영희', major: '경영학' },  { name: '박지성', major: '체육교육' } ];*/

/* 예제 11: 공공데이터 포털 : 인천 부평구 인구 현황 테이블 만들기
[구현 조건]
  1. 공공데이터 포털에서 '인천광역시 부평구_인구 현황' 의 open API 신청하여 결과를 복사하여 'response' 변수에 저장하시오.
  let response = {}
  2. response 객체 안의 data 배열을 반복문을 사용하여 순회합니다.
  3. 각 동(행)의 정보를 표시할 HTML <table> 태그를 문자열로 만듭니다.
  4. 테이블의 각 셀에는 '동별', '세대수', '인구수(계)', '인구수(남)', '인구수(여)' 정보가 순서대로 포함되어야 합니다.
  5. 최종적으로 완성된 HTML 테이블 문자열을 document.write() 사용하여 화면에 출력합니다.
[ 공공데이터 open API 신청 ]
  1. 공공데이터 포털 : https://www.data.go.kr
  2. 회원가입/로그인
  3. '부평구 인구' 검색
  4. '인천광역시 부평구_인구 현황' Open API를 찾아 [활용신청] 버튼을 누르고, 절차에 따라 인증키를 발급받습니다.
  5. 인증키 설정 ( Encoding , Decoding 순서대로 대입하여 설정 )
  6. 인증키 설정 후 'API 목록' 에서  [Open Api 호출] 합니다.
  7. **실행 결과(JSON)**를 전체 복사합니다.  
*/