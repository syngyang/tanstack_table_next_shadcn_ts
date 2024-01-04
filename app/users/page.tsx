import { DataTable } from '@/components/data-table'
import {User,columns} from './columns'

async function getUsers (): Promise<User[]> {
    const res = await fetch(
        'https://(yourcode).mockapi.io/api/users/users'
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
