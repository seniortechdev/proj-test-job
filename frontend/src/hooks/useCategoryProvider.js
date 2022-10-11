import axios from 'axios'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { categoryApi } from '../apis'
import { categoryAtom } from '../atom/CategoryAtom'

const useCategoryProvider = () => {
  const [category, setcategory] = useRecoilState(categoryAtom)
  useEffect(() => {
    if (!category[0]) {
      axios
        .get(categoryApi)
        .then((res) => {
          setcategory(res.data.categories)
        })
        .catch((err) => {
          console.log(err)
          setcategory([])
        })
    }
  }, [])
  return category
}

export default useCategoryProvider
