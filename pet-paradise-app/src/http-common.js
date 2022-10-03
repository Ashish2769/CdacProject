import axios from 'axios'

export default axios.create({
  // baseURL: 'http://localhost:8080',
  baseURL: 'http://petparadise-env.eba-hnv6tun3.ap-south-1.elasticbeanstalk.com',
  headers: {
    'Content-Type': 'application/json',
  },
})