import axios from 'axios';

const baseURL = 'http://localhost:3001';

const service = axios.create({baseURL});

const testAPI = {
    answer: (response, isCorrect, currentScore) => {
        return service.post('/api/answer', { response, isCorrect, currentScore })
    }
}

export { testAPI };