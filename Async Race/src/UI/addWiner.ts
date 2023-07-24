
class AddWiner {

    url = 'http://127.0.0.1:3000';

    async createWinner(id: number, wins: number, time: number) {
        const response = await fetch(`${this.url}/winners`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'id': id,
                'wins': wins,
                'time':  time
            })
        });
        const data = await response.json();
        return data;
    }
}

export const addWiner = new AddWiner;