import Layout from './_components/Layout'
import MyBookings from './_components/MyBookings'
import SidebarLayout from './_components/SideNav'
import './App.css'

function App() {

  return (
    <>
      <Layout>
        <SidebarLayout>
          <MyBookings />
        </SidebarLayout>
      </Layout>
    </>
  )
}

export default App
