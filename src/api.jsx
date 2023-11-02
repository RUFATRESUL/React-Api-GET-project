import axios from 'axios';
const SearchImage = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID 58H9eWV2CzIrf6DqDS75nBLN1CxR0sNVAxROlWT3Do8',
      },
      params:{
        query:term,
      },
    });
    debugger;
    return response.data.results;
  }

  export default SearchImage;