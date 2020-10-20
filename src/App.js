import React, { Component, Fragment } from 'react';
import EmployeeItem from './components/EmployeeItem';
import SortName from './components/SortName';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import populateTab from './employee_seed';
// getting random employee records
var employeesOriginal = populateTab();

class App extends Component {
  state = {
    employees: employeesOriginal,
    searchParam: "",
    sortColumn: [0, 0, 0, 0]
  }
  // this function handles 4 categories sorting ascending, descending or no sorting
  handleSort = event => {
    let columnArr = ["name", "phone", "email", "dob"];
    var str = event.target.innerHTML;
    // based on event it finds name of the category
    let sortColumnName = str.slice(0, str.search("<") - 1).toLowerCase();
    // then it retrieves category index
    let sortColumn = columnArr.indexOf(sortColumnName);
    // save state
    if (!(sortColumn === -1)) {
      let sortState = this.state.sortColumn;
      let searchP = this.state.searchParam;
      let employees = [];
      // sorting up,down and default case
      if (sortState[sortColumn] === 0) {
        sortState = [0, 0, 0, 0];
        employees = this.state.employees.sort((a, b) => (a[sortColumnName] > b[sortColumnName]) ? 1 : -1);
        sortState[sortColumn] = 1;
      } else if (sortState[sortColumn] === 1) {
        sortState = [0, 0, 0, 0];
        employees = this.state.employees.sort((a, b) => (a[sortColumnName] < b[sortColumnName]) ? 1 : -1);
        sortState[sortColumn] = 2;
      } else if (sortState[sortColumn] === 2) {
        sortState = [0, 0, 0, 0];
        employees = employeesOriginal;
        searchP = "";
        document.querySelector("input").value = "";
      }

      this.setState({ employees: employees, sortColumn: sortState, searchParam: searchP });
    }
  }
  // search filtering function. 
  handleSearch = event => {
    var searchParam = event.target.value;
    if (searchParam.length > 0) {
      // it check for arrearance of some keys combination and checking it in 4 different categories
      const employees = employeesOriginal.filter(employee =>
        (employee.name.toLowerCase().indexOf(searchParam.toLowerCase()) >= 0) ||
        (employee.email.toLowerCase().indexOf(searchParam.toLowerCase()) >= 0) ||
        ((employee.phone.toLowerCase().indexOf(searchParam.toLowerCase()) >= 0)) ||
        ((employee.dob.toLowerCase().indexOf(searchParam.toLowerCase()) >= 0)))
      this.setState({ employees: employees, searchParam: searchParam })
    }
    else {
      // if there is no records found it shows default values
      this.setState({ employees: employeesOriginal, searchParam: "" })
    }
  }
  render() {
    return (
      <Fragment>
        <Title><input type="text" placeholder="Search" onChange={this.handleSearch} /></Title>
        <Wrapper>

          <table >
            <thead>
              <tr>
                <th>Image</th>
                {/* SortName indicates symbol of the current sorting */}
                <th onClick={this.handleSort}>Name <SortName status={this.state.sortColumn[0]} /></th>
                <th onClick={this.handleSort}>Phone <SortName status={this.state.sortColumn[1]} /></th>
                <th onClick={this.handleSort}>Email <SortName status={this.state.sortColumn[2]} /></th>
                <th onClick={this.handleSort}>DOB <SortName status={this.state.sortColumn[3]} /></th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee, i) => (
                <EmployeeItem
                  employeeId={employee.id}
                  image={employee.image}
                  name={employee.name}
                  phone={employee.phone}
                  email={employee.email}
                  dob={employee.dob}
                  key={"employee-" + i}

                />
              ))}
            </tbody>
          </table>
        </Wrapper>
      </Fragment>
    );
  }
}

export default App;
