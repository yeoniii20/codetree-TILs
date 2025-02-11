const fs = require('fs');

function minExaminers(n, customers, teamLeadMax, teamMemberMax) {
    let totalExaminers = 0;

    for (let i = 0; i < n; i++) {
        let remaining = customers[i];

        // 1. 팀장이 최소 1명 필요하고, 팀장이 최대 검사할 수 있는 만큼 처리
        remaining -= teamLeadMax;
        totalExaminers++;

        // 2. 남은 고객을 팀원이 검사
        if (remaining > 0) {
            totalExaminers += Math.ceil(remaining / teamMemberMax);
        }
    }

    return totalExaminers;
}

// 입력 받기
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const customers = input[1].split(' ').map(Number);
const [teamLeadMax, teamMemberMax] = input[2].split(' ').map(Number);

console.log(minExaminers(n, customers, teamLeadMax, teamMemberMax));
