import apiUrl from '../../apiConfig';
import Axios from 'axios'

export const indexall = (user) => {
    console.log(user)
    return  Axios({
        method:'GET',
        url: apiUrl + '/allpins',
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}

// export const index = (user) => {
//     console.log(user)
//     return  Axios({
//         method:'GET',
//         url: apiUrl + '/pins',
//         headers:{
//             "Authorization":`Bearer ${user.token}`
//         }
//     })
// }

export const show = (user, pinId) => {
    return Axios({
        method:'GET',
        url: apiUrl + `/pins/${pinId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}


export const create = (user,newPin) => {
    return Axios({
        method:'POST',
        url:apiUrl + '/pins',
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            pin:newPin
        }
    })
}


export const destroy = (user,memeId) => {
    return Axios({
        method:"DELETE",
        url:apiUrl + `/memes/${memeId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}


export const update = (user,updateMeme,memeId) => {
    return Axios({
        method:'PUT',
        url:apiUrl + `/memes/${memeId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            meme:updateMeme
        }
    })
}