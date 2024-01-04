import { DataTable } from '@/components/data-table'
import {User,columns} from './columns'

async function getUsers (): Promise<User[]> {
    // https://658ad7f7ba789a962237fc33.mockapi.io/api/users/:endpoint 에서 New resource 밑에 users 100의 users를 endpoint 로 사용해야 함
    const res = await fetch(
        'https://658ad7f7ba789a962237fc33.mockapi.io/api/users/users'
    )
    const data = await res.json()
    return data;
}

const UsersPage = async () => {
  const data = await getUsers();
  return (
    <section className='py-24'>
        <div className="container">
            <h1 className='text-3xl font-bold'>All Users</h1>
            <DataTable columns={columns} data={data} />
        </div>
    </section>
  )
}

export default UsersPage