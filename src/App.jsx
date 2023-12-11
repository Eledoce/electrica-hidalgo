import coflex from './assets/coflex.svg'
export default function App() {
  return (
    <div className=" bg-gray-800">
      App
      <img
        src={coflex}
        alt="coflex"
        className="bg-red-50 !text-lime-400"
        style={{ fill: 'red' }}
      />
    </div>
  )
}
