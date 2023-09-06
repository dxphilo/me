---
title: How to upload image files to backend

subtitle: How to upload image files to backend

description: How to upload image files to backend

alt: How to upload image files to backend

excerpt: How to upload image files to backend

imgurl: https://images.pexels.com/photos/2693208/pexels-photo-2693208.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2

tags: ["IMAGE UPLOAD","FormData" ]

attribution: Photo by Anni Roenkae from Pexels

createdAt: 2023-08-05
---

## Introduction

When developing frontend applications, in some instances we may need to allow our users to upload image files. Later on we can process the image file, and send it to the backend for further processing and storage whenever necessary. Most common image file formats are PNG, JPEG and JPG.

When a user uploads an image, we must first embed the file contents either as base64 or as file and append the info to formData before sending it with the request body.

When embedding image files into formData, it is essential to include them as a key-value pair. The key should represent the name of the body data containing the image file, and the corresponding value should contain the actual image file. We also need to ensure that we set the correct header encoding type to multipart/form-data.

multipart/form-data is an HTML form encoding type used when our forms include any `<input type="file">` elements. When a form contains file inputs, it is essential to use "multipart/form-data" as the enctype attribute in the HTML form tag to ensure proper data transmission and processing on the server side.

formData provides an object that we can manipulate using various operations. Some of the most common operations include:

- formData.append(): Used to add a new value to the specified object key.
- formData.get(): Used to retrieve the first value associated with a particular key.
- formData.delete(): Used to remove a key/value pair from the formData object.

To find out more about the operations possible with formData, you can refer to the documentation [link_here](https://developer.mozilla.org/en-US/docs/Web/API/FormData).

```js{1,3-5}[index.vue]
<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios';
const selectedFile = ref();
async function onFileSelected(event: Event) {
  if (!event.target)
    return
  const target = event.target as HTMLInputElement
  if (!target.files) {
    // toastError('No image selected')
    return
  }
  console.log(target.files)
  selectedFile.value = target.files
}
async function submitImageForm(){
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try{
  // Your backend endpoint for image upload
    const uploads_url = 'https://api.your-backend-url.com/upload';
    let formData = new FormData();
    formData.append("photo", selectedFile.value);
    const res = await axios.post(`${uploads_url}`, formData, config);
    const data = await res.json();
    console.log(data)
  }catch(error: unknown){
  // Catch errors here and handle them accordingly
    if (axios.isAxiosError(error) && error.response) {
      console.log(error.response.data.message)
      return
    }
    // handle other errors here 
    console.log(error)
  }
}
</script>

<template>
    <h2>Upload Image</h2>
    <form method="post" enctype="multipart/form-data">
        <label for="image">Select an image to upload:</label>
        <input type="file" id="image" name="image" accept="image/*" @change="onFileSelected">
        <br>
        <input type="submit" value="Upload Image" @click="submitImageForm">
    </form>
</template>


```

## Image upload

One important thing to note is to ensure that you use the correct key-name for the formData that is consistent with what the backend is expecting. This is essential because it serves as an identifier for the uploaded image data, and the backend will use it to access the image in the request payload.

When you need to upload multiple images, you can pass the multiple attribute to the input field like so.

``` js{1,3-5}[index.vue]
<input
  id="image"
  type="file"
  name="image"
  accept="image/*"
  @change="onFileSelected"
  multiple
/>
```

When you log the uploaded image content to the console, you will receive metadata similar to the example shown in the screenshot below.


Image upload metadata, Screenshot from Author

## Conclusion

We have seen how we can upload an image file, extract the image data, append it to the formData, and send it to the backend with the appropriate header encoding type.

It would mean a lot if you share this piece with others. If you have any question, suggestion or want to chat reach on X at [@amjohnphilip](https://twitter.com/amjohnphilip)