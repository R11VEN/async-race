
class GarageWork {

    url = 'http://127.0.0.1:3000';

    async getCars(page: string) {
        const response = await fetch(`${this.url}/garage?_page=${page}&_limit=7`);
        const data = await response.json();
        const totalCount = response.headers.get('X-Total-Count');
        return [data, totalCount];
    }

    async getCar(id: number) {
        const response = await fetch(`${this.url}/garage/${id}`);
        const data = await response.json();
        return data;
    }

    async createCar(name: string, color: string) {
        const response = await fetch(`${this.url}/garage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': name,
                'color': color,
            })
        });
        const data = await response.json();
        return data;
    }

    async upgradeCar(name: string, color: string, id: number) {
        const response = await fetch(`${this.url}/garage/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': name,
                'color': color,
            })
        });
        const data = await response.json();
        return data;
    }

    async deleteCar(id: number) {
        const response = await fetch(`${this.url}/garage/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        return data;
    }
}

export const garageWork = new GarageWork();
