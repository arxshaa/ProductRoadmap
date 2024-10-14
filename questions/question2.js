const matchList = [
    ["mu", "city"],
    ["munchen", "mu"],
    ["city", "munchen"]
];
  
    const resultMatch = [1, 0, 1];
    
    const generateWinner = () => {
        const scores = {};
    
        matchList.forEach((match, index) => {
        const [home, away] = match;
        const result = resultMatch[index];
    
        if (result === 1) {
            scores[away] = (scores[away] || 0) + 3;
        } else if (result === 0) {
            scores[home] = (scores[home] || 0) + 3;
        }
        });
  
        let maxScore = 0;
        let winner = '';
    
        for (const team in scores) {
        if (scores[team] > maxScore) {
            maxScore = scores[team];
            winner = team;
        }
        }
    
        return winner.charAt(0).toUpperCase() + winner.slice(1);
    };
    
    const winner = generateWinner();
    console.log(winner);