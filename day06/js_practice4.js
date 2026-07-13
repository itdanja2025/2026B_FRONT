/* 문제 1: 배열에서 최댓값 찾기: 주어진 숫자 배열에서 가장 큰 값을 찾아 콘솔에 출력하는 프로그램을 작성하시오. */
// let numbers = [23, 5, 67, 12, 88, 34];
// 반복문 없이 풀이 
// let max = numbers[0] ; // 배열명[인덱스] : 특정한 인덱스 번쨰 요소 값 호출 // 첫번째 값을 최댓값 지정
// if( max < numbers[1] ){ max = numbers[1] } // 만약에 [1] 인덱스 요소 값이 더 크면 최댓값으로 지정 
// if( max < numbers[2] ){ max = numbers[2] } //       [2]
// if( max < numbers[3] ){ max = numbers[3] } //       [3]
// if( max < numbers[4] ){ max = numbers[4] } //       [4]
// if( max < numbers[5] ){ max = numbers[5] } //       [5]
// console.log( max )

// vs 반복문 풀이 
// 반복되는 코드 : f( max < numbers[?] ){ max = numbers[?] }
// 반복없는 코드( 패턴: 1 부터 5까지 1씩증가 ) 
let numbers = [23, 5, 67, 12, 88, 34];
let max = numbers[0]
for( let index = 1 ; index <= 5 ; index ++ ){ 
    if( max < numbers[index] ){ max = numbers[index] }
}
console.log( max )

/*문제 2: 별 찍기 (기본 역삼각형) :for 중첩 반복문을 사용하여 아래와 같은 모양의 별을 출력하시오.
            행                      열                  = 바둑판 = 구구단( 단=행, 곱=열 )
            line(줄 \n )            별( * )
*****       line = 1                star = 1 2 3 4 5 
****        line = 2                star = 1 2 3 4 
***         line = 3                star = 1 2 3 
**          line = 4                star = 1 2 
*           line = 5                star = 1
*/
// line은 1부터 5까지 1씩증가 하면서 '\n' 출력
// star은 1부터 (마지막줄수-현재줄수+1) 1씩증가 하면서 '*' 출력     // 줄 마다 별 출력 ? 별 마다 줄 출력 ?
let output = '' // 출력할 내용물을 저장할 변수 
for( let line = 1 ; line <= 5 ; line++ ){
    for( let star = 1 ; star <= 5 - line + 1 ; star++ ){
        output += '*'
    }
    // 줄바꿈 
    output = output + '\n' // vs output += '\n'
} // for end 
console.log( output )

/*문제 3: 배열에서 특정 문자 찾기 (break 활용)
다음 사용자 이름 배열에서 이름에 '솔' 이라는 글자가 들어간 첫 번째 사용자를 찾으면, 해당 사용자의 이름을 출력하고 반복문을 종료하시오.*/
// * 반복문 과 배열 관계 : 배열의 인덱스는 0부터 자료들을 저장하는 번호 이므로 반복문에서 0부터 마지막인덱스까지
let userNames = ['김하준', '이서아', '박솔민', '최도윤'];
// 배열의 마지막 인덱스 : 배열명.length - 1 
for( let index = 0 ; index <= userNames.length - 1 ; index++ ){
    if( userNames[index].indexOf('솔') != -1 ){  // 문자열은 배열이다.
        console.log( userNames[ index ] )
        break // for탈출/종료 // .indexOf( 찾을값 ) : 찾을값이 존재하면 인덱스 반환하고 없으면 -1 반환
    }
} // for end 
/*문제 4: 2차원 배열의 모든 요소 출력하기: 다음과 같은 2차원 배열(좌석표)이 있습니다. 중첩 for 반복문을 사용하여 모든 좌석의 값을 순서대로 출력하시오.*/
// 2차원 배열( 배열의 중철 ) , for 중첩 == 행과열(엑셀)
let seatLayout = [ ['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']  ];
// 1. 행 먼저 반복문 이용하여 조회한다.
for( let row = 0 ; row <= seatLayout.length - 1 ; row++ ){ //  0행 부터 2행 까지 1씩 증가하면 행 출력 
    // 2. 반복문 이용하여 열 조회한다.
    for( let col = 0 ; col <= seatLayout[row].length - 1 ; col++ ){ // 0열 부터 2열 까지 1씩 증가하면서 열 출력 
        console.log(  seatLayout[row][col] )
    } // for2 end 
} // for1 end 
