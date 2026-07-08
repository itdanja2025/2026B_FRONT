console.log( 'JS 실행 ')
// 한줄주석
/* 여러줄주석 */

// [1] 숫자타입  
// 1. 정수 
console.log( 10 )
console.log( typeof 10 ) // typeof 자료 , 해당 자료의 타입명 확인 
// 2. 실수 : 부동소수점( 컴퓨터가 실수 처리하는 방법 )
console.log( 3.14 )
console.log( typeof 3.14 )

// [2] 문자열타입 
// 1. ' , " , ` 감싼 자료 
console.log( '안녕' )
console.log( "안녕" )
console.log( `안녕` )
// 2. 문자열 연결 
console.log( '안녕' , '하세요' )
console.log( '안녕' + '하세요' )
console.log( `안녕 ${ 3 }`) // 문자열 템플릿 ? 문자열내 코드 포함
console.log( '안녕' + 3 )   // 문자열 + 숫자 => 문자열 
let a = 10
console.log( '안녕' + a )   // 문자열 + 변수(숫자) => 문자열 
console.log( `안녕 ${ a }`) // 문자열 템플릿은 `백틱으로 감싼 자료 안에 ${} 이용하여 (표현식)코드 포함 
// 3. 이스케이프(제어) 문자 , \ 백슬래시  
console.log( '\\안녕' )     // '\' 출력 
console.log( '\n안녕' )     // '\n' 줄바꿈
console.log( '\'안녕' )     // 문자열 감싼 기호 와 그자체 기호 구분
console.log( '\t안녕' )     // '\t' 들여쓰기

// [3] 불리언(논리) 타입
console.log( true )         // 참
console.log( false )        // 거짓
console.log( 10 > 3 )       // 비교연산자의 반환값 

// [4] undefined, null    ,    컴퓨터는 0 vs ' ' vs null(참조가없다) vs undefined(정의가없다) 모두 다르게 취급 
let 과일상자                // 변수선언 : let 변수명   
console.log( 과일상자 )     // undefined
let 채소상자 = null         // 변선선언ok 초기화ok ,
console.log( null )        // null

// [5] 배열 , 순서대로 나열 
// [ ] 대괄호 안에 , 쉼표 이용하여 여러개 자료들을 *하나의 자료* 표현 , *중첩 가능*
// 인덱스(색인) : [ ] 해당 배열내 저장된 자료들의 순서번호 , 0번 부터 시작  
let 배열변수 = [ '봄' , '여름' , '가을' , '겨울', [ '1학기' , '2학기' ] ]
console.log( 배열변수 )         // 배열 전체 호출 
console.log( 배열변수[0] )      // 특정 인덱스의 자료(요소값) 호출
console.log( 배열변수[4] )      // 4 인덱스의 자료 호출 

console.log( 배열변수[4][1] )   // 2학기
// vs 
let 요소값1 = 배열변수[4]    // (1) 4번 인덱스 요소 꺼내고 변수에 저장 
let 요소값2 = 요소값1[1]    // (2) 1번 인덱스 요소 꺼내고 변수에 저장 
console.log( 요소값2 )

// 2. 배열수정 , 변수명 = 새로운배열           * 변수(자료저장소) vs 배열(자료) * 
배열변수 = [ '유재석' , '강호동' ]      // 변수는 하나의 자료 저장하기 때문에 새로운 대입이 들어오면 기존 대입은 사라진다.
console.log( 배열변수 )
배열변수[0] = '유재석2'                  // 0번 인덱스(자리)에 유재석을 유재석2 변경한다.
console.log( 배열변수 )

// 3. 배열 요소 추가 
배열변수.push( '서장훈' )            // 마지막 자료 뒤에 새로운 자료 추가 
console.log( 배열변수 )

// 4. 배열 요소 삭제 , splice( 삭제할인덱스 , 개수 )
배열변수.splice( 0 , 1 )            // 0번 인덱스(자리)에 자료(요소) 1개 삭제한다.
console.log( 배열변수 )


