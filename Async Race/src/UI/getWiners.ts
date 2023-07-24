class Winers {
    url = 'http://127.0.0.1:3000';

    async getWiners(page: string | boolean, sort?: string, order?: string) {
        if(sort) {
            const response = await fetch(`${this.url}/winners?_page=${page}&_limit=10&_sort=${sort}&_order=${order}`);
            const data = await response.json();
            const totalCount = response.headers.get('X-Total-Count');
            return [data, totalCount];
        } else if (typeof page === 'boolean') {
            const response = await fetch(`${this.url}/winners`);
            const data = await response.json();
            const totalCount = response.headers.get('X-Total-Count');
            return [data, totalCount];
        } else if (typeof page === 'string'){
            const response = await fetch(`${this.url}/winners?_page=${page}&_limit=3`);
            const data = await response.json();
            const totalCount = response.headers.get('X-Total-Count');
            return [data, totalCount];
        }
    }

    async getWiner(id: number) {
        const response = await fetch(`${this.url}/winners/${id}`);
        const data = await response.json();
        return data;
    }

    async updradeWiners(id: number, wins: number, time: number) {
        const response = await fetch(`${this.url}/winners/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'wins': wins,
                'time': time
            })
        });
        const data = await response.json();
        //console.log(data);
        return data;
    }
}

export const winers = new Winers;