rafce



const uploadFile = (e) => {
  let file = e.target.files[0];

  let fileRef = ref(storage_bucket, file.name);

  const uploadTask = uploadBytesResumable(filerRef, file);

  uploadTask.on('state_shanged', (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  })
}