"use client";
import React from "react";
import styled from "styled-components";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { Form, Input, Button, Select, Row, Col } from 'antd';
import { UserOutlined, MailOutlined, MessageOutlined, PhoneOutlined } from '@ant-design/icons';

const { Option } = Select;

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia (Czech Republic)",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (formerly Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];


const Container = styled.div`
  display: flex;
  justify-content: right;
  padding: 20px;
  min-height: 100vh;
  
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 24px;
  background: rgba(20, 20, 20, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid whitesmoke;
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.05);
  font-family: 'DM Sans', sans-serif;
  color: white;
`;

const StyledHeading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Orbitron', sans-serif;
  color: #7adc40;
  letter-spacing: 1px;
`;

const StyledInput = styled(Input)`
  background: rgba(76, 76, 76, 0.7);
  border: none;
  padding: 12px;
  border-radius: 8px;
  color: #fff;
  transition: all 0.2s ease;
  backdrop-filter: blur(6px);
  
  &:focus, &:hover {
    background: rgba(90, 90, 90, 0.9);
    box-shadow: 0 0 8px rgba(122, 220, 64, 0.3);
    outline: none;
  }
`;

const StyledTextArea = styled(Input.TextArea)`
  background: rgba(76, 76, 76, 0.7);
  border: none;
  padding: 12px;
  border-radius: 8px;
  color: #fff;
  transition: all 0.2s ease;
  backdrop-filter: blur(6px);

  &:focus, &:hover {
    background: rgba(90, 90, 90, 0.9);
    box-shadow: 0 0 8px rgba(122, 220, 64, 0.3);
    outline: none;
  }
`;

const GreenButton = styled(Button)`
  background: linear-gradient(135deg, #28a745, #21bf45) !important;
  border: none !important;
  font-family: 'DM Sans', sans-serif;
  font-weight: bold;
  padding: 12px;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background: linear-gradient(135deg, #21bf45, #1e7e34) !important;
    box-shadow: 0 0 10px rgba(40, 167, 69, 0.5);
  }
`;

const StyledFormItem = styled(Form.Item)`
  width: 100%;
  label {
    color: white !important;
    font-weight: 500;
  }
`;
const StyledSelect = styled(Select)`
  width: 100% !important;
  background: rgba(76, 76, 76, 0.7);
  border: none;
  border-radius: 8px;
  color: #fff !important;
  transition: all 0.2s ease;
  backdrop-filter: blur(6px);

  .ant-select-selector {
    width: 100% !important;
    background: transparent !important;
    color: #fff !important;
    border: none !important;
    padding: 12px !important;
    border-radius: 8px !important;
    display: flex !important;
    align-items: center !important;
  }

  .ant-select-arrow {
    color: #7adc40 !important;
  }

  &:focus, &:hover {
    background: rgba(90, 90, 90, 0.9);
    box-shadow: 0 0 8px rgba(122, 220, 64, 0.3);
    outline: none;
  }
`;


export default function Contact() {
  return (
    <>
      <Header />
      <Container>
        <FormWrapper>
          <StyledHeading>Contact Us</StyledHeading>
          <Form layout="vertical">
            <Row gutter={16}>
              <Col span={12}>
                <StyledFormItem
                  name="firstName"
                  label="First Name"
                  rules={[{ required: true, message: 'Please enter your first name' }]}
                >
                  <StyledInput prefix={<UserOutlined />} placeholder="First Name" />
                </StyledFormItem>
              </Col>
              <Col span={12}>
                <StyledFormItem
                  name="lastName"
                  label="Last Name"
                  rules={[{ required: true, message: 'Please enter your last name' }]}
                >
                  <StyledInput prefix={<UserOutlined />} placeholder="Last Name" />
                </StyledFormItem>
              </Col>
            </Row>

            <StyledFormItem
              name="email"
              label="Email"
              rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}
            >
              <StyledInput prefix={<MailOutlined />} placeholder="Email Address" />
            </StyledFormItem>

            <Row gutter={16}>
  <Col span={12}>
    <StyledFormItem
      name="phone"
      label="Phone Number (Optional)"
      rules={[{ pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit phone number' }]}
    >
      <StyledInput prefix={<PhoneOutlined />} placeholder="Phone Number" />
    </StyledFormItem>
  </Col>
  <Col span={12}>
    <StyledFormItem name="country" label="Country">
  <StyledSelect placeholder="Select your country" showSearch>
    {countries.map((country) => (
      <Option key={country} value={country}>
        {country}
      </Option>
    ))}
  </StyledSelect>
</StyledFormItem>

  </Col>
</Row>


            
            <StyledFormItem name="How did you find us?" label="How did you hear about us">
              <StyledTextArea rows={4} placeholder="How did you hear about us" />
            </StyledFormItem>

            <StyledFormItem
              name="message"
              label="Message"
              rules={[{ required: true, min: 10, message: 'Message must be at least 10 characters long' }]}
            >
              <StyledTextArea rows={4} placeholder="Write your message here..." />
            </StyledFormItem>

            <StyledFormItem>
              <GreenButton type="primary" htmlType="submit" icon={<MessageOutlined />} block>
                Send Message
              </GreenButton>
            </StyledFormItem>
          </Form>
        </FormWrapper>
      </Container>
      <Footer />
    </>
  );
}
