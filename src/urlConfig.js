export const api = 'http://localhost:1000/api';
export const generatePublicUrl = (fileName) => {
return `http://localhost:2000/public/${fileName}`;
}

// export const generatePublicUrl = (fileName) => { 
//     return `${baseUrl}/public/${fileName}`;
//   }; 