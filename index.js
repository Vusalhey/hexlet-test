  import _ from 'lodash';

  export default function solution(content){
    // BEGIN
    // step 1
  let result1 = content.split('\n').slice(2);
  
  console.log(`Count: ${result1.length}`);
  // step 2
  const idealForm = result1.map((e) => e.slice(2).split(',')).slice(0, -1);
  const result2 = idealForm.map((n) => n[7]);
  const uniq = _.uniq(result2).sort().join(', ');
  console.log(`Cities: ${uniq}`);
  // step 3
  const humidity = idealForm.map((i) => i[3]);
  const max = Math.max(...humidity);
  const min = Math.min(...humidity);
  console.log(`Humidity: Min: ${min}, Max: ${max}`);
  // step 4
  const hottest = idealForm.map((r) => r[1]);
  const result4 = idealForm.sort((a, b) => b[1] - a[1])[0];
    console.log(`HottestDay: ${result4[0]} ${result4[7]}`);
  
  
  // END
}