function Table(){
    return(<div>
        <table border={1}>
            <tr>
                <th>Student numder </th><th>student name</th><th>mobile number</th><th>email</th>
            </tr>
            <tr>
                <td rowSpan={2}>info</td>
                <td colSpan={4}>501</td>
            </tr>
            <tr>
                <td>502</td>
                <td>raju</td>
                <td>9000255</td>
                <td>email@.com</td>
            </tr>

        </table>

    </div>);
}
export default Table