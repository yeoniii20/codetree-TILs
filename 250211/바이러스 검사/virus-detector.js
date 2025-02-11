const fs = require('fs');

function minExaminers(n, customers, teamLeadMax, teamMemberMax) {
    let left = 1, right = 1_000_000_000, result = right;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let requiredExaminers = 0;
        
        for (let i = 0; i < n; i++) {
            let remaining = customers[i];
            
            // 1. 팀장이 검사할 수 있는 고객 우선 검사
            if (remaining > 0) {
                remaining -= teamLeadMax;
                requiredExaminers++;
            }
            
            // 2. 남은 고객을 팀원이 검사
            if (remaining > 0) {
                requiredExaminers += Math.ceil(remaining / teamMemberMax);
            }
        }
        
        if (requiredExaminers <= mid) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return result;
}


const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const customers = input[1].split(' ').map(Number);
const [teamLeadMax, teamMemberMax] = input[2].split(' ').map(Number);

console.log(minExaminers(n, customers, teamLeadMax, teamMemberMax));