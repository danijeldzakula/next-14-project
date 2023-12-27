import { Container, Section } from "@/src/content/Content";
import type { Metadata } from 'next';
import { Fragment } from "react";

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login',
}

export default function Login() {
  return (
    <Fragment>
      <Section>
        <Container>
          <h1>Login</h1>
        </Container>
      </Section>
    </Fragment>
  )
}
  