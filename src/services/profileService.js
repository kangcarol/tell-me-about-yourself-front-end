import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function addPhoto(photoData, profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}

const show = async (id) => {
  try {
      const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}


const update = async (id,profileData, photo) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profileData)
    })
    const json = await res.json()
    if (json.err){  
      throw new Error(json.err)
    } else if (photo) {
      const photoData = new FormData()
      photoData.append('photo',photo)
      return await addPhoto(
        photoData,
        tokenService.getUserFromToken().profile
      )
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export { 
  getAllProfiles, 
  show,
  update,
  addPhoto 
}
