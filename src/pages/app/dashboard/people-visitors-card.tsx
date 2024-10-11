import { UserMultipleIcon } from 'hugeicons-react'

export function PeopleVisitorsCard() {
  return (
    <div className="bg-white py-3 pl-3 pr-7 rounded-3xl flex items-center gap-4">
      <div className="bg-blue-base/30 p-6 rounded-2xl">
        <UserMultipleIcon className="size-10 text-gray-300" />
      </div>
      <div>
        <h2 className="text-gray-400 font-bold font-dm-sans text-3xl">1.259</h2>
        <span className="text-base text-gray-300">Pessoas visitantes</span>
      </div>
    </div>
  )
}
