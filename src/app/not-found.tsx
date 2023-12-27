import { Fragment } from "react";
import { Section, Container } from "@/src/content/Content";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 | Not Found Error',
  description: '404 | Not Found Error',
}

export default function NotFound() {
  return (
    <Fragment>
      <Section>
        <Container>
          <h1>404 | Not Found Error</h1>
        </Container>
      </Section>
    </Fragment>
  )
}