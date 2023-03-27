import { useSelector } from 'react-redux'

export default function () {
  const { theme } = useSelector(state => state.theme)
  return theme
}
