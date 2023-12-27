import { Container } from "@/src/content/Content";
import { cn } from "@/src/utils/pipes/classNames.pipe";

export default function Footer() {
  return (
    <footer className={cn('py-8 officialColor text-white')}>
      <Container>
        <p className="text-center">Copyright by Danijel Dzakula</p>
      </Container>
    </footer>
  )
}
