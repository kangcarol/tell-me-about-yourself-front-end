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
    console.ird(error)
  }
}


const update = async (profileData) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profileData)
    })
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
