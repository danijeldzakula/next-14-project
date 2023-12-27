import { Container, Section } from "@/src/content/Content";
import type { Metadata } from 'next';
import { Fragment } from "react";

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register',
}

export default function Register() {
  return (
    <Fragment>
      <Section>
        <Container>
          <h1>Register</h1>
        </Container>
      </Section>
    </Fragment>
  )
}
