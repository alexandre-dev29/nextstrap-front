import { Button, Col, Modal, Row, Text } from "@nextui-org/react";
import { ErrorTypeGraphQl } from "../graphql/ConfigTypes";

/* eslint-disable-next-line */
export interface ErrorPopupProps {
  errorType: ErrorTypeGraphQl;
  messages: string[];
  onCloseEvent: any;
  openStatus: boolean;
}

export function ErrorPopup(props: ErrorPopupProps) {
  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={props.openStatus}
        onClose={props.onCloseEvent}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              There was a
              {props.errorType === ErrorTypeGraphQl.Network
                ? " Network Error"
                : " Request Error"}
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Col>
            {props.messages.map((currentMessage, index) => (
              <Row key={index} justify={"center"}>
                <Text
                  h1
                  size={16}
                  css={{
                    textGradient: "45deg, $yellow500 -20%, $red500 100%",
                  }}
                  weight="bold"
                >
                  {currentMessage}
                </Text>
              </Row>
            ))}
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={props.onCloseEvent}>
            Okay,Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ErrorPopup;
