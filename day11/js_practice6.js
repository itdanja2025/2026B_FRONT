// 1. 설계/ 함수 : (1)매개변수/입력 : 나이 , (2)실행코드/처리 : 20세이상미만 분기 , (3)return/반환 : true/false 
function isAdult( 나이 ){
    if( 나이 >= 20 ){ return true; }
    else{ return false; }
} // f end 

// 3. (1) 입력: 배열  (2) 처리: 반복문으로긴단어찾기 (3)반환: 긴단어반환  
// 자판기 : 1. 1000원,3번   2. 3번이1000이하검사   3. 3번(콜라)와잔돈,선택불가능
const words = [ 'apple' , 'banana' , 'kiwi' , 'strawberry' ]
function findLongesWord( 문자열배열 ){
    // .length : 문자열 길이 반환 속성 
    let max = 문자열배열[0] // 첫번째 요소/값이 가장 큰 값으로 지정 // apple
    for( let index = 1 ; index <= 문자열배열.length-1 ; index++ ){
        // 만약에 max에 저장된 문자열길이 보다 index번째 문자열길이가 이상이면 
        if( max.length <= 문자열배열[index].length ){
            max = 문자열배열[index] // max에 index번째 문자열 대입 
        } // if end 
    } // for end 
    return max;
} // f end 
console.log( findLongesWord( words ) )


