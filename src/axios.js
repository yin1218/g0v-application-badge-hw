import axios from 'axios';
const instance = axios.create({ baseURL: 'https://badge.g0v.tw/_/user/api/' });


const getUserInfo = async(props) => {
    const {name} = props;
    try {
        const { data } = await instance.get(name);
        return data;
    }
    catch (error) {
        console.log("error");
    }
}


export {getUserInfo};
