import _ from 'lodash';

const arr = [1, 2, 'telerik aCademy', 'john', 'mAriA', 32, 'we ARE the CHAMPIONS'];
const capitalArr = [];

for (const item of arr) {
  if(_.isString(item)){
    capitalArr.push(_.capitalize(item));
  }
}

console.log(capitalArr);
