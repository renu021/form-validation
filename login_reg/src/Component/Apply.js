import React from 'react'
import "./ApplyStyle.css"

const Apply = () => {
  return (
    <div className='regform-container'>
        <form className='reg-form'>

            <h1 className="reg-text"> Register Now!</h1>

            <table className="reg-table">
                <tbody>
                    <tr className="reg-row">
                        <td className="reg-table-data">
                            <label htmlFor="Name" className="reg-label">Name :</label>
                        </td>
                        <td className="reg-table-input">
                            <input type="text" className="form-input" id="Name" name="Name" required />
                        </td>
                    </tr>

                    <tr className="reg-row">
                        <td className="reg-table-data">
                            <label htmlFor="DOB" className="reg-label">Date of Birth :</label>
                        </td>
                        <td className="reg-table-input">
                            <input type="date" className="form-input" id='DOB' name="DOB" required/>
                        </td>
                    </tr>

                    <tr className="reg-row">
                        <td className="reg-table-data">
                            <label htmlFor="age" className="reg-label">Age :</label>
                        </td>
                        <td className="reg-table-input">
                            <input type="number" className="form-input" id='age' name='age' required/>
                        </td>
                    </tr>

                    <tr className="reg-row">
                        <td className="reg-table-data">
                            <label htmlFor="Gender" className="reg-label">Gender :</label>
                        </td>
                        <td className="reg-table-input">
                            <input type="radio" className="form-input" name='Gender' id='Gender' />Male
                            <input type="radio" className="form-input" name='Gender' id='Gender'/>Female
                        </td>
                    </tr>

                    <tr className="reg-row">
                        <td className="reg-table-data">
                            <label htmlFor="Address" className="reg-label">Address :</label>
                        </td>
                        <td className="reg-table-input">
                            <input type="textarea" className="form-input" id='Address' name='Address' required />
                        </td>
                    </tr>

                    <tr className="reg-row">
                        <td className="reg-table-data">
                            <label htmlFor="Phone_Number" className="reg-label">Phone Number :</label>
                        </td>
                        <td className="reg-table-input">
                            <input type="text" className="form-input" id='Phone_Number' name='Phone_Number' required/>
                        </td>
                    </tr>

                    <tr className="reg-row">
                        <td className="reg-table-data">
                            <label htmlFor="education" className="reg-label">Highest Education Level :</label>
                        </td>
                        <td className="reg-table-input">
                            <input type="text" className="form-input" id='education' name='education' required/>
                        </td>
                    </tr>

                    <tr className="reg-row">
                        <td className="reg-table-data">
                            <label htmlFor="work" className="reg-label"> Preferred Work :</label>
                        </td>
                        <td className="reg-table-input">
                            <input type="text" className="form-input" id='work' name='work' required/>
                        </td>
                    </tr>
                </tbody>

                <tr className="reg-row">
                        <td className="reg-table-data">
                            <label htmlFor="Resume/CV" className="reg-label"> Upload Resume/CV :</label>
                        </td>
                        <td className="reg-table-input">
                            <input type="file" className="form-input" id='Resume/CV' name='Resume/CV' required/>
                        </td>
                    </tr>
                
                <tfoot>
                  <tr className='reg-form-btn'>
                    <td colSpan='2'>
                            <button type="submit">Submit</button>
                            <button type="reset">Reset</button>
                    </td>
                  </tr>
                </tfoot>
                


                
            </table>
            
        </form>
    </div>
  )
}

export default Apply