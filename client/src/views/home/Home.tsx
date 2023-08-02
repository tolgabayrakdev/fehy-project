import { Link } from "react-router-dom"

type Props = {}

export default function Home({ }: Props) {
  return (
    <div>
      <h4 className="text-xl text-center text-blue-600 mt-3">Welcome the fehy</h4>
      <div className="flex justify-center m-auto rounded-md hover:bg-gray-50 duration-300 text-lg mt-4 border-2 w-36">
        <Link to="/d" className="">
          Start here.
        </Link>

      </div>

    </div>
  )
}