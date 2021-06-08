import axios from 'axios';
import firebase from 'firebase';


const ApiService = {
    
    async getTeam(params: string) {
        const token = await firebase.auth().currentUser?.getIdToken();
        return axios.get(`/api/team/${params}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(error => {
            throw new Error(`Team Metrics ${error}`);
        });
    },

    async getNames() {
        const token = await firebase.auth().currentUser?.getIdToken();
        return axios.get(`/api/names`,{
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).catch(error => {
            throw new Error(`Team Names ${error}`)
        });
    }
};

export default ApiService;