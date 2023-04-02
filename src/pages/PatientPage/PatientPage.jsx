import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import ShowPrescription from "../../component/ShowPrescription";
import ShowLabTest from "../../component/ShowLabTest";

function PatientPage(props) {
  const [showPrescriptions, setShowPrescriptions] = useState(false);
  const [showLabTests, setShowLabTests] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [prescriptions, setPrescriptions] = useState([
    {
      date: "2022-03-15",
      medicine: "Aspirin",
      doctorId: "12345",
    },
    {
      date: "2022-03-20",
      medicine: "Paracetamol",
      doctorId: "54321",
    },
  ]);
  const [labTests, setLabTests] = useState([
    {
      testId: "001",
      testName: "Blood Test",
      testResult: "Normal",
    },
    {
      testId: "002",
      testName: "Urine Test",
      testResult: "Abnormal",
    },
  ]);
  const handleShowPrescriptions = () => {
    setShowPrescriptions(!showPrescriptions);
  };

  const handleShowLabTests = () => {
    setShowLabTests(!showLabTests);
  };

  const handleAddPrescription = (event) => {
    event.preventDefault();
    const date = event.target.date.value;
    const medicine = event.target.medicine.value;
    const doctorId = event.target.doctorId.value;
    setPrescriptions([
      ...prescriptions,
      { date: date, medicine: medicine, doctorId: doctorId },
    ]);
    event.target.reset();
  };

  const handleAddLabTest = (event) => {
    event.preventDefault();
    const testId = event.target.testId.value;
    const testName = event.target.testName.value;
    const testResult = event.target.testResult.value;
    setLabTests([
      ...labTests,
      { testId: testId, testName: testName, testResult: testResult },
    ]);
    event.target.reset();
  };

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <ShowPrescription
            handleShowPrescriptions={handleShowPrescriptions}
            prescriptions={prescriptions}
            showPrescriptions={showPrescriptions}
            isLoggedIn={isLoggedIn}
            setShowPrescriptions={setShowPrescriptions}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Col>
        <Col lg={6}>
          <ShowLabTest
            handleShowLabTests={handleShowLabTests}
            labTests={labTests}
            showLabTests={showLabTests}
            isLoggedIn={isLoggedIn}
            setShowLabTests={setShowLabTests}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default PatientPage;
