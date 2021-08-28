import 'dotenv/config'

import * as x from 'cloudinary'

const cloudinary = x.v2


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true
})

export default cloudinary