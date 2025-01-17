import Header from "../Header";
import Footer from "../Footer";

const Layout =({children, employees, setFilteredEmployees, setIsAdding})=>{
    return(
        <div className="flex flex-col min-h-screen">
        <Header
        employees={employees}
        setFilteredEmployees={setFilteredEmployees}
        setIsAdding={setIsAdding}
      />
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    )
}
export default Layout;