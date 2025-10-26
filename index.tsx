import { type JSX, useState } from 'react'

interface IMyComp {
  name: string
	age: number
}
      
const MyComp: React.FC<IMyComp> = ({ name, age }: IMyComp): JSX.Element => {
  const [isActivated, setIsActivated] = useState<string>("")

  return (
    <div>
      <p>Tu edad es {age}</p>
    </div>
  )
}
  
export default MyComp;