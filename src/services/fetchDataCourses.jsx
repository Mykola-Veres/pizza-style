import axios from 'axios';

export function fetchCourseData() {
  const fetchCoursesData = axios
    .get(`https://w79dlmp9i7.api.quickmocker.com`)
    .then(response => {
      console.log(
        'response.data',
        response.data.map(item => console.log(item))
      );
    });
  return fetchCoursesData;
}

// https://drive.google.com/file/d/10pdvHxcD1nnUSLERFRU-NANOcpSLEpo9/view
// https://drive.google.com/file/d/10pdvHxcD1nnUSLERFRU-NANOcpSLEpo9/view
