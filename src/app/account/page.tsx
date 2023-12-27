import { Container, Section } from "@/src/content/Content";
import type { Metadata } from 'next';
import { Fragment } from "react";

export const metadata: Metadata = {
  title: 'Account',
  description: 'Account',
}

export default function Login() {
  return (
    <Fragment>
      <Section>
        <Container>
          <h1>Account</h1>
        </Container>
      </Section>
    </Fragment>
  )
}
  