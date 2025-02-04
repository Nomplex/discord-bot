class DabloonBank {
	constructor() {
		if (DabloonBank.instance)
			return DabloonBank.instance

		this.bank = {
			"nom": 0,
			"patrick": 1000,
		}

		DabloonBank.instance = this;
	}

	addDabloons(player, amount) {
		this.bank[player] += amount;
		return true
	}

	removeDabloons(player, amount) {
		if (this.bank[player] - amount >= 0) {
			this.bank[player] -= amount;
			return true;
		}

		return false;
	}

	setDabloons(player, amount) {
		this.bank[player] = amount;
		return true;
	}

	getDabloons(player) {
		return this.bank[player]
	}
}

module.exports = DabloonBank;
