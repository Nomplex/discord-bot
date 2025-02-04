class ChallengeController {
	constructor() {
		if (ChallengeController.instance) {
			return ChallengeController.instance;
		}

		this.challenges = [];
		ChallengeController.instance = this;
	}

	createChallenge(p1, p2) {
		const uid = this.createId(p1, p2);
		if (this.challenges.findIndex((e) => e === uid) !== -1) {
			return false;
		}

		console.log("Challenge Created");
		this.challenges.push(uid);
		//const challenge = new Challenge(uid, type);
		//this.challenges.push(challenge);

		return true;
	}

	deleteChallenge(uid) {
		const idx = this.challenges.findIndex((e) => e === uid);
		if (idx === -1) {
			return false;
		}

		console.log("Challenge Deleted");
		this.challenges.splice(idx, 1);

		return true;
	}

	createId(p1, p2) {
		const ids = [p1, p2].sort();
		const uid = `${ids[0]}-${ids[1]}`;
		return uid;
	}

}

module.exports = ChallengeController;
