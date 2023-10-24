import { useState } from 'react'

interface TableData {
  name: string
  email: string
}
const Home = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
  })

  const [tableData, setTableData] = useState<TableData[]>([])
  const [editClick, setEditClick] = useState(false)
  const [editIndex, setEditIndex] = useState(-1)

  const handleChange = (e: any) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (editClick) {
      const tempTableData = tableData
      Object.assign(tempTableData[editIndex], inputs)
      setTableData([...tempTableData])
      setEditClick(!editClick)
      setInputs({
        name: '',
        email: '',
      })
    } else {
      setTableData([...tableData, inputs])
      setInputs({
        name: '',
        email: '',
      })
    }
  }

  const handleDelete = (index: number) => {
    const filterData = tableData.filter((item, i) => i != index)
    setTableData(filterData)
  }

  const handleEdit = (index: number) => {
    const tempData = tableData[index]
    setInputs({ name: tempData.name, email: tempData.email })
    setEditClick(true)
    setEditIndex(index)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div style={{ width: '300px' }}>
        <h2>CRUD Operation</h2>
        <form onSubmit={handleSubmit}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <label>Name: </label>
            <input
              placeholder="Enter your name"
              name="name"
              value={inputs.name}
              onChange={handleChange}
            />
            <label>Email: </label>
            <input
              placeholder="Enter your email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            />
            <button type="submit">{editClick ? 'Update' : 'Add'}</button>
          </div>
        </form>
      </div>

      {/* Table Data */}
      <div style={{ width: '100%', justifyContent: 'space-between' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            border: '1px solid #ddd',
          }}
        >
          <thead>
            <tr>
              <th style={{ padding: '8px' }}>Name</th>
              <th style={{ padding: '8px' }}>Email</th>
              <th style={{ padding: '8px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  {data.name}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  {data.email}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
