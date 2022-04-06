import User from './User'

export default function Header() {
  return (
    <header className='flex justify-between P-5 text-sm text-gray-700'>
      <div className='flex space-x-4 items-centre'>
        <p className='link'>About</p>
        <p className='link'>Store</p>
      </div>
      <div className='flex space-x-4 items-centre'>
        <p className='link'>Gmail</p>
        <p className='link'>Images</p>
        <User />
      </div>
    </header>
  )
}
