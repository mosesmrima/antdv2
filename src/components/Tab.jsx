import {Tabs} from "antd"
import EmployeesForm from "./EmployeesForm.jsx";
import "../styles/Tab.css"
export default function TabView() {
    return (
        <div className={"tab-wrapper-div"}>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Employees" key="1">
                    <EmployeesForm/>
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}