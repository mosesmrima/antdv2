// noinspection JSValidateTypes
import {Form, Row, Col, Select, Input, DatePicker, Checkbox} from "antd"
import {useState} from "react"
import "antd/dist/antd.css"



function Employee(props) {
    const [createUser, setCreateUser] = useState(false)
    const toggleCreateUser = ()=> setCreateUser(!createUser)
    const {getFieldDecorator} = props.form
    const layout = {
        labelCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 13}, lg: { span: 13 } },
        wrapperCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 24 }, lg: { span: 11 } },
        row: { gutter: [10, 16] },
        col: { span: { xs: 24, sm: 24, md: 12, lg: 8} }
    }

    return (
        <>
          <div className={"form-wrapper-div"}>
              <Form labelCol={layout.labelCol} wrapperCol={layout.wrapperCol} colon={false}>
                  {/* Row For the title field*/}
                  <Row gutter={layout.row.gutter} type={"flex"} justify={"start"}>
                      <Col {...layout.col.span}>
                          <Form.Item label={"Title"} >
                              {
                                  getFieldDecorator("title", {rules: [{required: true, message: "Please Select a title"}]})(
                                      <Select allowClear={true}>
                                      <Select.Option value={"Mr"}>Mr</Select.Option>
                                      <Select.Option value={"Miss"}>Miss</Select.Option>
                                      <Select.Option value={"Mrs"}>Mrs</Select.Option>
                                      <Select.Option value={"Doctor"}>Doctor</Select.Option>
                                      <Select.Option value={"Others"}>Others</Select.Option>
                                  </Select>
                                  )
                              }
                          </Form.Item>
                      </Col>
                  </Row>

                  {/*Rest of the form fields*/}
                  <Row gutter={layout.row.gutter} type={"flex"} justify={"start"}>
                      <Col {...layout.col.span}>
                          <Form.Item label={"Surname"}>
                              {
                                  getFieldDecorator("surname", {rules: [{required: true, message: "Please input the name"}]})(
                                      <Input/>
                                  )
                              }
                          </Form.Item>
                      </Col>
                      <Col {...layout.col.span} style={{height: "auto"}}>
                          <Form.Item label={"First Name"} >
                              {
                                  getFieldDecorator("given_name", {rules: [{required: true, message: "Please input the name"}]})(
                                      <Input/>
                                  )
                              }
                          </Form.Item>
                      </Col>
                      <Col {...layout.col.span}>
                          <Form.Item label={"Middle Name"}>
                              {
                                  getFieldDecorator("middle_name")(
                                      <Input/>
                                  )
                              }
                          </Form.Item>
                      </Col>
                      <Col {...layout.col.span}>
                          <Form.Item label={"Gender"}>
                              {
                                  getFieldDecorator("gender", {rules: [{required: true, message: "Please select the gender"}]})(
                                      <Select allowClear={true}>
                                          <Select.Option value={"M"}>Male</Select.Option>
                                          <Select.Option value={"F"}>Female</Select.Option>
                                          <Select.Option value={"O"}>Others</Select.Option>
                                      </Select>
                                  )
                              }
                          </Form.Item>
                      </Col>
                      <Col {...layout.col.span}>
                          <Form.Item label={"Marital Status"}>
                              {
                                  getFieldDecorator("marital_status", {rules: [{required: true, message: "Please select the marital status"}]})(
                                      <Select allowClear={true}>
                                          <Select.Option value={"SINGLE"}>Single</Select.Option>
                                          <Select.Option value={"MARRIED"}>Married</Select.Option>
                                          <Select.Option value={"DIVORCED"}>Divorced</Select.Option>
                                          <Select.Option value={"WIDOWED"}>Widowed</Select.Option>
                                          <Select.Option value={"COMPLICATED"}>Complicated</Select.Option>
                                          <Select.Option value={"OTHERS"}>Others</Select.Option>
                                      </Select>
                                  )
                              }
                          </Form.Item>
                      </Col>
                      <Col {...layout.col.span}>
                          <Form.Item label={"Date of Birth"}>
                              {
                                  getFieldDecorator("date_of_birth", {rules: [{required: true, message: "Please input the date of birth"}]})(
                                      <DatePicker/>
                                  )
                              }
                          </Form.Item>
                      </Col>
                      <Col {...layout.col.span}>
                          <Form.Item label={"Email"}>
                              {
                                  getFieldDecorator("email", {rules: [{required: true, type: "email"}]})(
                                      <Input/>
                                  )
                              }
                          </Form.Item>
                      </Col>
                      <Col {...layout.col.span}>
                          <Form.Item label={"Mobile No."}>
                              {
                                  getFieldDecorator("mobile", {rules: [{required: true, message: "Please enter the phone number"}]})(
                                      <Input/>
                                  )
                              }
                          </Form.Item>
                      </Col>
                      <Col {...layout.col.span}>
                          <Form.Item label={"Tel No."}>
                              {
                                  getFieldDecorator("phone_number")(
                                      <Input/>
                                  )
                              }
                          </Form.Item>
                      </Col>
                      <Col {...layout.col.span}>
                          <Form.Item label={"Country"}>
                              {
                                  getFieldDecorator("country")(
                                      <Select allowClear={true}>
                                          <Select.Option value={"Kenya"}>Kenya</Select.Option>
                                      </Select>
                                  )
                              }
                          </Form.Item>
                      </Col>
                      <Col {...layout.col.span}>
                          <Form.Item label={"Town"}>
                              {
                                  getFieldDecorator("town")(
                                      <Input/>
                                  )
                              }
                          </Form.Item>
                      </Col>
                      <Col {...layout.col.span}>
                          <Form.Item label={"Postal Code"}>
                              {
                                  getFieldDecorator("postal_code")(
                                      <Input/>
                                  )
                              }
                          </Form.Item>
                      </Col>
                      <Col {...layout.col.span}>
                          <Form.Item label={"Department"}>
                              {
                                  getFieldDecorator("department_code", {rules: [{required: true, message: "Please select the department"}]})(
                                      <Select allowClear={true}>
                                          <Select.Option value={1}>Consultation</Select.Option>
                                          <Select.Option value={2}>Triage</Select.Option>
                                          <Select.Option value={3}>Nursing</Select.Option>
                                          <Select.Option value={4}>Pharmacy</Select.Option>
                                          <Select.Option value={5}>Laboratory</Select.Option>
                                          <Select.Option value={6}>Reception</Select.Option>
                                          <Select.Option value={7}>Radiology</Select.Option>
                                          <Select.Option value={8}>Accounts</Select.Option>
                                          <Select.Option value={9}>Logistics</Select.Option>
                                          <Select.Option value={10}>Administration</Select.Option>
                                      </Select>
                                  )
                              }
                          </Form.Item>
                      </Col>
                      <Col {...layout.col.span}>
                          <Form.Item label={"Employee Category"}>
                              {
                                  getFieldDecorator("employee_category", {rules: [{required: true, message: "Please select the employee category"}]})(
                                      <Select>
                                          <Select.Option value={"Doctor"}>Doctor</Select.Option>
                                          <Select.Option value={"Lab_Tech"}>Lab Tech</Select.Option>
                                          <Select.Option value={"Nurse"}>Nurse</Select.Option>
                                          <Select.Option value={"Pharmacist"}>Pharmacist</Select.Option>
                                          <Select.Option value={"Radiologist"}>Radiologist</Select.Option>
                                      </Select>
                                  )
                              }
                          </Form.Item>
                      </Col>
                      <Col {...layout.col.span}>
                          <Form.Item label={"Specialization"}>
                              {
                                  getFieldDecorator("specialization")(
                                      <Select/>
                                  )
                              }
                          </Form.Item>
                      </Col>
                      <Col {...layout.col.span}>
                          <Form.Item label={"Staff Number"}>
                              {
                                  getFieldDecorator("staff_number", {rules: [{required: true, message: "Please enter the staff number"}]})(
                                      <Input/>
                                  )
                              }
                          </Form.Item>
                      </Col>
                      <Col {...layout.col.span}>
                          <Form.Item label={"License No."}>
                              {
                                  getFieldDecorator("license_no")(
                                      <Input/>
                                  )
                              }
                          </Form.Item>
                      </Col>
                      <Col {...layout.col.span}>
                          <Form.Item label={"Facility"}>
                              {
                                  getFieldDecorator("facility_id", {rules: [{required: true, message: "Please select the facility"}]})(
                                      <Select allowClear >
                                          <Select.Option value={1}>Smart International</Select.Option>
                                          <Select.Option value={6}>Smart 2</Select.Option>
                                      </Select>
                                  )
                              }
                          </Form.Item>
                      </Col>
                  </Row>
                  <Row gutter={layout.row.gutter} type={"flex"} justify={"start"}>
                      <Col {...layout.col.span}>
                          <Form.Item label={"Create user account"}>
                              {
                                  getFieldDecorator("create_user_account")(
                                      <Checkbox onChange={toggleCreateUser}></Checkbox>
                                  )
                              }
                              </Form.Item>
                      </Col>
                  </Row>
                  {
                      createUser &&
                      <Row gutter={layout.row.gutter} type={"flex"} justify={"start"}>
                          <Col {...layout.col.span}>
                              <Form.Item label={"Roles"}>
                                  {
                                      getFieldDecorator("roles", {rules: [{required: true, message: "Please select at least one role"}]})(
                                          <Select allowClear  mode={"multiple"}>
                                              <Select.Option value={"User"}>User</Select.Option>
                                              <Select.Option value={"Admin"}>Admin</Select.Option>
                                              <Select.Option value={"Doctor"}>Doctor</Select.Option>
                                              <Select.Option value={"Nurse"}>Nurse</Select.Option>
                                              <Select.Option value={"Lab Tech"}>Lab Tech</Select.Option>
                                          </Select>
                                      )
                                  }
                              </Form.Item>
                          </Col>
                          <Col {...layout.col.span}>
                              <Form.Item label={"Username"}>
                                  {
                                      getFieldDecorator("username", {rules: [{required: true, message: "Please enter the user name"}]})(
                                          <Input/>
                                      )
                                  }
                              </Form.Item>
                          </Col>
                      </Row>
                  }
              </Form>
          </div>
        </>
    );
}


const EmployeesForm = Form.create({name: "EmployeesForm"})(Employee)
export default EmployeesForm