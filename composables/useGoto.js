export default function () {
  const router = useRouter()

  const gotoProductDetail = (id) => {
    router.push({
      path: `/detail/${id}`,
    })
  }

  return {
    gotoProductDetail,
  }
}
