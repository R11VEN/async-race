import { winerType } from '../../types/types';
import { winers } from './getWiners';

class DeleteWiner {

    url = 'http://127.0.0.1:3000';

    async delete(id: number) {
        const getWiners = await winers.getWiners(false);
        if(getWiners) {
            const allWiners: winerType = getWiners[0];
            const winer = allWiners.find(item => item.id === id);
            if(winer) {
                const response = await fetch(`${this.url}/winners/${winer.id}`, {
                    method: 'DELETE',
                });
                const data = await response.json();
                return data;
            }
        }

    }
}

export const deleteWiner = new DeleteWiner;