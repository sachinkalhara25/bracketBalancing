import React, { useState,useEffect } from "react";
import axios from "axios";
import { Table, Button, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MembershipPayments = () => {
  const [payments, setPayments] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3000/api/PaymentRoutes").then((res)=> {
      setPayments(res.data);
      console.log(res.data);
    }).catch((err) =>{
      console.log("Error while getting data");
    });
  }, []);

  


  const handlePay=ugfgfghjkhff = {
    setPayments(map(payment => payment.id === id ? { ...payment, status: newStatus } : payment));

  };

  return (
    <Container className="mt-4">
      <h2>Membership Payments</h2>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Name</th>
            <th>Membership type</th>
            <th>Amount (Rs.)</th>
            <th>Payment Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>#{payment.payment_id}</td>
              <td>{payment.name}</td>
              <td>{payment.membership_type}</td>
              <td>{payment.amount}</td>
              <td>{payment.payment_date}</td>
              <td>{payment.status}</td>
              <td>
                {Paystatus == paid&& (
                  <>
                    <Button variant="success" onClick={() => handlePaymentStatus(payment.id, "Paid")}>Mark as Paid</Button>{" "}
                    <Button variant="danger" onClick={() => handlePaymentStatus(payment.id, "Failed")}>Mark as Failed</Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MembershipPayments;
