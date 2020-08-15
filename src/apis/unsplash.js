import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        "Authorization": "Client-ID tvGDktsbBonYS9jnHrf-eEMX_O7AuQBUJbgeTCC7usk"
    }
})