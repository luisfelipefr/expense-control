import React from "react";
import { Sumarry } from "../Summary";
import { TransactionTables } from "../Transaction";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Sumarry />
      <TransactionTables/>
    </Container>
  );
}
