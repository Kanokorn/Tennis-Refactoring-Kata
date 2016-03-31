var TennisGame1 = function() {
    this.m_score1 = 0;
    this.m_score2 = 0;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

TennisGame1.prototype.isDuece = function() {
    return this.m_score1 === this.m_score2 && this.m_score1 > 2;
}

TennisGame1.prototype.isAll = function() {
    return this.m_score1 === this.m_score2 && this.m_score1 <= 2;
}

TennisGame1.prototype.scoreGreater40 = function() {
    return (this.m_score1 >= 4 || this.m_score2 >= 4);
}
TennisGame1.prototype.isPlayer1Adv = function() {
    return  this.scoreGreater40() && (this.m_score1 - this.m_score2) === 1;
}

TennisGame1.prototype.isPlayer2Adv = function() {
    return this.scoreGreater40() && (this.m_score2 - this.m_score1) === 1;
}

TennisGame1.prototype.isPlayer1Win = function() {
    return this.scoreGreater40() && (this.m_score1 - this.m_score2) >= 2;
}

TennisGame1.prototype.isPlayer2Win = function() {
    return this.scoreGreater40() && (this.m_score2 - this.m_score1) >= 2;
}

TennisGame1.prototype.getScore = function() {
    if (this.isDuece()) {
        return "Deuce";
    }

    if (this.isAll()) {
        return scoreLabel(this.m_score1) + "-All";
    }

    if (this.isPlayer1Adv()) {
        return "Advantage player1";
    }

    if (this.isPlayer2Adv()) {
        return "Advantage player2";
    }

    if (this.isPlayer1Win()) {
        return "Win for player1";
    }

    if (this.isPlayer2Win()) {
        return "Win for player2";
    }

    return scoreLabel(this.m_score1) + "-" + scoreLabel(this.m_score2);
};

function scoreLabel(score) {
    switch (score) {
        case 0:
            return "Love";
        case 1:
            return "Fifteen";
        case 2:
            return "Thirty";
        case 3:
            return "Forty";
    }
}

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
