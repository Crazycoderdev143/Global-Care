import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
  Container,
  Body,
} from "@react-email/components";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <Html
      lang="en"
      dir="ltr"
    >
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Here's your verification code: {otp}</Preview>
      <Body
        style={{
          backgroundColor: "#f9f9f9",
          fontFamily: "Roboto, Verdana, sans-serif",
        }}
      >
        <Container
          style={{
            padding: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
          }}
        >
          <Section>
            <Row>
              <Heading as="h2">Hello {username},</Heading>
            </Row>
            <Row>
              <Text>
                Thank you for registering. Please use the following verification
                code to complete your registration:
              </Text>
            </Row>
            <Row>
              <Text
                style={{fontSize: "24px", fontWeight: "bold", margin: "16px 0"}}
              >
                {otp}
              </Text>
            </Row>
            <Row>
              <Text>
                If you did not request this code, please ignore this email.
              </Text>
            </Row>
            <Row>
              <Button
                href="https://yourapp.com/verify"
                style={{
                  backgroundColor: "#007bff",
                  color: "#ffffff",
                  padding: "12px 24px",
                  borderRadius: "4px",
                  textDecoration: "none",
                }}
              >
                Verify My Account
              </Button>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
