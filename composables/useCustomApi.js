export default function () {
  const fetchCreateCustom = async (mail) => {
    return await $fetch('/api/custom', {
      method: 'POST',
      body: {
        mail,
      },
    })
  }

  return {
    fetchCreateCustom,
  }
}
